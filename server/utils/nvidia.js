const fetch = require("node-fetch");

const NVIDIA_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const DEFAULT_MODEL = process.env.NVIDIA_MODEL || "meta/llama-3.1-70b-instruct";

/**
 * IMPORTANT: the AI is deliberately given NO power to choose a program or
 * to invent a reason. It only receives the already-decided pick and the
 * already-computed, fact-checked reasoning, and is asked to restyle the
 * headline/encouragement around it. This is what makes it impossible for
 * the model to fabricate a relationship (e.g. "Math relates to Pharmacy")
 * — it has nothing to reason with beyond what's already been verified.
 */
function buildSystemPrompt() {
  return `You are a friendly, energetic AI Career Advisor voice for a NIILM University kiosk.
You will be given a student's name, the program or stream ALREADY chosen for them by a
verified recommendation engine, and a short, fact-checked reasoning sentence explaining
that choice.

Your ONLY job: write a short punchy headline and one encouraging closing line, in the
same spirit as the reasoning you were given.

Rules:
- Do NOT introduce any new facts, subjects, or relationships beyond what's in the reasoning you were given.
- Do NOT contradict or change the program/stream you were given.
- Headline: max 12 words, must include the student's name, upbeat tone.
- Encouragement: one short energetic sentence about their future at NIILM.

Respond with STRICT JSON ONLY, no markdown fences, no commentary:
{
  "headline": "<max 12 words, includes the student's name>",
  "encouragement": "<one short energetic sentence>"
}`;
}

function buildUserPrompt({ name, pickName, reasoning }) {
  return `Student name: ${name}
Already-chosen recommendation: ${pickName}
Verified reasoning (do not contradict, do not add new facts): ${reasoning}

Write the headline and encouragement now, as JSON only.`;
}

/**
 * @param {object} answers - the student's raw answers (only used for the name)
 * @param {object} deterministicResult - the already-decided, verified result
 *   from recommend.js (must have .primary.name or .recommendedStream.label,
 *   and .reasoning)
 * @returns {Promise<{headline: string, encouragement: string}>}
 */
async function getAIFlavorText(answers, deterministicResult) {
  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) {
    throw new Error("NVIDIA_API_KEY not set");
  }

  const pickName =
    deterministicResult.type === "stream"
      ? `${deterministicResult.recommendedStream.label} stream`
      : deterministicResult.primary.name;

  const body = {
    model: DEFAULT_MODEL,
    messages: [
      { role: "system", content: buildSystemPrompt() },
      {
        role: "user",
        content: buildUserPrompt({
          name: answers.name,
          pickName,
          reasoning: deterministicResult.reasoning
        })
      }
    ],
    temperature: 0.7,
    top_p: 0.9,
    max_tokens: 150,
    stream: false
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  let response;
  try {
    response = await fetch(NVIDIA_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body),
      signal: controller.signal
    });
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`NVIDIA API error ${response.status}: ${text}`);
  }

  const data = await response.json();
  const raw = data?.choices?.[0]?.message?.content?.trim() || "";
  const cleaned = raw.replace(/^```json/i, "").replace(/^```/, "").replace(/```$/, "").trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (err) {
    throw new Error(`Could not parse NVIDIA response as JSON: ${cleaned.slice(0, 200)}`);
  }

  if (!parsed.headline || !parsed.encouragement) {
    throw new Error("NVIDIA response missing headline/encouragement");
  }

  // Guard rail: if the model ignored instructions and wrote something huge
  // or clearly off-task, discard it and let the caller fall back.
  if (parsed.headline.length > 140 || parsed.encouragement.length > 220) {
    throw new Error("NVIDIA response exceeded expected length — discarding");
  }

  return { headline: parsed.headline, encouragement: parsed.encouragement };
}

module.exports = { getAIFlavorText };

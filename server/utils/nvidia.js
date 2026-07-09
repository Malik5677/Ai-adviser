const fetch = require("node-fetch");
<<<<<<< HEAD

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
=======
const { PROGRAMS } = require("../data/niilmData");

const NVIDIA_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const DEFAULT_MODEL =
  process.env.NVIDIA_MODEL || "meta/llama-3.1-70b-instruct";

function buildProgramCatalogue() {
  return PROGRAMS.map(
    (p) =>
      `- id: "${p.id}" | ${p.name} (${p.specialisation}) | group: ${p.group} | careers: ${p.careers.join(", ")}`
  ).join("\n");
}

function buildSystemPrompt() {
  return `You are the AI Career Advisor for a live showcase kiosk at NIILM University.
A student standing at the kiosk has just answered a short questionnaire.
Your job is to recommend ONE best-fit program from NIILM University's real catalogue below,
plus up to two good alternates, and explain the choice in a warm, encouraging, easy-to-understand way.

NIILM University program catalogue (you may ONLY recommend ids from this list):
${buildProgramCatalogue()}

Respond with STRICT JSON ONLY, no markdown fences, no commentary, matching exactly this shape:
{
  "primaryProgramId": "<one id from the catalogue>",
  "alternateProgramIds": ["<id>", "<id>"],
  "headline": "<one short punchy sentence, max 12 words, speaking directly to the student by name>",
  "reasoning": "<2-3 sentences explaining why this program fits their subject and interest choices>",
  "encouragement": "<1 short, energetic closing sentence about their future at NIILM>"
}`;
}

function buildUserPrompt({ name, qualification, subjects, interest, engineeringFocus }) {
  return `Student name: ${name}
Current qualification: ${qualification}
Favourite subjects: ${subjects.join(", ") || "not specified"}
Broad interest area: ${interest || "not specified"}
Engineering focus (if applicable): ${engineeringFocus || "n/a"}

Pick the single best-fit program id for this student and respond with the JSON object only.`;
}

async function getAIRecommendation(answers) {
  const apiKey = process.env.NVIDIA_API_KEY?.trim();

>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
  if (!apiKey) {
    throw new Error("NVIDIA_API_KEY not set");
  }

<<<<<<< HEAD
  const pickName =
    deterministicResult.type === "stream"
      ? `${deterministicResult.recommendedStream.label} stream`
      : deterministicResult.primary.name;

=======
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
  const body = {
    model: DEFAULT_MODEL,
    messages: [
      { role: "system", content: buildSystemPrompt() },
<<<<<<< HEAD
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
=======
      { role: "user", content: buildUserPrompt(answers) }
    ],
    temperature: 0.6,
    top_p: 0.9,
    max_tokens: 400,
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
    stream: false
  };

  const controller = new AbortController();
<<<<<<< HEAD
  const timeout = setTimeout(() => controller.abort(), 12000);
=======
  const timeout = setTimeout(() => controller.abort(), 30000);
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

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
<<<<<<< HEAD
=======
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("NVIDIA request timed out after 30 seconds");
    }
    throw err;
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`NVIDIA API error ${response.status}: ${text}`);
  }

  const data = await response.json();
  const raw = data?.choices?.[0]?.message?.content?.trim() || "";
<<<<<<< HEAD
  const cleaned = raw.replace(/^```json/i, "").replace(/^```/, "").replace(/```$/, "").trim();
=======

  const cleaned = raw
    .replace(/^```json/i, "")
    .replace(/^```/, "")
    .replace(/```$/, "")
    .trim();
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (err) {
<<<<<<< HEAD
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
=======
    throw new Error(
      `Could not parse NVIDIA response as JSON: ${cleaned.slice(0, 200)}`
    );
  }

  const validIds = new Set(PROGRAMS.map((p) => p.id));

  if (!validIds.has(parsed.primaryProgramId)) {
    throw new Error(
      `NVIDIA response used an unknown program id: ${parsed.primaryProgramId}`
    );
  }

  parsed.alternateProgramIds = (parsed.alternateProgramIds || []).filter((id) =>
    validIds.has(id)
  );

  return parsed;
}

module.exports = { getAIRecommendation };
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

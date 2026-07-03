const fetch = require("node-fetch");
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

  if (!apiKey) {
    throw new Error("NVIDIA_API_KEY not set");
  }

  const body = {
    model: DEFAULT_MODEL,
    messages: [
      { role: "system", content: buildSystemPrompt() },
      { role: "user", content: buildUserPrompt(answers) }
    ],
    temperature: 0.6,
    top_p: 0.9,
    max_tokens: 400,
    stream: false
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

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
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("NVIDIA request timed out after 30 seconds");
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`NVIDIA API error ${response.status}: ${text}`);
  }

  const data = await response.json();
  const raw = data?.choices?.[0]?.message?.content?.trim() || "";

  const cleaned = raw
    .replace(/^```json/i, "")
    .replace(/^```/, "")
    .replace(/```$/, "")
    .trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (err) {
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
require("dotenv").config();
const express = require("express");
const cors = require("cors");

<<<<<<< HEAD
const {
  PROGRAMS,
  BOARDS,
  BOARD_SUBJECTS,
  SUBJECTS_12,
  STREAMS,
  DIPLOMA_OPTIONS,
  DEGREE_OPTIONS,
  SUBJECTS,
  INTERESTS,
  ENGINEERING_FOCUS,
  CAREER_JOURNEY,
  DREAM_COMPANIES
} = require("./data/niilmData");
const { buildDeterministicResult } = require("./utils/recommend");
const { getAIFlavorText } = require("./utils/nvidia");
=======
const { PROGRAMS, SUBJECTS, INTERESTS, ENGINEERING_FOCUS, CAREER_JOURNEY, DREAM_COMPANIES } = require("./data/niilmData");
const { recommendPrograms } = require("./utils/recommend");
const { getAIRecommendation } = require("./utils/nvidia");
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// ---- Static reference data for the front-end questionnaire ----
app.get("/api/meta", (req, res) => {
<<<<<<< HEAD
  res.json({
    BOARDS,
    BOARD_SUBJECTS,
    SUBJECTS_12,
    STREAMS,
    DIPLOMA_OPTIONS,
    DEGREE_OPTIONS,
    SUBJECTS,
    INTERESTS,
    ENGINEERING_FOCUS,
    CAREER_JOURNEY,
    DREAM_COMPANIES
  });
=======
  res.json({ SUBJECTS, INTERESTS, ENGINEERING_FOCUS, CAREER_JOURNEY, DREAM_COMPANIES });
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
});

app.get("/api/programs", (req, res) => {
  res.json(PROGRAMS);
});

// ---- Core recommendation endpoint ----
<<<<<<< HEAD
// Architecture note: the pick (program or stream) and its reasoning are
// ALWAYS computed deterministically from real subject/interest/stream data
// — this works fully offline and can never invent a false relationship.
// The NVIDIA API, when configured, is only ever asked to restyle the
// headline/encouragement on top of that already-decided, verified result.
app.post("/api/recommend", async (req, res) => {
  const { name, qualification, board, subjects, stream, interest, engineeringFocus, qualificationDetail } = req.body || {};
=======
app.post("/api/recommend", async (req, res) => {
  const { name, qualification, subjects, interest, engineeringFocus } = req.body || {};
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

  if (!name || !qualification) {
    return res.status(400).json({ error: "name and qualification are required" });
  }

  const answers = {
    name,
    qualification,
<<<<<<< HEAD
    board,
    subjects: Array.isArray(subjects) ? subjects : [],
    stream,
    interest,
    engineeringFocus,
    qualificationDetail
  };

  const deterministic = buildDeterministicResult(answers);

  try {
    const flavor = await getAIFlavorText(answers, deterministic);
    return res.json({
      source: "nvidia-ai-flavor",
      ...deterministic,
      headline: flavor.headline,
      encouragement: flavor.encouragement
    });
  } catch (err) {
    console.warn("[NVIDIA flavor fallback]", err.message);
    return res.json({
      source: "local-engine",
      ...deterministic
=======
    subjects: Array.isArray(subjects) ? subjects : [],
    interest,
    engineeringFocus
  };

  const fallbackMatches = recommendPrograms(answers);
  const fallbackPrimary = fallbackMatches[0];

  // Try the NVIDIA-hosted LLM first for a personalised explanation.
  // If it's not configured or fails for any reason (offline demo, no key,
  // rate limit, etc.) we gracefully fall back to the local rule engine so
  // the live showcase never breaks.
  try {
    const ai = await getAIRecommendation(answers);
    const primary = PROGRAMS.find((p) => p.id === ai.primaryProgramId) || fallbackPrimary;
    const alternates = ai.alternateProgramIds
      .map((id) => PROGRAMS.find((p) => p.id === id))
      .filter(Boolean)
      .filter((p) => p.id !== primary.id)
      .slice(0, 2);

    const filledAlternates =
      alternates.length > 0
        ? alternates
        : fallbackMatches.filter((p) => p.id !== primary.id).slice(0, 2);

    return res.json({
      source: "nvidia-ai",
      primary,
      alternates: filledAlternates,
      headline: ai.headline,
      reasoning: ai.reasoning,
      encouragement: ai.encouragement
    });
  } catch (err) {
    console.warn("[NVIDIA API fallback]", err.message);
    const alternates = fallbackMatches.filter((p) => p.id !== fallbackPrimary.id).slice(0, 2);
    return res.json({
      source: "local-engine",
      primary: fallbackPrimary,
      alternates,
      headline: `${name}, ${fallbackPrimary.name} looks like a great fit for you!`,
      reasoning: fallbackPrimary.blurb,
      encouragement: "NIILM will help you turn this into a real career — let's get started!"
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
    });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", nvidiaConfigured: Boolean(process.env.NVIDIA_API_KEY) });
});

app.listen(PORT, () => {
  console.log(`NIILM AI Advisor server running on http://localhost:${PORT}`);
  console.log(
    process.env.NVIDIA_API_KEY
<<<<<<< HEAD
      ? "NVIDIA API key detected — AI headline/encouragement flavor enabled."
      : "No NVIDIA_API_KEY set — running fully offline on the local recommendation engine."
=======
      ? "NVIDIA API key detected — AI recommendations enabled."
      : "No NVIDIA_API_KEY set — using local rule-based recommendations only."
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
  );
});

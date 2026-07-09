require("dotenv").config();
const express = require("express");
const cors = require("cors");

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

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// ---- Static reference data for the front-end questionnaire ----
app.get("/api/meta", (req, res) => {
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
});

app.get("/api/programs", (req, res) => {
  res.json(PROGRAMS);
});

// ---- Core recommendation endpoint ----
// Architecture note: the pick (program or stream) and its reasoning are
// ALWAYS computed deterministically from real subject/interest/stream data
// — this works fully offline and can never invent a false relationship.
// The NVIDIA API, when configured, is only ever asked to restyle the
// headline/encouragement on top of that already-decided, verified result.
app.post("/api/recommend", async (req, res) => {
  const { name, qualification, board, subjects, stream, interest, engineeringFocus, qualificationDetail } = req.body || {};

  if (!name || !qualification) {
    return res.status(400).json({ error: "name and qualification are required" });
  }

  const answers = {
    name,
    qualification,
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
      ? "NVIDIA API key detected — AI headline/encouragement flavor enabled."
      : "No NVIDIA_API_KEY set — running fully offline on the local recommendation engine."
  );
});

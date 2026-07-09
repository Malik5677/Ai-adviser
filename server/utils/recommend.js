const {
  PROGRAMS,
  ENGINEERING_FOCUS,
  DIPLOMA_OPTIONS,
  DEGREE_OPTIONS,
  STREAMS,
  SUBJECT_LABELS
} = require("../data/niilmData");

/**
 * ============================================================================
 * DETERMINISTIC RECOMMENDATION + REASONING ENGINE
 * ============================================================================
 * This is the single source of truth for WHICH program/stream gets
 * recommended and WHY. It never depends on the network, so the kiosk works
 * fully offline. When the NVIDIA API is available, it is only ever asked to
 * write a headline/encouragement *on top of* this deterministic result — it
 * cannot change the pick and cannot invent a subject/course relationship
 * that doesn't actually exist in the data (e.g. "Math relates to Pharmacy").
 * ============================================================================
 */

function joinNicely(items) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

function subjectLabels(ids = []) {
  return ids.map((id) => SUBJECT_LABELS[id] || id);
}

/** Only ever mentions a subject if it's a real overlap with the program's tags. */
function buildProgramReasoning(program, answers) {
  const subjects = answers.subjects || [];
  const overlap = subjects.filter((s) => program.tags.includes(s));

  if (overlap.length > 0) {
    return `Your interest in ${joinNicely(subjectLabels(overlap))} lines up really well with ${program.name} — this is a genuine, subject-backed match.`;
  }

  if (answers.interest && answers.interest !== "unsure") {
    return `Since you're aiming for ${answers.interest.replace(/-/g, " ")}, ${program.name} is the right launchpad for that goal at NIILM.`;
  }

  if (answers.stream) {
    const streamLabel = STREAMS.find((s) => s.id === answers.stream)?.label || answers.stream;
    return `${program.name} is one of the strongest paths NIILM offers within the ${streamLabel} stream.`;
  }

  return program.blurb;
}

function scoreAll({ subjects = [], interest, stream }) {
  const scored = PROGRAMS.map((program) => {
    let score = 0;

    subjects.forEach((s) => {
      if (program.tags.includes(s)) score += 2;
    });

    if (stream && program.streamFit && program.streamFit.includes(stream)) {
      score += 6; // stream is the primary signal for Class 10 students
    }

    if (interest && interest !== "unsure" && program.interests.includes(interest)) {
      score += 5;
    }

    return { ...program, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored;
}

/** Class 12 path (and generic fallback): subjects + interest (+ optional engineering focus). */
function buildProgramResult(answers) {
  const { name, interest, engineeringFocus } = answers;

  let primary;
  let rest;

  // An explicit engineering branch focus is a direct, unambiguous pick.
  if (interest === "engineering" && engineeringFocus) {
    const focus = ENGINEERING_FOCUS.find((f) => f.id === engineeringFocus);
    if (focus) {
      primary = PROGRAMS.find((p) => p.id === focus.programId);
      rest = scoreAll(answers).filter((p) => p.id !== primary.id);
    }
  }

  if (!primary) {
    const scored = scoreAll(answers);
    primary = scored[0];
    rest = scored.slice(1);
  }

  const alternates = rest.slice(0, 2);
  const reasoning = buildProgramReasoning(primary, answers);

  return {
    type: "program",
    primary,
    alternates,
    reasoning,
    headline: `${name}, ${primary.name} looks like a great fit for you!`,
    encouragement: "NIILM will help you turn this into a real career — let's get started!"
  };
}

/** Diploma / Graduate path: direct mapping from what they already hold. */
function buildQualificationDetailResult(answers) {
  const { name, qualification, qualificationDetail } = answers;
  const pool = qualification === "diploma" ? DIPLOMA_OPTIONS : DEGREE_OPTIONS;
  const match = pool.find((o) => o.id === qualificationDetail);

  const primary = (match && PROGRAMS.find((p) => p.id === match.leadsTo)) || PROGRAMS[0];
  const rest = scoreAll(answers).filter((p) => p.id !== primary.id);
  const alternates = rest.slice(0, 2);

  const heldLabel = match ? match.label : "your current qualification";
  const reasoning = `You already hold ${heldLabel}. At NIILM, ${primary.name} is the natural next step to build on that foundation.`;

  return {
    type: "program",
    primary,
    alternates,
    reasoning,
    headline: `${name}, here's your next step after ${heldLabel}!`,
    encouragement: "NIILM will help you turn this into a real career — let's get started!"
  };
}

/**
 * Class 10 path: the STUDENT already chose their stream in the UI — that
 * choice is always respected as-is (it's their decision, not the AI's).
 * The engine's job is to (a) explain that choice honestly using their
 * actual subjects, and (b) preview which real NIILM programs that stream
 * opens up later, so nothing implies they're picking a university course
 * right now.
 */
function buildClass10Result(answers) {
  const { name, stream } = answers;
  const streamInfo = STREAMS.find((s) => s.id === stream) || STREAMS[0];

  const candidates = scoreAll(answers).filter(
    (p) => p.streamFit && p.streamFit.includes(streamInfo.id)
  );
  const futurePrograms = candidates.slice(0, 3);
  const topProgram = futurePrograms[0];

  const subjects = answers.subjects || [];
  const overlap = subjects.filter((s) => topProgram && topProgram.tags.includes(s));

  let reasoning;
  if (overlap.length > 0) {
    reasoning = `You picked ${joinNicely(subjectLabels(overlap))} — that pairs really well with the ${streamInfo.label} stream, and points toward programs like ${topProgram.name} later at NIILM.`;
  } else {
    reasoning = `${streamInfo.label} (${streamInfo.description}) is a great choice for Class 11 & 12. It keeps strong NIILM options open, including ${topProgram ? topProgram.name : "several programs"}.`;
  }

  return {
    type: "stream",
    recommendedStream: streamInfo,
    futurePrograms,
    reasoning,
    headline: `${name}, ${streamInfo.label} is a great direction for you!`,
    encouragement: "Two years from now, NIILM will be ready with the right program for you."
  };
}

/** Single entry point used by the server route. */
function buildDeterministicResult(answers) {
  if (answers.qualification === "10th") return buildClass10Result(answers);
  if (answers.qualification === "diploma" || answers.qualification === "graduate") {
    return buildQualificationDetailResult(answers);
  }
  return buildProgramResult(answers);
}

module.exports = { buildDeterministicResult, buildProgramReasoning, scoreAll };

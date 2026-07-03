const { PROGRAMS, ENGINEERING_FOCUS } = require("../data/niilmData");

/**
 * Scores every program against the student's answers and returns the
 * best match plus two runner-up suggestions. Pure, deterministic,
 * no network calls — used as an offline fallback for the LLM call,
 * and also to keep the LLM grounded (its answer is validated against
 * this list of program ids).
 */
function recommendPrograms({ qualification, subjects = [], interest, engineeringFocus }) {
  // If the student is in engineering and picked a specific focus area,
  // that maps directly to one branch — highest confidence path.
  if (interest === "engineering" && engineeringFocus) {
    const focus = ENGINEERING_FOCUS.find((f) => f.id === engineeringFocus);
    if (focus) {
      const primary = PROGRAMS.find((p) => p.id === focus.programId);
      const rest = scoreAll({ qualification, subjects, interest }).filter((p) => p.id !== primary.id);
      return [primary, ...rest.slice(0, 2)];
    }
  }

  return scoreAll({ qualification, subjects, interest }).slice(0, 3);
}

function scoreAll({ subjects = [], interest }) {
  const scored = PROGRAMS.map((program) => {
    let score = 0;
    subjects.forEach((s) => {
      if (program.tags.includes(s)) score += 2;
    });
    if (interest && interest !== "unsure" && program.interests.includes(interest)) {
      score += 5;
    }
    return { ...program, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored;
}

module.exports = { recommendPrograms };

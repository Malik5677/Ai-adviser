import { useMemo, useState, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";

import AuroraBackground from "./components/AuroraBackground";
import SoundToggle from "./components/SoundToggle";
import ProgressBar from "./components/ProgressBar";

import Landing from "./components/Landing";
import StepName from "./components/StepName";
import StepQualification from "./components/StepQualification";
<<<<<<< HEAD
import StepBoard from "./components/StepBoard";
import StepSubjects from "./components/StepSubjects";
import StepStream from "./components/StepStream";
import StepInterest from "./components/StepInterest";
import StepEngineeringFocus from "./components/StepEngineeringFocus";
import StepQualificationDetail from "./components/StepQualificationDetail";
import Loading from "./components/Loading";

import { getRecommendation } from "./api";
import { BOARD_SUBJECTS, SUBJECTS_12 } from "./data/niilmData";
=======
import StepSubjects from "./components/StepSubjects";
import StepInterest from "./components/StepInterest";
import StepEngineeringFocus from "./components/StepEngineeringFocus";
import Loading from "./components/Loading";

import { getRecommendation } from "./api";
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

// Heavy, non-critical visuals are code-split so the first paint (landing
// screen + questionnaire) loads fast. They stream in only when needed.
const ParticleUniverse = lazy(() => import("./components/ParticleUniverse"));
const Result = lazy(() => import("./components/Result"));

const initialAnswers = {
  name: "",
  qualification: "",
<<<<<<< HEAD
  board: "",
  subjects: [],
  stream: "",
  interest: "",
  engineeringFocus: "",
  qualificationDetail: ""
=======
  subjects: [],
  interest: "",
  engineeringFocus: ""
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
};

export default function App() {
  const [stage, setStage] = useState("landing");
  const [answers, setAnswers] = useState(initialAnswers);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

<<<<<<< HEAD
  const isClass10 = answers.qualification === "10th";
  const isClass12 = answers.qualification === "12th";
  const isDiplomaOrGrad = answers.qualification === "diploma" || answers.qualification === "graduate";
  const showEngineeringFocus = answers.interest === "engineering";

  // Distinct step sequences per qualification branch, used only to drive
  // the progress bar — actual navigation is explicit in each onNext below.
  const flow = useMemo(() => {
    if (isClass10) return ["name", "qualification", "board", "subjects", "stream"];
    if (isDiplomaOrGrad) return ["name", "qualification", "qualificationDetail"];
    // Class 12 (default / not yet chosen)
    const f = ["name", "qualification", "subjects", "interest"];
    if (showEngineeringFocus) f.push("engineeringFocus");
    return f;
  }, [isClass10, isDiplomaOrGrad, showEngineeringFocus]);
=======
  const showSubjects = answers.qualification === "12th";
  const showEngineeringFocus = answers.interest === "engineering";

  const flow = useMemo(() => {
    const f = ["name", "qualification"];
    if (showSubjects) f.push("subjects");
    f.push("interest");
    if (showEngineeringFocus) f.push("engineeringFocus");
    return f;
  }, [showSubjects, showEngineeringFocus]);
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c

  const stepIndex = flow.indexOf(stage);
  const stepLabels = {
    name: "Your Name",
    qualification: "Qualification",
<<<<<<< HEAD
    board: "Your Board",
    subjects: "Favourite Subjects",
    stream: "Your Stream",
    interest: "Your Interest",
    engineeringFocus: "Engineering Focus",
    qualificationDetail: "What You Hold"
=======
    subjects: "Favourite Subjects",
    interest: "Your Interest",
    engineeringFocus: "Engineering Focus"
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
  };

  const goTo = (nextStage) => setStage(nextStage);

  const runRecommendation = async (finalAnswers) => {
    setStage("loading");
    setError("");
    try {
      const data = await getRecommendation(finalAnswers);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong reaching the AI advisor. Showing best-effort local match.");
      setResult({
        source: "local-engine",
<<<<<<< HEAD
        type: "program",
=======
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
        primary: {
          id: "cse-ai",
          group: "B.Tech Engineering",
          name: "B.Tech Computer Science Engineering",
          specialisation: "AI · Machine Learning · Data Science",
          careers: ["AI Engineer", "Software Developer", "Data Scientist"],
<<<<<<< HEAD
          blurb: "NIILM's flagship, AI-integrated engineering program.",
          link: "https://www.niilmuniversity.ac.in/departmentslug/engineering-technology"
=======
          blurb: "NIILM's flagship, AI-integrated engineering program."
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
        },
        alternates: [],
        headline: `${finalAnswers.name}, let's explore NIILM together!`,
        reasoning: "We couldn't reach the AI service right now, but our counsellors can help you choose the perfect program in person.",
        encouragement: "Your journey at NIILM starts today!"
      });
    } finally {
      setStage("result");
    }
  };

  const restart = () => {
    setAnswers(initialAnswers);
    setResult(null);
    setError("");
    setStage("landing");
  };

  return (
    <div className="relative min-h-[100dvh] w-full">
      <AuroraBackground />
      <Suspense fallback={null}>
        <ParticleUniverse />
      </Suspense>
      <SoundToggle />

      {stage !== "landing" && stage !== "loading" && stage !== "result" && (
        <div className="relative z-10 pt-6">
          <ProgressBar step={Math.max(stepIndex, 0)} total={flow.length} labels={stepLabels} />
        </div>
      )}

      <AnimatePresence mode="wait">
        {stage === "landing" && <Landing key="landing" onStart={() => goTo("name")} />}

        {stage === "name" && (
          <StepName
            key="name"
            value={answers.name}
            onBack={() => goTo("landing")}
            onNext={(name) => {
              setAnswers((a) => ({ ...a, name }));
              goTo("qualification");
            }}
          />
        )}

        {stage === "qualification" && (
          <StepQualification
            key="qualification"
            name={answers.name}
            value={answers.qualification}
            onBack={() => goTo("name")}
            onNext={(qualification) => {
              setAnswers((a) => ({ ...a, qualification }));
<<<<<<< HEAD
              if (qualification === "10th") goTo("board");
              else if (qualification === "diploma" || qualification === "graduate") goTo("qualificationDetail");
              else goTo("subjects");
=======
              goTo(qualification === "12th" ? "subjects" : "interest");
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
            }}
          />
        )}

<<<<<<< HEAD
        {/* ---------------- Class 10 path ---------------- */}
        {stage === "board" && (
          <StepBoard
            key="board"
            value={answers.board}
            onBack={() => goTo("qualification")}
            onNext={(board) => {
              setAnswers((a) => ({ ...a, board }));
              goTo("subjects");
            }}
          />
        )}

        {stage === "subjects" && isClass10 && (
          <StepSubjects
            key="subjects-10"
            subjectList={BOARD_SUBJECTS[answers.board] || BOARD_SUBJECTS.cbse}
            subtitle={`Pick one or more from your Class 10 ${answers.board ? answers.board.toUpperCase() : ""} subjects.`}
            value={answers.subjects}
            onBack={() => goTo("board")}
            onNext={(subjects) => {
              setAnswers((a) => ({ ...a, subjects }));
              goTo("stream");
            }}
          />
        )}

        {stage === "stream" && (
          <StepStream
            key="stream"
            value={answers.stream}
            onBack={() => goTo("subjects")}
            onNext={(stream) => {
              const updated = { ...answers, stream };
              setAnswers(updated);
              runRecommendation(updated);
            }}
          />
        )}

        {/* ---------------- Class 12 path (unchanged) ---------------- */}
        {stage === "subjects" && isClass12 && (
          <StepSubjects
            key="subjects-12"
            subjectList={SUBJECTS_12}
            subtitle="Pick one or more Class 12 subjects — this helps us match a program that genuinely fits."
=======
        {stage === "subjects" && (
          <StepSubjects
            key="subjects"
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
            value={answers.subjects}
            onBack={() => goTo("qualification")}
            onNext={(subjects) => {
              setAnswers((a) => ({ ...a, subjects }));
              goTo("interest");
            }}
          />
        )}

        {stage === "interest" && (
          <StepInterest
            key="interest"
            value={answers.interest}
<<<<<<< HEAD
            onBack={() => goTo("subjects")}
=======
            onBack={() => goTo(showSubjects ? "subjects" : "qualification")}
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
            onNext={(interest) => {
              const updated = { ...answers, interest };
              setAnswers(updated);
              if (interest === "engineering") {
                goTo("engineeringFocus");
              } else {
                runRecommendation(updated);
              }
            }}
          />
        )}

        {stage === "engineeringFocus" && (
          <StepEngineeringFocus
            key="engineeringFocus"
            value={answers.engineeringFocus}
            onBack={() => goTo("interest")}
            onNext={(engineeringFocus) => {
              const updated = { ...answers, engineeringFocus };
              setAnswers(updated);
              runRecommendation(updated);
            }}
          />
        )}

<<<<<<< HEAD
        {/* ---------------- Diploma / Graduate path ---------------- */}
        {stage === "qualificationDetail" && (
          <StepQualificationDetail
            key="qualificationDetail"
            qualification={answers.qualification}
            value={answers.qualificationDetail}
            onBack={() => goTo("qualification")}
            onNext={(qualificationDetail) => {
              const updated = { ...answers, qualificationDetail };
              setAnswers(updated);
              runRecommendation(updated);
            }}
          />
        )}

=======
>>>>>>> 215a9ada50c7abbde7c5d7b4601aa9ea31fa6a3c
        {stage === "loading" && <Loading key="loading" name={answers.name} />}

        {stage === "result" && (
          <Suspense fallback={<Loading key="result-loading" name={answers.name} />}>
            <Result key="result" name={answers.name} result={result} onRestart={restart} />
          </Suspense>
        )}
      </AnimatePresence>

      {error && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 text-xs text-amber-300 bg-amber-900/40 border border-amber-500/30 px-4 py-2 rounded-full">
          {error}
        </div>
      )}
    </div>
  );
}

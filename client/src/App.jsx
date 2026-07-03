import { useMemo, useState, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";

import AuroraBackground from "./components/AuroraBackground";
import SoundToggle from "./components/SoundToggle";
import ProgressBar from "./components/ProgressBar";

import Landing from "./components/Landing";
import StepName from "./components/StepName";
import StepQualification from "./components/StepQualification";
import StepSubjects from "./components/StepSubjects";
import StepInterest from "./components/StepInterest";
import StepEngineeringFocus from "./components/StepEngineeringFocus";
import Loading from "./components/Loading";

import { getRecommendation } from "./api";

// Heavy, non-critical visuals are code-split so the first paint (landing
// screen + questionnaire) loads fast. They stream in only when needed.
const ParticleUniverse = lazy(() => import("./components/ParticleUniverse"));
const Result = lazy(() => import("./components/Result"));

const initialAnswers = {
  name: "",
  qualification: "",
  subjects: [],
  interest: "",
  engineeringFocus: ""
};

export default function App() {
  const [stage, setStage] = useState("landing");
  const [answers, setAnswers] = useState(initialAnswers);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const showSubjects = answers.qualification === "12th";
  const showEngineeringFocus = answers.interest === "engineering";

  const flow = useMemo(() => {
    const f = ["name", "qualification"];
    if (showSubjects) f.push("subjects");
    f.push("interest");
    if (showEngineeringFocus) f.push("engineeringFocus");
    return f;
  }, [showSubjects, showEngineeringFocus]);

  const stepIndex = flow.indexOf(stage);
  const stepLabels = {
    name: "Your Name",
    qualification: "Qualification",
    subjects: "Favourite Subjects",
    interest: "Your Interest",
    engineeringFocus: "Engineering Focus"
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
        primary: {
          id: "cse-ai",
          group: "B.Tech Engineering",
          name: "B.Tech Computer Science Engineering",
          specialisation: "AI · Machine Learning · Data Science",
          careers: ["AI Engineer", "Software Developer", "Data Scientist"],
          blurb: "NIILM's flagship, AI-integrated engineering program."
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
              goTo(qualification === "12th" ? "subjects" : "interest");
            }}
          />
        )}

        {stage === "subjects" && (
          <StepSubjects
            key="subjects"
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
            onBack={() => goTo(showSubjects ? "subjects" : "qualification")}
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

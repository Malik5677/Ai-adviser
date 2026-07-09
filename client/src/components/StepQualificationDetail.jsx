import StepShell from "./StepShell";
import SelectCard from "./SelectCard";
import { DIPLOMA_OPTIONS, DEGREE_OPTIONS } from "../data/niilmData";

export default function StepQualificationDetail({ qualification, value, onNext, onBack }) {
  const options = qualification === "diploma" ? DIPLOMA_OPTIONS : DEGREE_OPTIONS;
  const title = qualification === "diploma" ? "What is your diploma in?" : "What is your degree in?";

  return (
    <StepShell
      title={title}
      subtitle="This helps the AI point you to the right next step at NIILM."
      onBack={onBack}
      wide
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {options.map((opt, i) => (
          <SelectCard
            key={opt.id}
            label={opt.label}
            icon={opt.icon}
            index={i}
            selected={value === opt.id}
            onClick={() => onNext(opt.id)}
          />
        ))}
      </div>
    </StepShell>
  );
}

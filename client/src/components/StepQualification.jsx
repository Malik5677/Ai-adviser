import StepShell from "./StepShell";
import SelectCard from "./SelectCard";

const OPTIONS = [
  { id: "10th", label: "Class 10", icon: "BookOpen" },
  { id: "12th", label: "Class 12", icon: "GraduationCap" },
  { id: "diploma", label: "Diploma", icon: "FileBadge" },
  { id: "graduate", label: "Graduate / Other", icon: "Award" }
];

export default function StepQualification({ name, value, onNext, onBack }) {
  return (
    <StepShell
      title={`Nice to meet you, ${name}!`}
      subtitle="What's your current education qualification?"
      onBack={onBack}
      wide
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {OPTIONS.map((opt, i) => (
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

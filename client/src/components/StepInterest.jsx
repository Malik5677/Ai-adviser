import StepShell from "./StepShell";
import SelectCard from "./SelectCard";
import { INTERESTS } from "../data/niilmData";

export default function StepInterest({ value, onNext, onBack }) {
  return (
    <StepShell
      title="What do you want to become?"
      subtitle="Choose the field that excites you the most."
      onBack={onBack}
      wide
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {INTERESTS.map((opt, i) => (
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

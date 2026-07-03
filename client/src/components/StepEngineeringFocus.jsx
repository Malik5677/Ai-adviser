import StepShell from "./StepShell";
import SelectCard from "./SelectCard";
import { ENGINEERING_FOCUS } from "../data/niilmData";

export default function StepEngineeringFocus({ value, onNext, onBack }) {
  return (
    <StepShell
      title="Great choice — Engineering!"
      subtitle="Which branch excites you the most?"
      onBack={onBack}
      wide
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {ENGINEERING_FOCUS.map((opt, i) => (
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

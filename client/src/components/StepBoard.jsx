import StepShell from "./StepShell";
import SelectCard from "./SelectCard";
import { BOARDS } from "../data/niilmData";

const ICONS = { cbse: "BookOpen", hbse: "Landmark" };

export default function StepBoard({ value, onNext, onBack }) {
  return (
    <StepShell
      title="Which board are you studying under?"
      subtitle="This helps us show the right Class 10 subjects for you."
      onBack={onBack}
      wide
    >
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {BOARDS.map((b, i) => (
          <SelectCard
            key={b.id}
            label={b.label}
            icon={ICONS[b.id] || "BookOpen"}
            index={i}
            selected={value === b.id}
            onClick={() => onNext(b.id)}
          />
        ))}
      </div>
      {value && (
        <p className="mt-6 text-xs text-slate-500">
          {BOARDS.find((b) => b.id === value)?.fullName}
        </p>
      )}
    </StepShell>
  );
}

import IconMastered from "@/components/ui/icon-mastered";
import { MASTERED_LEVEL } from "@/lib/const";

function MasteredLabel({ knownCount }: { knownCount: number }) {
  return (
    <div className="border-border flex items-center gap-1.5 rounded-full border bg-teal-400 px-3 py-1.5 shadow-[1px_1px_0_0_#2e1401]">
      <IconMastered />
      <span className="text-preset-6 text-neutral-900">Mastered</span>
      <span className="text-preset-6 text-neutral-900">
        {knownCount}/{MASTERED_LEVEL}
      </span>
    </div>
  );
}

export default MasteredLabel;

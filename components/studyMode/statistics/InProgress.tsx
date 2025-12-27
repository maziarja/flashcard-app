"use client";

import { useCardContext } from "@/app/_contexts/CardContext";
import IconStatsInProgress from "@/components/ui/icon-stats-in-progress";
import { MASTERED_LEVEL } from "@/lib/const";

function InProgress() {
  const { filteredCards: cards } = useCardContext();

  const numOfInProgress = cards.filter(
    (card) => card.knownCount < MASTERED_LEVEL && card.knownCount > 0,
  ).length;

  return (
    <div className="border-border grid grid-cols-[1fr_100px] overflow-hidden rounded-xl border-t border-r-2 border-b-2 border-l">
      <div className="flex flex-col p-5">
        <p className="text-preset-4-medium text-neutral-900">In Progress</p>
        <p className="text-preset-1 mt-auto text-neutral-900">
          {numOfInProgress}
        </p>
      </div>
      <div className="border-border flex h-30 w-25 items-center justify-center border-l bg-pink-500">
        <IconStatsInProgress />
      </div>
    </div>
  );
}

export default InProgress;

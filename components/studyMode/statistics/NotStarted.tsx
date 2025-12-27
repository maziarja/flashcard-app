"use client";
import { useCardContext } from "@/app/_contexts/CardContext";
import IconStatsNotStarted from "@/components/ui/icon-stats-not-started";

function NotStarted() {
  const { filteredCards: cards } = useCardContext();
  const numOfNotStarted = cards.filter((card) => card.knownCount === 0).length;

  return (
    <div className="border-border grid grid-cols-[1fr_100px] overflow-hidden rounded-xl border-t border-r-2 border-b-2 border-l">
      <div className="flex flex-col p-5">
        <p className="text-preset-4-medium text-neutral-900">Not Started</p>
        <p className="text-preset-1 mt-auto text-neutral-900">
          {numOfNotStarted}
        </p>
      </div>
      <div className="border-border flex h-30 w-25 items-center justify-center border-l bg-pink-400">
        <IconStatsNotStarted />
      </div>
    </div>
  );
}

export default NotStarted;

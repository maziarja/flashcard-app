"use client";
import { useCardContext } from "@/app/_contexts/CardContext";
import IconStatsTotal from "@/components/ui/icon-stats-total";

function TotalCards() {
  const { cards } = useCardContext();
  const totalCards = cards.length;
  return (
    <div className="border-border grid grid-cols-[1fr_100px] overflow-hidden rounded-xl border-t border-r-2 border-b-2 border-l">
      <div className="flex flex-col p-5">
        <p className="text-preset-4-medium text-neutral-900">Total cards</p>
        <p className="text-preset-1 lg:text-preset-1-desktop md:text-preset-1-tablet mt-auto text-neutral-900">
          {totalCards}
        </p>
      </div>
      <div className="border-border flex h-30 w-25 items-center justify-center border-l bg-blue-400">
        <IconStatsTotal />
      </div>
    </div>
  );
}

export default TotalCards;

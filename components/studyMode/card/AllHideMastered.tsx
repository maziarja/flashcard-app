"use client";

import { useCardContext } from "@/app/_contexts/CardContext";

function AllHideMastered() {
  const { selectedCategories } = useCardContext();

  const categories =
    selectedCategories.length === 0 ? false : selectedCategories.join(", ");

  return (
    <div className="flex h-137.5 flex-col justify-center gap-3 text-center">
      <div className="mx-auto w-2/3 space-y-3">
        <p className="text-preset-2 text-neutral-900">
          You&apos;re all caught up!
        </p>
        <p className="text-preset-4-regular text-neutral-600">
          {!categories
            ? "All your cards are mastered. Turn off “Hide mastered” to see them again."
            : `All cards in ${categories} category are mastered. Turn off “Hide mastered” to see them again.`}
        </p>
      </div>
    </div>
  );
}

export default AllHideMastered;

"use client";

import { useCardContext } from "@/app/_contexts/CardContext";
import FlashCard from "./flashCard/FlashCard";
import { useState } from "react";
import { INITIAL_VISIBLE_COUNT } from "@/lib/const";
import LoadMoreButton from "./LoadMoreButton";

function FlashCardsContainer() {
  const [initialCardsState, setInitialCardsState] = useState(
    INITIAL_VISIBLE_COUNT,
  );
  const { filteredCards: cards } = useCardContext();

  const initialCards = cards.slice(0, initialCardsState);

  if (cards.length === 0) return null;

  return (
    <div className="grid space-y-6">
      <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {initialCards.map((card, i) => (
          <FlashCard key={i} card={card} />
        ))}
      </div>
      {cards.length > INITIAL_VISIBLE_COUNT &&
        initialCardsState !== Infinity && (
          <LoadMoreButton onInitialCardsState={setInitialCardsState} />
        )}
    </div>
  );
}

export default FlashCardsContainer;

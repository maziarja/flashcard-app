"use client";

import { useCardContext } from "@/app/_contexts/CardContext";
import { Separator } from "../ui/separator";
import CardBody from "./card/CardBody";
import CardFilter from "./card/CardFilter";
import CardFooter from "./card/CardFooter";
import AllHideMastered from "./card/AllHideMastered";
import EmptyCards from "./card/EmptyCards";
import StudyFlashcardSkeleton from "../ui/skeleton-study-flashcard";

function StudyFlashCard() {
  const {
    filteredCards: cards,
    cards: allCards,
    hideMastered,
    isLoading,
  } = useCardContext();
  const isAllCardsMastered = cards.every((card) => card.knownCount === 5);

  if (isLoading) return <StudyFlashcardSkeleton />;

  return (
    <div className="bg-neutral-0 rounded-2xl border-t border-r-3 border-b-3 border-l border-neutral-900">
      <CardFilter />
      <Separator />
      {!isAllCardsMastered || !hideMastered ? (
        <>
          {allCards.length !== 0 ? (
            <>
              <CardBody />
              <Separator />
              <CardFooter />
            </>
          ) : (
            <EmptyCards />
          )}
        </>
      ) : (
        <AllHideMastered />
      )}
    </div>
  );
}

export default StudyFlashCard;

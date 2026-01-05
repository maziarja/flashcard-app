"use client";

import { useCardContext } from "@/app/_contexts/CardContext";
import CardFilter from "../studyMode/card/CardFilter";
import CreateCardForm from "./cardForm/CreateCardForm";
import FlashCardsContainer from "./FlashCardsContainer";
import EmptyCards from "./EmptyCards";
import SkeletonAllCardsFlashcard from "../ui/skeleton-allCards-flashcard";

function AllCardsPage() {
  const { cards, isLoading } = useCardContext();

  return (
    <div className="space-y-6">
      <CreateCardForm />
      {isLoading ? (
        <>
          <CardFilter />
          <SkeletonAllCardsFlashcard />
        </>
      ) : (
        <>
          {cards.length !== 0 ? (
            <>
              <CardFilter />
              <FlashCardsContainer />
            </>
          ) : (
            <EmptyCards />
          )}
        </>
      )}
    </div>
  );
}

export default AllCardsPage;

"use client";

import { useCardContext } from "@/app/_contexts/CardContext";
import { Separator } from "../ui/separator";
import CardBody from "./card/CardBody";
import CardFilter from "./card/CardFilter";
import CardFooter from "./card/CardFooter";
import AllHideMastered from "./card/AllHideMastered";
import EmptyCards from "./card/EmptyCards";

function StudyFlashCard() {
  const { filteredCards: cards, hideMastered } = useCardContext();

  const isAllCardsMastered = cards.every((card) => card.knownCount === 5);

  return (
    <div className="bg-neutral-0 rounded-2xl border-t border-r-3 border-b-3 border-l border-neutral-900">
      <CardFilter />
      <Separator />
      {!isAllCardsMastered || !hideMastered ? (
        <>
          {cards.length !== 0 ? (
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

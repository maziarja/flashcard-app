"use client";

import { useCardContext } from "@/app/_contexts/CardContext";
import { Button } from "@/components/ui/button";
import IconCircleCheck from "@/components/ui/icon-circle-check";
import IconReset from "@/components/ui/icon-reset";

function CardActions() {
  const { dispatch, filteredCards: cards, currentIndex } = useCardContext();
  const id = cards[currentIndex].id;
  return (
    <div className="flex flex-col justify-center gap-2.5 md:flex-row md:gap-5">
      <Button
        onClick={() => dispatch({ type: "CHECKED_CARD", payload: id })}
        size={"lg"}
        className="text-preset-4-medium text-neutral-900 shadow-[2px_2px_0_0_#2e1401]"
      >
        <IconCircleCheck />I Know This
      </Button>
      <Button
        onClick={() => dispatch({ type: "RESET_PROGRESS_CARD", payload: id })}
        variant={"secondary"}
        size={"lg"}
        className="text-preset-4-medium text-neutral-900"
      >
        <IconReset /> Reset Progress
      </Button>
    </div>
  );
}

export default CardActions;

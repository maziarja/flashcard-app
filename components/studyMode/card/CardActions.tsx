"use client";

import { increaseProgress } from "@/app/_actions/cards/increaseProgress";
import { resetProgress } from "@/app/_actions/cards/resetProgress";
import { useCardContext } from "@/app/_contexts/CardContext";
import { Button } from "@/components/ui/button";
import IconCircleCheck from "@/components/ui/icon-circle-check";
import IconReset from "@/components/ui/icon-reset";
import { MASTERED_LEVEL } from "@/lib/const";

function CardActions() {
  const {
    dispatch,
    filteredCards: cards,
    currentIndex,
    isAuthenticated,
  } = useCardContext();
  const id = cards[currentIndex]._id;
  const progress = cards[currentIndex].knownCount;

  async function handleIncreaseProgress() {
    if (id && progress < MASTERED_LEVEL) {
      dispatch({ type: "CHECKED_CARD", payload: id });
      if (isAuthenticated) {
        try {
          await increaseProgress(id);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }

  async function handleResetProgress() {
    if (id && progress > 0) {
      dispatch({ type: "RESET_PROGRESS_CARD", payload: id });
      if (isAuthenticated) {
        try {
          await resetProgress(id);
        } catch (error) {
          console.error(error);
        }
      }
    }
  }

  return (
    <div className="flex flex-col justify-center gap-2.5 md:flex-row md:gap-5">
      <Button
        onClick={handleIncreaseProgress}
        size={"lg"}
        className="text-preset-4-medium text-neutral-900 shadow-[2px_2px_0_0_#2e1401]"
      >
        <IconCircleCheck />I Know This
      </Button>
      <Button
        onClick={handleResetProgress}
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

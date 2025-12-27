import { useCardContext } from "@/app/_contexts/CardContext";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

function CardFooter() {
  const { dispatch, currentIndex, filteredCards: cards } = useCardContext();

  return (
    <div className="flex items-center justify-between p-4">
      <Button
        onClick={() =>
          dispatch({ type: "PREV_CARD", visibleLength: cards.length })
        }
        size={"icon-lg"}
        variant={"outline"}
      >
        <ChevronLeftIcon />
      </Button>
      <p className="text-preset-5 text-neutral-600">
        Card {currentIndex + 1} of {cards.length}
      </p>
      <Button
        onClick={() =>
          dispatch({ type: "NEXT_CARD", visibleLength: cards.length })
        }
        size={"icon-lg"}
        variant={"outline"}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  );
}

export default CardFooter;

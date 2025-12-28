import { Button } from "@/components/ui/button";
import CategoryDropdownMenu from "./CategoryDropdownMenu";
import HideMasteredCheckbox from "./HideMasteredCheckbox";
import { ShuffleIcon } from "lucide-react";
import { useCardContext } from "@/app/_contexts/CardContext";

function CardFilter() {
  const { dispatch } = useCardContext();

  return (
    <div className="flex justify-between px-4 py-3 md:p-5">
      <div className="flex flex-col items-start gap-2.5 md:flex-row md:items-center md:gap-4">
        <CategoryDropdownMenu />
        <HideMasteredCheckbox />
      </div>

      <Button
        onClick={() => dispatch({ type: "SHUFFLE_CARDS" })}
        variant={"outline"}
        size={"md"}
      >
        <ShuffleIcon strokeWidth={2.5} />
        <span className="text-preset-4-medium text-neutral-900">Shuffle</span>
      </Button>
    </div>
  );
}

export default CardFilter;

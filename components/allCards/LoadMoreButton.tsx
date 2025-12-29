import { Button } from "../ui/button";

function LoadMoreButton({
  onInitialCardsState,
}: {
  onInitialCardsState: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Button
      onClick={() => onInitialCardsState(Infinity)}
      variant={"secondary"}
      size={"md"}
      className="mx-auto shadow-[2px_2px_0_0_#2e1401]"
    >
      <span className="text-preset-4-medium text-neutral-900">Load more</span>
    </Button>
  );
}

export default LoadMoreButton;

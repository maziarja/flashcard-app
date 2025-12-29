import { Progress } from "@/components/ui/progress";
import { MASTERED_LEVEL } from "@/lib/const";
import MasteredLabel from "./MasteredLabel";
import FlashCardActionDropdown from "./FlashCardActionDropdown";
import { CardType } from "@/lib/schemas/CardType";

type Props = {
  card: CardType;
};

function FlashCardFooter({ card }: Props) {
  return (
    <div className="flex h-14 items-center justify-center gap-2 px-4">
      <div className="border-border flex h-full items-center justify-center border-r pr-2.5">
        <div className="bg-neutral-0 flex rounded-full border border-neutral-900 px-3 py-1.5 capitalize shadow-[1px_1px_0_0_#000000]">
          <span className="text-preset-6 text-neutral-900 capitalize">
            {card.category}
          </span>
        </div>
      </div>

      <div className="border-border flex h-full flex-1 items-center gap-2 border-r pr-2.5">
        {card.knownCount < MASTERED_LEVEL ? (
          <>
            <Progress
              indicatorClassName="bg-neutral-900"
              className="w-15"
              value={(card.knownCount / MASTERED_LEVEL) * 100}
            />
            <p className="text-preset-6 text-neutral-900">
              {card.knownCount}/5
            </p>
          </>
        ) : (
          <MasteredLabel knownCount={card.knownCount} />
        )}
      </div>

      <FlashCardActionDropdown card={card} />
    </div>
  );
}

export default FlashCardFooter;

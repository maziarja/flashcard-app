import { CardType } from "@/lib/schemas/CardType";

import FlashCardQuestion from "./FlashCardQuestion";
import FlashCardAnswer from "./FlashCardAnswer";
import FlashCardFooter from "./FlashCardFooter";

function FlashCard({ card }: { card: CardType }) {
  return (
    <div className="bg-neutral-0 border-border flex flex-col rounded-2xl border-t border-r-3 border-b-3 border-l">
      <FlashCardQuestion question={card.question} />
      <FlashCardAnswer answer={card.answer} />
      <FlashCardFooter card={card} />
    </div>
  );
}

export default FlashCard;

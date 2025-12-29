import { Button } from "@/components/ui/button";
import Link from "next/link";

function EmptyCards() {
  return (
    <div className="flex h-137.5 flex-col justify-center gap-8 text-center">
      <div className="mx-auto w-2/3 space-y-3">
        <p className="text-preset-2 text-neutral-900">No cards to study</p>
        <p className="text-preset-4-regular text-neutral-600">
          You don&rsquo;t have any cards yet. Add your first card in the All
          Cards tab.
        </p>
      </div>
      <Link href={"/?window=all-cards"}>
        <Button variant={"secondary"} size={"lg"} className="mx-auto">
          Go to All Cards
        </Button>
      </Link>
    </div>
  );
}

export default EmptyCards;

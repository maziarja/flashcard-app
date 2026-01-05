import { Skeleton } from "./skeleton";

type Props = {
  count?: number;
};

function SkeletonAllCardsFlashcard({ count = 6 }: Props) {
  return (
    <div className="grid space-y-6">
      <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="bg-neutral-0 border-border flex flex-col rounded-2xl border-t border-r-3 border-b-3 border-l"
          >
            {/* Question */}
            <div className="p-4">
              <Skeleton className="h-5 w-4/5" />
            </div>

            {/* Answer */}
            <div className="border-border flex min-h-31.5 flex-col gap-2 border-y p-4">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>

            {/* Footer */}
            <div className="flex h-14 items-center justify-center gap-2 px-4">
              <div className="border-border flex h-full items-center justify-center border-r pr-2.5">
                <Skeleton className="h-7 w-20 rounded-full" />
              </div>

              <div className="border-border flex h-full flex-1 items-center gap-2 border-r pr-2.5">
                <Skeleton className="h-2 w-15" />
                <Skeleton className="h-4 w-8" />
              </div>

              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkeletonAllCardsFlashcard;

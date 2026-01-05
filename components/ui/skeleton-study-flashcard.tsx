"use client";

import { Separator } from "./separator";
import { Skeleton } from "./skeleton";

function StudyFlashcardSkeleton() {
  return (
    <div className="bg-neutral-0 flex flex-col rounded-2xl border-t border-r-3 border-b-3 border-l border-neutral-900">
      {/* CardFilter skeleton */}
      <div className="flex justify-between px-4 py-3 md:p-5">
        <div className="flex flex-col gap-2.5 md:flex-row md:gap-4">
          <Skeleton className="h-10 w-40 rounded-md" />
          <Skeleton className="h-10 w-32 rounded-md" />
        </div>
        <Skeleton className="h-10 w-28 rounded-md" />
      </div>

      <Separator />

      {/* CardBody skeleton */}
      <div className="flex min-h-100 flex-1 flex-col space-y-5 px-4 py-6 md:p-5">
        {/* CardContent */}
        <div className="flex flex-col items-center gap-20">
          <Skeleton className="mx-auto h-6 w-1/2" />
          <div className="flex w-full flex-col items-center gap-6">
            <div className="w-4/5 space-y-2">
              <Skeleton className="h-6" />
              <Skeleton className="h-6" />
            </div>
            <Skeleton className="h-6 w-2/3" />
          </div>
        </div>

        {/* CardActions */}
        <div className="mt-auto flex flex-col gap-3 md:mx-auto md:flex-row">
          <Skeleton className="h-10 w-full rounded-full md:w-50" />
          <Skeleton className="h-10 w-full rounded-full md:w-50" />
        </div>
      </div>

      <Separator />

      {/* CardFooter skeleton */}
      <div className="flex items-center justify-between p-4">
        <Skeleton className="size-10 rounded-full md:w-32" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="size-10 rounded-full md:w-32" />
      </div>
    </div>
  );
}

export default StudyFlashcardSkeleton;

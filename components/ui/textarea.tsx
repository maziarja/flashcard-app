import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-border placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 text-preset-4-regular! flex field-sizing-content min-h-25 w-full rounded-md border bg-transparent p-4 text-neutral-900 shadow-xs transition-[color,box-shadow] outline-none hover:shadow-[2px_2px_0_0_#2e1401] focus:border-blue-600 focus:shadow-[2px_2px_0_0_#5072c7] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:shadow-[2px_2px_0_0_#e11966] md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };

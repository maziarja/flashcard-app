import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground text-preset-4-regular! placeholder:text-muted-foreground placeholder:text-preset-4-regular! selection:text-primary-foreground dark:bg-input/30 border-border h-13.5 w-full min-w-0 cursor-pointer rounded-md border bg-transparent p-4 text-neutral-900 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium hover:shadow-[2px_2px_0_0_#2e1401] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus:shadow-[2px_2px_0_0_#5072c7]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus:border-blue-600 aria-invalid:shadow-[2px_2px_0_0_#e11966]",

        className,
      )}
      {...props}
    />
  );
}

export { Input };

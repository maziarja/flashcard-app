"use client";

import { useCardContext } from "@/app/_contexts/CardContext";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
function CategoryDropdownMenu() {
  const {
    hideMasteredCards: cards,
    dispatch,
    selectedCategories,
  } = useCardContext();

  const categoryCounts = new Map<string, number>();
  for (const card of cards) {
    categoryCounts.set(
      card.category,
      (categoryCounts.get(card.category) ?? 0) + 1,
    );
  }
  const categories = Array.from(categoryCounts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-border text-preset-4-medium h-10.75 rounded-full border px-4 py-3">
        All Categories
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={10}
        className="divide-y rounded-lg px-0"
      >
        {categories.map(({ name, count }) => (
          <div key={name} className="flex items-center gap-2 px-4 py-2">
            <Checkbox
              id={`category-${name}`}
              onCheckedChange={() =>
                dispatch({ type: "TOGGLE_CATEGORY", payload: name })
              }
              checked={selectedCategories.includes(name)}
            />
            <Label htmlFor={`category-${name}`}>
              <DropdownMenuItem
                className="text-preset-5 cursor-pointer p-0 text-neutral-900 focus:bg-transparent"
                onSelect={(e) => e.preventDefault()}
              >
                {name} <span className="text-neutral-600">({count})</span>
              </DropdownMenuItem>
            </Label>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default CategoryDropdownMenu;

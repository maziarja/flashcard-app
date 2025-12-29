"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const allTabs = ["study-mode", "all-cards"] as const;

function SwitchTabs() {
  const searchParams = useSearchParams();
  const window = searchParams.get("window");

  return (
    <div className="bg-neutral-0 flex items-center gap-1 rounded-full border border-neutral-900 p-1 shadow-[1px_2px_0_0_#2e1401]">
      {allTabs.map((tab, i) => {
        return (
          <Link
            href={`/?window=${tab}`}
            key={i}
            className={`text-preset-4-semibold rounded-full px-3 py-2.5 text-neutral-900 capitalize ${window === tab ? "border border-neutral-900 bg-yellow-500" : "border-neutral-900 hover:border"}`}
          >
            {tab.split("-").join(" ")}
          </Link>
        );
      })}
    </div>
  );
}

export default SwitchTabs;

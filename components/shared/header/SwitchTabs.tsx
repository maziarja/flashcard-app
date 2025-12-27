"use client";

import Link from "next/link";
import { useState } from "react";

const allTabs = ["study-mode", "all-cards"] as const;

function SwitchTabs() {
  const [tabs, setTabs] = useState<(typeof allTabs)[number]>("study-mode");

  return (
    <div className="bg-neutral-0 flex items-center gap-1 rounded-full border border-neutral-900 p-1 shadow-[1px_2px_0_0_#2e1401]">
      {allTabs.map((tab, i) => (
        <Link
          onClick={() => setTabs(tab)}
          key={i}
          className={`text-preset-4-semibold rounded-full px-3 py-2.5 text-neutral-900 capitalize ${tabs === tab ? "border border-neutral-900 bg-yellow-500" : ""}`}
          href={`/?window=${tab}`}
        >
          {tab.split("-").join(" ")}
        </Link>
      ))}
    </div>
  );
}

export default SwitchTabs;

import { Suspense } from "react";
import Logo from "./Logo";
import SwitchTabs from "./SwitchTabs";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Logo />

      <Suspense fallback={null}>
        <SwitchTabs />
      </Suspense>
    </div>
  );
}

export default Header;

import { Suspense } from "react";
import Logo from "./Logo";
import SwitchTabs from "./SwitchTabs";
import UserAccount from "./UserAccount";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <div className="flex items-center gap-2 sm:gap-4">
        <UserAccount />
        <Suspense fallback={null}>
          <SwitchTabs />
        </Suspense>
      </div>
    </div>
  );
}

export default Header;

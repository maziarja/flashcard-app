import Logo from "./Logo";
import SwitchTabs from "./SwitchTabs";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <SwitchTabs />
    </div>
  );
}

export default Header;

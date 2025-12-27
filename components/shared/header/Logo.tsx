import logo from "@/public/assets/images/logo-small.svg";
import logoDesktop from "@/public/assets/images/logo-large.svg";
import Image from "next/image";

function Logo() {
  return (
    <div>
      <Image
        src={logo}
        alt="Logo"
        loading="eager"
        className="block md:hidden"
      />
      <Image
        src={logoDesktop}
        alt="Logo Desktop"
        loading="eager"
        className="hidden md:block"
      />
    </div>
  );
}

export default Logo;

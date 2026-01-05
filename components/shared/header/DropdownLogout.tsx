import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/app/_actions/auth/logout";
import { CircleUserRoundIcon, LogOutIcon } from "lucide-react";
import { useCardContext } from "@/app/_contexts/CardContext";

function DropdownLogout() {
  const { reloadCard } = useCardContext();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="border-border bg-primary flex size-8 items-center justify-center rounded-full border">
          <CircleUserRoundIcon size={30} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={9}>
        <DropdownMenuItem>
          <button
            className="flex w-full cursor-pointer items-center gap-2"
            onClick={async () => {
              reloadCard();
              await logout();
            }}
          >
            <LogOutIcon />
            <span className="text-preset-4-medium">Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownLogout;

import { CircleUserRoundIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function UserAccount() {
  return (
    <Tooltip defaultOpen={true}>
      <TooltipTrigger asChild>
        <div className="border-border bg-primary flex size-8 items-center justify-center rounded-full border">
          <CircleUserRoundIcon size={30} />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        Create an account to save your cards and changes.
      </TooltipContent>
    </Tooltip>
  );
}

export default UserAccount;

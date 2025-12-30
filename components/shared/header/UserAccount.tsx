"use client";

import { CircleUserRoundIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import AccountDialog from "@/components/auth/AccountDialog";

function UserAccount() {
  const [openAccountDialog, setOpenAccountDialog] = useState(false);

  return (
    <>
      <Tooltip defaultOpen={true}>
        <TooltipTrigger asChild>
          <button
            onClick={() => setOpenAccountDialog(true)}
            className="border-border bg-primary flex size-8 items-center justify-center rounded-full border"
          >
            <CircleUserRoundIcon size={30} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          Create an account to save your cards and changes.
        </TooltipContent>
      </Tooltip>

      <AccountDialog
        open={openAccountDialog}
        onOpenChange={setOpenAccountDialog}
      />
    </>
  );
}

export default UserAccount;

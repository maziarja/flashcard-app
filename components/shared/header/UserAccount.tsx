"use client";

import { CircleUserRoundIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import AccountDialog from "@/components/auth/AccountDialog";
import { useCardContext } from "@/app/_contexts/CardContext";

import DropdownLogout from "./DropdownLogout";

function UserAccount() {
  const [openAccountDialog, setOpenAccountDialog] = useState(false);
  const { isAuthenticated } = useCardContext();

  return (
    <>
      {!isAuthenticated ? (
        <>
          <Tooltip defaultOpen>
            <TooltipTrigger asChild>
              <button onClick={() => setOpenAccountDialog(true)}>
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
      ) : (
        <DropdownLogout />
      )}
    </>
  );
}

export default UserAccount;

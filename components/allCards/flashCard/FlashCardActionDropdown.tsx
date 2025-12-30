import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVerticalIcon, SquarePenIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import DeleteCardDialog from "../DeleteCardDialog";
import UpdateCardDialog from "../UpdateCardDialog";
import { CardType } from "@/lib/schemas/CardType";

function FlashCardActionDropdown({ card }: { card: CardType }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="hover:shadow-[2px_2px_0_0_#2e1401] hover:ring">
          <EllipsisVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="top"
          sideOffset={22}
          align="end"
          alignOffset={-10}
        >
          <DropdownMenuItem
            onSelect={() => setIsEditOpen(true)}
            className="cursor-pointer"
          >
            <SquarePenIcon color="#2e1401" />
            <span className="text-preset-5 text-neutral-900">Edit</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setIsDeleteOpen(true)}
            className="cursor-pointer"
          >
            <Trash2Icon color="#2e1401" />
            <span className="text-preset-5 text-neutral-900">Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <UpdateCardDialog
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
        card={card}
      />
      <DeleteCardDialog
        open={isDeleteOpen}
        onOpenChange={setIsDeleteOpen}
        cardId={card._id}
      />
    </>
  );
}

export default FlashCardActionDropdown;

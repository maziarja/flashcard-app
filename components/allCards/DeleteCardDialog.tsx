import { useCardContext } from "@/app/_contexts/CardContext";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useTransition } from "react";
import { toast } from "sonner";
import { deleteCard } from "@/app/_actions/cards/deleteCard";

type DeleteCardDialogProps = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  cardId: string | undefined;
};

function DeleteCardDialog({
  open,
  onOpenChange,
  cardId,
}: DeleteCardDialogProps) {
  const { dispatch, isAuthenticated } = useCardContext();
  const [isPending, startTransition] = useTransition();

  function handleDeleteCard() {
    try {
      startTransition(async () => {
        if (cardId) {
          if (isAuthenticated) await deleteCard(cardId);
          dispatch({ type: "REMOVE_CARD", payload: cardId });
        }
      });
      toast.success("Card deleted.");
      if (!isAuthenticated)
        toast.warning("Create an account to save your changes.", {
          duration: 6000,
        });

      onOpenChange(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-preset-2! text-neutral-900">
            Delete this card?
          </DialogTitle>
          <DialogDescription className="text-preset-4-regular! text-neutral-900">
            This action can&lsquo;t be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={() => onOpenChange(false)}
            variant={"outline"}
            size={"lg"}
          >
            <span className="text-preset-4-semibold text-neutral-900">
              Cancel
            </span>
          </Button>
          <Button
            onClick={handleDeleteCard}
            size={"lg"}
            className="shadow-[2px_2px_0_0_#2e1401]"
          >
            <span className="text-preset-4-semibold text-neutral-900">
              {isPending ? "Deleting" : "Delete Card"}
            </span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteCardDialog;

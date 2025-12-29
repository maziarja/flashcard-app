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

type DeleteCardDialogProps = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  cardId: string;
};

function DeleteCardDialog({
  open,
  onOpenChange,
  cardId,
}: DeleteCardDialogProps) {
  const { dispatch } = useCardContext();
  const [isPending, startTransition] = useTransition();

  function handleDeleteCard() {
    startTransition(async () => {
      dispatch({ type: "REMOVE_CARD", payload: cardId });
    });
    toast("Card deleted.");
    onOpenChange(false);
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

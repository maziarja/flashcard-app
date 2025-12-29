import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import UpdateCardForm from "./cardForm/UpdateCardForm";
import { CardType } from "@/lib/schemas/CardType";

type EditCardDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  card: CardType;
};

function UpdateCardDialog({ open, onOpenChange, card }: EditCardDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle className="text-preset-2! text-neutral-900">
            Edit you card
          </DialogTitle>
        </DialogHeader>
        <UpdateCardForm card={card} onOpenChange={onOpenChange} />
      </DialogContent>
    </Dialog>
  );
}

export default UpdateCardDialog;

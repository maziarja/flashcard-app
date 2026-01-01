import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Authentication from "./Authentication";

type AccountDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function AccountDialog({ open, onOpenChange }: AccountDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-preset-3!">
            Save Your Progress
          </DialogTitle>
          <DialogDescription>
            Create an account to save your cards and changes.
          </DialogDescription>
        </DialogHeader>
        <Authentication onOpenChange={onOpenChange} />
      </DialogContent>
    </Dialog>
  );
}

export default AccountDialog;

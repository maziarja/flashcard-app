import { useForm } from "react-hook-form";
import QuestionController from "./QuestionController";
import AnswerController from "./AnswerController";
import CategoryController from "./CategoryController";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardSchema, CardType } from "@/lib/schemas/CardType";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { useCardContext } from "@/app/_contexts/CardContext";
import { toast } from "sonner";
import { updateCard } from "@/app/_actions/cards/updateCard";
import { FieldError } from "@/components/ui/field";

type UpdateCardFormProps = {
  card: CardType;
  onOpenChange: (open: boolean) => void;
};

function UpdateCardForm({ card, onOpenChange }: UpdateCardFormProps) {
  const { dispatch, isAuthenticated } = useCardContext();

  const form = useForm<CardType>({
    resolver: zodResolver(CardSchema),
    defaultValues: {
      knownCount: card.knownCount,
      _id: card._id,
      question: card.question,
      answer: card.answer,
      category: card.category,
    },
  });

  async function onSubmit(data: CardType) {
    dispatch({ type: "UPDATE_CARD", payload: data });
    try {
      if (isAuthenticated) await updateCard(data);
    } catch (error) {
      console.error(error);
      form.setError("root", { message: "Can't update your card" });
    }

    form.reset();
    toast.success("Card updated successfully.");
    if (!isAuthenticated)
      toast.warning("Create an account to save your changes.", {
        duration: 6000,
      });
    onOpenChange(false);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <QuestionController form={form} />
        <AnswerController form={form} />
        <CategoryController form={form} />
      </div>
      <DialogFooter>
        {form.formState.errors.root && (
          <FieldError errors={[form.formState.errors.root]} />
        )}
        <Button
          type="submit"
          size={"lg"}
          className="shadow-[2px_2px_0_0_#2e1401]"
        >
          <span className="text-preset-4-semibold text-neutral-900">
            {form.formState.isSubmitting ? "Updating" : "Update Card"}
          </span>
        </Button>
      </DialogFooter>
    </form>
  );
}

export default UpdateCardForm;

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../ui/button";
import { CirclePlusIcon } from "lucide-react";
import { CardSchema, CardType } from "@/lib/schemas/CardType";
import { useCardContext } from "@/app/_contexts/CardContext";
import { toast } from "sonner";
import QuestionController from "./QuestionController";
import AnswerController from "./AnswerController";
import CategoryController from "./CategoryController";
import { createCard } from "@/app/_actions/cards/createCard";

function CreateCardForm() {
  const { dispatch, isAuthenticated } = useCardContext();

  const form = useForm<CardType>({
    resolver: zodResolver(CardSchema),
    defaultValues: {
      knownCount: 0,
      answer: "",
      question: "",
      category: "",
      _id: "",
    },
  });

  async function onSubmit(data: CardType) {
    const formattedDate = {
      _id: crypto.randomUUID(),
      question: data.question,
      answer: data.answer,
      knownCount: data.knownCount,
      category: data.category,
    };
    try {
      if (isAuthenticated) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { _id, ...cardWithoutId } = data;
        const card = await createCard(cardWithoutId);
        if (card) {
          dispatch({ type: "ADD_CARD", payload: card });
        }
      } else {
        dispatch({ type: "ADD_CARD", payload: formattedDate });
      }
      form.reset();
      toast.success("Card created successfully.");
      if (!isAuthenticated)
        toast.warning("Create an account to save your cards.", {
          duration: 6000,
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="bg-neutral-0 border-border space-y-6 rounded-2xl border-t border-r-4 border-b-4 border-l p-5"
    >
      <div className="space-y-4">
        <QuestionController form={form} />
        <AnswerController form={form} />
        <CategoryController form={form} />
      </div>
      <Button
        type="submit"
        size={"lg"}
        className="shadow-[2px_2px_0_0_#2e1401]"
      >
        <CirclePlusIcon />
        <span className="text-preset-4-semibold text-neutral-900">
          {form.formState.isSubmitting ? "Creating" : "Create Card"}
        </span>
      </Button>
    </form>
  );
}

export default CreateCardForm;

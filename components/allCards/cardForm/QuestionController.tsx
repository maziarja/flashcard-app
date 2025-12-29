import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CardType } from "@/lib/schemas/CardType";
import { Controller, UseFormReturn } from "react-hook-form";

type QuestionControllerProps = {
  form: UseFormReturn<CardType>;
};

function QuestionController({ form }: QuestionControllerProps) {
  return (
    <Controller
      name="question"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name} className="text-neutral-900">
            Question
          </FieldLabel>
          <Input
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
            placeholder="e.g., What is the capital of France?"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}

export default QuestionController;

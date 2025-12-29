import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { CardType } from "@/lib/schemas/CardType";
import { Controller, UseFormReturn } from "react-hook-form";

type AnswerControllerProps = {
  form: UseFormReturn<CardType>;
};

function AnswerController({ form }: AnswerControllerProps) {
  return (
    <Controller
      name="answer"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name} className="text-neutral-900">
            Answer
          </FieldLabel>
          <Textarea
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
            placeholder="e.g., Paris"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}

export default AnswerController;

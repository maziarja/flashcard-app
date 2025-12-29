import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CardType } from "@/lib/schemas/CardType";
import { Controller, UseFormReturn } from "react-hook-form";

type CategoryControllerProps = {
  form: UseFormReturn<CardType>;
};

function CategoryController({ form }: CategoryControllerProps) {
  return (
    <Controller
      name="category"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel className="text-neutral-900" htmlFor={field.name}>
            Category
          </FieldLabel>
          <Input
            {...field}
            id={field.name}
            aria-invalid={fieldState.invalid}
            placeholder="e.g., Geography"
            autoComplete="off"
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}

export default CategoryController;

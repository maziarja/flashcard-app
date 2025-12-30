import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

function SignInForm() {
  const form = useForm({
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });

  function onSubmit() {}

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
      <FieldGroup>
        <Controller
          name="emailAddress"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>
              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Password</FieldLabel>
              <Input
                {...field}
                type="password"
                id={field.name}
                aria-invalid={fieldState.invalid}
                autoComplete="off"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      {form.formState.errors.root && (
        <FieldError errors={[form.formState.errors.root]} />
      )}
      <Button type="submit" className="w-full rounded-md text-white">
        {!form.formState.isSubmitting ? "Sign In" : <Spinner />}
      </Button>
    </form>
  );
}

export default SignInForm;

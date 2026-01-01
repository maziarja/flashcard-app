"use client";

import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, AuthType } from "@/lib/schemas/UserType";
import { signInUser } from "@/app/_actions/auth/signInUser";
import { redirect } from "next/navigation";
import { useCardContext } from "@/app/_contexts/CardContext";

function SignInForm({
  onOpenChange,
}: {
  onOpenChange: (open: boolean) => void;
}) {
  const { reloadCard } = useCardContext();

  const form = useForm<AuthType>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      emailAddress: "mazi@gmail.com",
      password: "mazimazi",
    },
  });

  async function onSubmit(data: AuthType) {
    const result = await signInUser(data);
    if (result.success) {
      reloadCard();
      onOpenChange(false);
      form.reset();
      redirect("/");
    } else {
      form.setError("root", { message: "Email or Password is incorrect" });
    }
  }

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
      <Button type="submit" size={"lg"} className="w-full text-neutral-900">
        {!form.formState.isSubmitting ? "Sign In" : <Spinner />}
      </Button>
    </form>
  );
}

export default SignInForm;

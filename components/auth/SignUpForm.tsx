"use client";

import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthSchema, AuthType, UserType } from "@/lib/schemas/UserType";
import { useCardContext } from "@/app/_contexts/CardContext";
import { registerUser } from "@/app/_actions/auth/register";
import { redirect } from "next/navigation";
import { signInUser } from "@/app/_actions/auth/signInUser";

type Props = {
  onActiveTab: React.Dispatch<React.SetStateAction<"signIn" | "register">>;
  onOpenChange: (open: boolean) => void;
};

function SignUpForm({ onActiveTab, onOpenChange }: Props) {
  const { cards, dispatch, reloadCard } = useCardContext();

  const cardsWithoutId = cards.map((card) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...cardWithoutId } = card;

    return cardWithoutId;
  });

  const form = useForm<AuthType>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });

  async function onSubmit(data: AuthType) {
    try {
      const userData: UserType = {
        emailAddress: data.emailAddress,
        password: data.password,
        cards: cardsWithoutId,
      };
      const result = await registerUser(userData);
      reloadCard();
      if (result.success) {
        dispatch({ type: "SET_CARDS", payload: result.data });
        onActiveTab("signIn");
        form.reset();

        const result2 = await signInUser(data);
        if (result2.success) {
          onOpenChange(false);
          form.reset();
          redirect("/");
        }
      }
    } catch (error) {
      console.error(error);
      form.setError("root", { message: "Email Address exist" });
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
                id={field.name}
                type="password"
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
        {!form.formState.isSubmitting ? "Register" : <Spinner />}
      </Button>
    </form>
  );
}

export default SignUpForm;

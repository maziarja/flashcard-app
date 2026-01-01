import z from "zod";
import { CardSchema } from "./CardType";

export const UserSchema = z.object({
  emailAddress: z
    .email()
    .toLowerCase()
    .trim()
    .min(1, "Email address is required"),

  password: z.string().trim().min(1, "Password is required"),

  cards: z.array(CardSchema).default([]),
});

export type UserType = z.infer<typeof UserSchema>;

export const AuthSchema = z.object({
  emailAddress: z
    .email()
    .toLowerCase()
    .trim()
    .min(1, "Email address is required"),

  password: z.string().trim().min(6, "Password must be at least 6 char"),
});

export type AuthType = z.infer<typeof AuthSchema>;

"use server";

import { signIn } from "@/lib/auth";
import connectDB from "@/lib/database";
import { AuthSchema, AuthType } from "@/lib/schemas/UserType";

export async function signInUser(data: AuthType) {
  await connectDB();

  const validData = AuthSchema.safeParse(data);
  if (!validData.success) {
    throw new Error(validData.error.issues[0].message);
  }
  try {
    await signIn("credentials", {
      email: validData.data.emailAddress,
      password: validData.data.password,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

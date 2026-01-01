"use server";

import { auth } from "@/lib/auth";
import { convertToObject } from "@/lib/convertToObject";
import connectDB from "@/lib/database";
import { UserSchema } from "@/lib/schemas/UserType";
import { User } from "@/models/User";

export async function getCards() {
  await connectDB();
  const session = await auth();
  if (!session) throw new Error("Login first");
  const userDoc = await User.findById(session?.user?.id).lean();
  const user = convertToObject(userDoc);

  const validUser = UserSchema.safeParse(user);
  if (!validUser.success) {
    throw new Error(validUser.error.issues[0].message);
  }

  if (user) {
    return validUser.data.cards;
  }

  return null;
}

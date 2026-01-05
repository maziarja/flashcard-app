"use server";

import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import { User } from "@/models/User";
import { revalidatePath } from "next/cache";

export async function resetProgress(cardId: string) {
  try {
    await connectDB();

    const session = await auth();

    if (!session) throw new Error("You must login first");

    const currentUser = await User.findById(session.user?.id);

    if (!currentUser) throw new Error("User not found!");

    const currentCard = currentUser.cards.id(cardId);

    if (!currentCard)
      throw new Error("You are not allowed to update this card");

    if (currentCard.knownCount > 0) currentCard.knownCount = 0;

    await currentUser.save();

    revalidatePath("/");
  } catch (error) {
    console.error(error);
    throw error;
  }
}

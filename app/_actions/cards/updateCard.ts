"use server";

import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import { CardType } from "@/lib/schemas/CardType";
import { User } from "@/models/User";
import { revalidatePath } from "next/cache";

export async function updateCard(card: CardType) {
  try {
    await connectDB();
    const session = await auth();

    if (!session) throw new Error("You must login first");

    const currentUser = await User.findById(session?.user?.id);

    if (!currentUser) {
      throw new Error("User not found");
    }

    if (!card._id) throw new Error("Card _id is required");

    // .id here is a mongoose method to find the card
    const currentCard = currentUser.cards.id(card._id);
    if (!currentCard) {
      throw new Error("You are not allowed to update this card");
    }

    currentCard.answer = card.answer;
    currentCard.category = card.category;
    currentCard.question = card.question;
    await currentUser.save();

    revalidatePath("/");
  } catch (error) {
    console.error(error);
    throw error;
  }
}

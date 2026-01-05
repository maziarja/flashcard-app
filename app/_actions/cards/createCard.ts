"use server";

import { auth } from "@/lib/auth";
import connectDB from "@/lib/database";
import { CardType } from "@/lib/schemas/CardType";
import { User } from "@/models/User";
import { revalidatePath } from "next/cache";

export async function createCard(card: CardType) {
  try {
    await connectDB();

    const session = await auth();

    if (!session) throw new Error("You must login first");

    const currentUser = await User.findById(session.user?.id);

    if (!currentUser) throw new Error("User not found");

    currentUser.cards.push(card);

    await currentUser.save();

    const createdCard = currentUser.cards.at(-1);
    if (createdCard) {
      const plainCard = createdCard.toObject();

      return {
        ...plainCard,
        _id: plainCard._id.toString(),
      };
    }

    revalidatePath("/");
  } catch (error) {
    console.error(error);
    throw error;
  }
}

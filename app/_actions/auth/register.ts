"use server";

import connectDB from "@/lib/database";
import { CardsSchema, CardType } from "@/lib/schemas/CardType";
import { UserSchema, UserType } from "@/lib/schemas/UserType";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { Error, HydratedDocument } from "mongoose";

export async function registerUser(data: UserType) {
  await connectDB();
  const validData = UserSchema.safeParse(data);
  if (!validData.success) {
    throw new Error(validData.error.issues[0].message);
  }
  const hashedPassword = await bcrypt.hash(validData.data.password, 10);

  const result = await User.create({
    emailAddress: validData.data.emailAddress,
    password: hashedPassword,
    cards: validData.data.cards,
  });

  const cards = (result.cards as HydratedDocument<CardType>[]).map((card) => {
    const plain = card.toObject();
    return {
      ...plain,
      _id: plain._id.toString(),
    };
  });

  const validCards = CardsSchema.safeParse(cards);
  if (!validCards.success) {
    throw new Error(validCards.error.issues[0].message);
  }

  return validCards.data;
}

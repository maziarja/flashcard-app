import { UserType } from "@/lib/schemas/UserType";
import mongoose, { Document, Model, models, Schema } from "mongoose";

const cardSchema = new Schema({
  answer: {
    type: String,
    required: [true, "Answer is required"],
  },
  question: {
    type: String,
    required: [true, "Question is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  knownCount: {
    type: Number,
    default: 0,
  },
});

const userSchema = new Schema(
  {
    emailAddress: {
      type: String,
      required: [true, "Email address is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password must be at least 6 characters"],
    },

    cards: { type: [cardSchema], default: [] },
  },
  {
    timestamps: true,
  },
);

type UserDocument = Document & UserType;

export const User: Model<UserDocument> =
  models.User || mongoose.model<UserDocument>("User", userSchema);

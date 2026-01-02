import mongoose, { Document, Model, models, Schema, Types } from "mongoose";

type Card = Types.Subdocument & {
  answer: string;
  question: string;
  category: string;
  knownCount: number;
};

type User = Document & {
  emailAddress: string;
  password: string;
  cards: Types.DocumentArray<Card>;
};

const cardSchema = new Schema<Card>({
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

export const User: Model<User> =
  models.User || mongoose.model<User>("User", userSchema);

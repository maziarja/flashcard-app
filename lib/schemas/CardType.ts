import z from "zod";

export const CardSchema = z.object({
  _id: z.string(),
  question: z.string().min(1, "Please enter a question."),
  answer: z.string().min(1, "Please enter an answer."),
  category: z.string().min(1, "Please enter a category."),
  knownCount: z.number().int().min(0).max(5),
});

export type CardType = z.infer<typeof CardSchema>;

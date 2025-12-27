import z from "zod";

export const CardSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  category: z.string(),
  knownCount: z.number(),
});

export type CardType = z.infer<typeof CardSchema>;

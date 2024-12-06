import { z } from "zod"

export const todoFormSchema = z.object({
  title: z
    .string()
    .min(5, {
      message: "Title must be at least 5 characters.",
    })
    .max(20, {
      message: "Title must not be longer than 20 characters.",
    }),
  body: z
    .string()
    .max(80, {
      message: "Short description must not be longer than 20 characters.",
    })
    .optional(),
});

export type TodoFormValues = z.infer<typeof todoFormSchema>;
import { z } from 'zod';

export const materialSchema = z.object({
    title: z
        .string({ required_error: "Title is required" }),
    author: z
        .string()
        .optional(),
    bodyText: z
        .string()
        .optional(),
});

export type MaterialInput = z.infer<typeof materialSchema>;
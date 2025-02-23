import { z } from 'zod';

//For Signing Up
export const eventSchema = z
    .object({
        name: z
            .string({ required_error: "Name is required" }),
        venue: z
            .string({ required_error: "Venue is required" }),
        otherDetails: z
            .string()
            .optional(),
        image: z
            .array(
                z
                    .instanceof(File)
                    .refine(
                        (file) =>
                            ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"].includes(file.type),
                        { message: "Invalid image file type" }
                    )
            )
            .nonempty({ message: "At least one image is required" }),
        date: z
            .string({ required_error: "Event Date is required" })
            .datetime()
    });

export type EventInput = z.infer<typeof eventSchema>;
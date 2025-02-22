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
            .string({ required_error: "Image is required" }),
        date: z
            .string({ required_error: "Event Date is required" })
            .datetime()
    });

export type EventInput = z.infer<typeof eventSchema>;
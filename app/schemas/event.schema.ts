import { z } from 'zod';

export const eventSchema = z.object({
    name: z.string({ required_error: "Name is required" }),
    venue: z.string({ required_error: "Venue is required" }),
    otherDetails: z.string().optional(),
    date: z
        .string({ required_error: "Event Date is required" })
        .refine((value) => !isNaN(Date.parse(value)), {
            message: "Invalid date format",
        }),
});

export type EventInput = z.infer<typeof eventSchema>;
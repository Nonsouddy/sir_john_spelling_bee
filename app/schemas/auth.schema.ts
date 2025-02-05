import { z } from 'zod';

const allowedDomains = ['admin.com'];

//For Signing Up
export const emailAuthSchema = z
    .object({
        email: z
            .string({ required_error: 'Email is required' })
            .email('Please enter a valid email address')
            .refine(value => {
                const domain = value.split('@')[1];
                return allowedDomains.includes(domain);
            }, {
                message: 'Email Not Recognized',
            }),
        password: z
            .string({ required_error: 'Password is required' })
            .min(6, 'Password must have at least 6 characters')
    });

export type EmailAuth = z.infer<typeof emailAuthSchema>;
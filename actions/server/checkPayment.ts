"use server";

import { prisma } from "@/lib/prismadb";

type PaymentCheckResult = {
    success: boolean;
    message: string;
    error?: any;
};

export default async function checkPayment(studentId: string): Promise<PaymentCheckResult> {
    try {
        // Find the user by studentId
        const user = await prisma.contestants.findUnique({
            where: { studentId },
        });

        if (!user) {
            return { success: false, message: "Contestant details not found, kindly enter another one." };
        }

        if (!user.hasPaid) {
            return { success: false, message: "Only paid contestants can access this page." };
        }

        // This covers the case where user.hasPaid is true
        return { success: true, message: "Your payment status was confirmed to be true. Proceed!" };
        
    } catch (error: any) {
        console.error('Error checking payment status', error.stack);
        return { 
            success: false, 
            message: "An error occurred while checking your payment status.", 
            error: error 
        };
    }
}
"use server"

import { prisma } from "@/lib/prismadb";


export default async function checkPayment(studentId: string) {

    try {

        // Find the user by studentId
        const user = await prisma.contestants.findUnique({
            where: { studentId },
        });

        if (!user) {
            return { success: false, message: "Contestant details not found, kindly enter another one." }
        }

        if (!user.hasPaid) {
            return { success: false, message: "Only paid contestants can access this page." }
        }

        if (user.hasPaid) {
            return { success: true, message: "Your payment status was confirmed to be true. Proceed!" }
        }

    } catch (error: any) {
        console.error('Error checking payment status', error.stack)
        return { success: false, error: error }
    }
}
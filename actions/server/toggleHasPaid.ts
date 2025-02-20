"use server"

import { prisma } from "@/lib/prismadb";

export default async function toggleHasPaid(studentId: string, status: boolean) {

    try {

        await prisma.contestants.update({
            where: {
                studentId
            },
            data: {
                hasPaid: !status,
            },
        });

        return { success: true, message: "The contestant payment status was updated successfully." }

    } catch (error: any) {
        console.error('Error toggling contestant payment status', error.stack)
        return { success: false, error: error }
    }
}
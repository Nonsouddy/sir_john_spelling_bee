"use server"

import { prisma } from "@/lib/prismadb";

export async function deleteContestant(studentId: string) {

    try {
        await prisma.contestants.delete({
            where: {
                studentId
            },
        });

        return { success: true, message: "The contestant was deleted successfully." }

    } catch (error: any) {
        console.error('Error deleting contestant', error.stack)
        return { success: false, error: error }
    }
}

export async function deleteContestants(studentIds: string[]) {

    try {
        await prisma.contestants.deleteMany({
            where: {
                studentId:
                    { in: studentIds }
            }
        });

        return { success: true, message: "The contestants were deleted successfully." }

    } catch (error: any) {
        console.error('Error deleting contestants', error.stack)
        return { success: false, error: error }
    }
}
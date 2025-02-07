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

    } catch (error) {
        console.error('Error deleting contestant', error)
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

    } catch (error) {
        console.error('Error deleting contestants', error)
        return { success: false, error: error }
    }
}
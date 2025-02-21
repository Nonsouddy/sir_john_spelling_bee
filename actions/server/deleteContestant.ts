"use server"

import { prisma } from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function deleteContestant(studentId: string, page: string) {

    try {
        await prisma.contestants.delete({
            where: {
                studentId
            },
        });

        revalidatePath(`/admin/${page}`)
        return { success: true, message: "The contestant was deleted successfully." }

    } catch (error: any) {
        console.error('Error deleting contestant', error.stack)
        return { success: false, error: error }
    }
}

export async function deleteContestants(studentIds: string[], page: string) {

    try {
        await prisma.contestants.deleteMany({
            where: {
                studentId:
                    { in: studentIds }
            }
        });

        revalidatePath(`/admin/${page}`)
        return { success: true, message: "The contestants were deleted successfully." }

    } catch (error: any) {
        console.error('Error deleting contestants', error.stack)
        return { success: false, error: error }
    }
}
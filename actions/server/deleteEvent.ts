"use server"

import { prisma } from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export default async function deleteEvent(id: string) {

    try {
        await prisma.events.delete({
            where: {
                id
            },
        });

        revalidatePath(`/admin/events`)
        return { success: true, message: "The event was deleted successfully." }

    } catch (error: any) {
        console.error('Error deleting event', error.stack)
        return { success: false, error: error }
    }
}
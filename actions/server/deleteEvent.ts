"use server"

import { prisma } from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

//Actions
import { deleteFile } from "./deleteFiles";

export default async function deleteEvent(id: string) {

    try {
        //Fetch event
        const event = await prisma.events.findUnique({
            where: {
                id
            }
        })

        //Delete event
        await prisma.events.delete({
            where: {
                id
            },
        });

        //Delete Images
        if (event?.images && event.images.length > 0) {
            for (const image of event.images) {
                await deleteFile(image)
            }
        }

        revalidatePath(`/admin/events`)
        return { success: true, message: "The event was deleted successfully." }

    } catch (error: any) {
        console.error('Error deleting event', error.stack)
        return { success: false, error: error }
    }
}
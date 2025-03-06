"use server"

import { prisma } from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

//Actions
import { deleteFile } from "./deleteFiles";

export default async function deleteGalleryItem(id: string) {

    try {
        //Fetch gallery
        const gallery = await prisma.gallery.findUnique({
            where: {
                id
            }
        })

        //Delete gallery
        await prisma.gallery.delete({
            where: {
                id
            },
        });

        //Delete Images
        if (gallery?.images && gallery.images.length > 0) {
            for (const image of gallery.images) {
                await deleteFile(image)
            }
        }

        revalidatePath(`/admin/gallery`)
        return { success: true, message: "The gallery item was deleted successfully." }

    } catch (error: any) {
        console.error('Error deleting gallery item', error.stack)
        return { success: false, error: error }
    }
}
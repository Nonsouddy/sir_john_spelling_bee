"use server"

import { prisma } from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

//Actions
import { deleteFile } from "./deleteFiles";

export default async function deleteMaterial(id: string) {

    try {
        //Fetch materials
        const materials = await prisma.materials.findUnique({
            where: {
                id
            }
        })

        //Delete materials
        await prisma.materials.delete({
            where: {
                id
            },
        });

        //Delete Images
        if (materials?.downloadLink) {
            await deleteFile(materials.downloadLink)
        }

        revalidatePath(`/admin/materials`)
        return { success: true, message: "The materials was deleted successfully." }

    } catch (error: any) {
        console.error('Error deleting materials', error.stack)
        return { success: false, error: error }
    }
}
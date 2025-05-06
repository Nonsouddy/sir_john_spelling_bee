"use server"

import { prisma } from "@/lib/prismadb";


export default async function downloadMaterial(studentId: string, materialLink: string) {

    try {
        // Find the user by studentId
        const user = await prisma.contestants.findUnique({
            where: { studentId },
        });

        if (!user) {
            return { success: false, message: "Contestant details not found, kindly enter another one." }
        }

        if (!user.hasPaid) {
            return { success: false, message: "Only paid contestants can download materials." }
        }

        // Check if the material has already been downloaded
        if (user.downloadedMaterials.includes(materialLink)) {
            return { success: false, message: "The Contestants has downloaded the Material." }
        }

        // Update user record: Append the new material link
        await prisma.contestants.update({
            where: { studentId },
            data: {
                downloadedMaterials: {
                    push: materialLink,
                },
            },
        });

        // Return success and trigger the download
        return { success: true, message: "The materials was downloaded successfully." }

    } catch (error: any) {
        console.error('Error downloading material', error.stack)
        return { success: false, error: error }
    }
}
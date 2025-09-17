"use server";

import { prisma } from "@/lib/prismadb";

// Define the Material type
export type Material = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    author: string | null;
    body: string | null;
    downloadLink: string;
    type: string;
    size: number;
};

export default async function getMaterials(): Promise<Material[]> {
    try {
        // Fetch all materials
        const materials = await prisma.materials.findMany({
            orderBy: { createdAt: "desc" }
        });

        return materials;

    } catch (error: any) {
        console.error('Error fetching materials:', error.stack);
        // Return empty array instead of throwing to make the function more resilient
        return [];
    }
}
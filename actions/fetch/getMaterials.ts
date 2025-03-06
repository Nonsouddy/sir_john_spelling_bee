import { prisma } from "@/lib/prismadb";

export default async function getMaterials() {
    try {
        // Fetch all materials
        const materials = await prisma.materials.findMany({
            orderBy: { createdAt: "desc" }
        });

        return materials;

    } catch (error: any) {
        console.error('Error fetching materials:', error.stack);
        throw error;
    }
}

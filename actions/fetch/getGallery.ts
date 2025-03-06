import { prisma } from "@/lib/prismadb";

export default async function getGallery() {
    try {
        // Fetch all gallery items
        const gallery = await prisma.gallery.findMany({
            orderBy: { createdAt: "desc" }
        });

        return gallery;

    } catch (error: any) {
        console.error('Error fetching gallery:', error.stack);
        throw error;
    }
}

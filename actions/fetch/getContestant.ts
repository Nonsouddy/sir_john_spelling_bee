import { prisma } from "@/lib/prismadb";

export default async function getContestant(id: string) {
    try {

        //Return null if no Id was passed
        if (!id)  return { success: false, contestant: null };

        // Fetch contestant
        const contestant = await prisma.contestants.findUnique({
            where: {
                studentId: id
            }
        });

        return { success: !!contestant, contestant };

    } catch (error: any) {
        console.error('Error fetching contestant:', error);
        return { success: false, contestant: null }
    }
}

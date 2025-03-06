import { prisma } from "@/lib/prismadb";

export default async function getStaff() {
    try {
        // Fetch all staff
        const staff = await prisma.admin.findMany({
            orderBy: { createdAt: "desc" }
        });

        return staff;

    } catch (error: any) {
        console.error('Error fetching staff:', error.stack);
        throw error;
    }
}

import { prisma } from "@/lib/prismadb";

export default async function getContestants() {
    try {
        // Fetch all contestants
        const allContestants = await prisma.contestants.findMany({
            orderBy: { createdAt: "desc" }
        });

        // Filter non-paid and paid contestants
        const nonPaidContestants = allContestants.filter(contestant => !contestant.hasPaid);
        const paidContestants = allContestants.filter(contestant => contestant.hasPaid);

        // Fetch distinct school names
        const distinctSchools = await prisma.contestants.findMany({
            select: { schoolName: true },
            distinct: ["schoolName"]
        });

        // Count the number of unique schools
        const totalSchools = distinctSchools.length;

        return { allContestants, nonPaidContestants, paidContestants, totalSchools };

    } catch (error: any) {
        console.error('Error fetching contestants:', error);
        throw error;
    }
}

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

        //Get the last 10 Unpaid
        const lastTwentyUnPaidContestants = nonPaidContestants.slice(0, 20);


        // Fetch distinct school names
        const distinctSchools = await prisma.contestants.findMany({
            select: { schoolName: true },
            distinct: ["schoolName"]
        });

        // Count the number of unique schools
        const totalSchools = distinctSchools.length;

        return { allContestants, nonPaidContestants, paidContestants, lastTwentyUnPaidContestants, totalSchools };

    } catch (error: any) {
        console.error('Error fetching contestants:', error.stack);
        throw error;
    }
}

import { prisma } from "@/lib/prismadb";

export default async function getEvents() {
    try {
        // Fetch all events
        const events = await prisma.events.findMany({
            orderBy: { createdAt: "desc" }
        });

        return events;

    } catch (error: any) {
        console.error('Error fetching events:', error.stack);
        throw error;
    }
}

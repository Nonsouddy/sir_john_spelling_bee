import { prisma } from "@/lib/prismadb";

export async function getEvents() {
    try {
        const events = await prisma.events.findMany({
            orderBy: { date: 'asc' },
        });

        return events.map(event => ({
            title: event.name,
            description: event.venue,
            date: new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
            time: new Date(event.date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
            image: event.images?.[0] || "/Svgs/fallback.svg",
            details: event.otherDetails,
        }));
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
}
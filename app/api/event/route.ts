import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function POST(request: NextRequest) {

    const body = await request.json();

    try {

        const { name, venue, otherDetails, images, date } = body;

        const formattedDate = new Date(date).toISOString();

        // Create event
        const newEvent = await prisma.events.create({
            data: {
                name,
                venue,
                otherDetails,
                images,
                date: formattedDate,
            }
        });


        return NextResponse.json(newEvent);

    } catch (error: any) {
        console.error("Error creating event:", error.stack);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
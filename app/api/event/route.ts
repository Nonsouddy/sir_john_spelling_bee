import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function POST(request: NextRequest) {

    const body = await request.json();
    console.log("The Images", body.image)

    try {

        const { name, venue, otherDetails, images, date } = body;

        // Create event
        const newEvent = await prisma.events.create({
            data: {
                name,
                venue,
                otherDetails,
                images,
                date,
            }
        });


        return NextResponse.json(newEvent);

    } catch (error: any) {
        console.error("Error creating event:", error.stack);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

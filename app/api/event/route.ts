import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
//
import getPublicEvents from "@/actions/public/getPublicEvents";


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

// Add your new GET function
export async function GET(request: NextRequest) {
    try {
      const events = await getPublicEvents();
      return NextResponse.json(events); 
    } catch (error) {
      console.error('Error fetching events:', error);
      return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
    }
  }
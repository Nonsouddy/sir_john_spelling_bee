import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { revalidatePath } from 'next/cache';

//Utils and Actions
import { prisma } from '@/lib/prismadb';
import { deleteFile } from '@/actions/server/deleteFiles';

export async function POST(request: NextRequest) {

    const body = await request.json();

    try {

        const { id, name, venue, otherDetails, images, date, formerImages } = body;

        const formattedDate = new Date(date).toISOString();

        // Create event
        const updatedEvent = await prisma.events.update({
            where: {
                id
            },
            data: {
                name,
                venue,
                otherDetails,
                images,
                date: formattedDate,
            }
        });

        //Delete former images
        if (formerImages && formerImages.length > 0) {
            for (const image of formerImages) {
                await deleteFile(image)
            }
        }

        revalidatePath("/admin/events")
        return NextResponse.json(updatedEvent);

    } catch (error: any) {
        console.error("Error updating event:", error.stack);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function POST(request: NextRequest) {

    const body = await request.json();

    try {

        const { images, description } = body;

        // Create new gallery item
        const newGalleryItem = await prisma.gallery.create({
            data: {
                images,
                description
            }
        });

        return NextResponse.json(newGalleryItem);

    } catch (error: any) {
        console.error("Error creating new gallery item:", error.stack);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
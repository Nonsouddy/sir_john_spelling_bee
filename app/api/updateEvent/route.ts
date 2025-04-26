import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Handle creating a new gallery item
export async function POST(request: NextRequest) {
    const body = await request.json();

    try {
        const { images, description } = body;

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

// Handle fetching all gallery items
export async function GET(request: NextRequest) {
    try {
        const galleryItems = await prisma.gallery.findMany({
            orderBy: { createdAt: 'desc' }, // Optional: latest first
        });

        return NextResponse.json(galleryItems);

    } catch (error: any) {
        console.error("Error fetching gallery items:", error.stack);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function POST(request: NextRequest) {

    const body = await request.json();

    try {

        const { title, author, bodyText, downloadLink, type, size } = body;

        // Create new material
        const material = await prisma.materials.create({
            data: {
                title,
                author,
                body: bodyText,
                downloadLink,
                type,
                size
            }
        });

        return NextResponse.json(material);

    } catch (error: any) {
        console.error("Error creating new material:", error.stack);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
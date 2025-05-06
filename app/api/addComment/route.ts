import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { client } from '@/sanity/lib/client';

export default async function POST(request: NextRequest) {

    const body = await request.json();

    try {
        const { name, email, comment, postId } = body;

        const newComment = await client.create({
            _type: 'comment',
            name,
            email,
            comment,
            approved: true,
            post: {
                _type: 'reference',
                _ref: postId,
            },
        });

        return NextResponse.json(newComment);

    } catch (error: any) {
        console.error("Error creating comment:", error.stack);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

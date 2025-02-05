import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


export async function POST(request: NextRequest) {

    const body = await request.json();
    try {

        // 

        // 
        

        //

    } catch (error: any) {

        console.error("Error login in the admin:", error.stack);
        if (error instanceof Error) {
            return new NextResponse(error.message);
        }

        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
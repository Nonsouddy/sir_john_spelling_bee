import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { z } from 'zod';
import { cookies } from 'next/headers';

//Schemas and libs
import { emailAuthSchema } from '@/app/schemas/auth.schema';
import { signSession } from '@/lib/token';



export async function POST(request: NextRequest) {

    const body = await request.json();
    const cookieStore = await cookies()

    try {

        // Validate the incoming request body against the schema
        emailAuthSchema.parse(body);
        const { email, password } = body;

        const lowerCaseEmail = email.toLowerCase()

        //Hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        //Fetch the admin using their email
        const adminExists = await prisma.admin.findUnique({
            where: {
                email: lowerCaseEmail
            }
        })

        //Throw an error if the admin exists
        if (adminExists) return new NextResponse('Email already exists, kindly login or enter a new email address.', { status: 403 })

        const newAdmin = await prisma.admin.create({
            data: {
                email: lowerCaseEmail,
                hashedPassword
            }
        })

        //Convert the details as token, and save it as a cookie
        const data = await signSession(newAdmin)

        // Save the admin hashed details as a cookie
        cookieStore.set({
            name: 'session',
            value: data,
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            sameSite: "strict",
        });

        return NextResponse.json(newAdmin);

    } catch (error: any) {

        console.error("Error Creating admin:", error.stack);

        if (error instanceof z.ZodError) {
            return new NextResponse('Data Validation Error', { status: 400 });
        }

        if (error instanceof Error) {
            return new NextResponse(error.message);
        }

        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

//Libs
import { generateUserId } from './../../../lib/generateUserId';

export async function POST(request: NextRequest) {

    const body = await request.json();

    try {

        const { studentFullName, studentEmail, studentPhoneNumber, gender, studentDateOfBirth, studentClass, category, schoolName, schoolLocation, schoolPhoneNumber, tutorName, tutorPhoneNumber } = body;

        if (!studentFullName || !studentEmail || !studentPhoneNumber || !gender || !studentDateOfBirth || !studentClass || !category || !schoolName || !schoolLocation || !schoolPhoneNumber || !tutorName || !tutorPhoneNumber) {
            return new NextResponse("Incomplete student details, kindly complete the details and try again.", { status: 500 });
        }

        const studentId = generateUserId();

        //Create a new student registration
        const newContestant = await prisma.contestants.create({
            data: {
                studentId,
                studentFullName,
                studentEmail,
                studentPhoneNumber,
                gender,
                studentDateOfBirth,
                studentClass,
                category,
                schoolName,
                schoolLocation,
                schoolPhoneNumber,
                tutorName,
                tutorPhoneNumber
            }
        })

        return NextResponse.json(newContestant);

    } catch (error) {
        console.error("Error creating a new contestant:", error);

        if (error instanceof Error) {
            return new NextResponse(error.message);
        }

        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
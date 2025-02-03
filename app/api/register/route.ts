import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { render } from '@react-email/components';

//Libs and Templates
import { generateUserId } from './../../../lib/generateUserId';
import { sendEmail } from '@/lib/email';
import RegisterTemplate from '@/app/emails/Register';

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
        
        // Send the welcome email
        await sendEmail({
            to: studentEmail,
            subject: "Registration Confirmation",
            html: await render(RegisterTemplate({ uniqueId: studentId })),
        });

        return NextResponse.json(newContestant);

    } catch (error) {
        console.error("Error creating a new contestant:", error);

        if (error instanceof Error) {
            return new NextResponse(error.message);
        }

        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
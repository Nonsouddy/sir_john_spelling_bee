import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { render } from '@react-email/components';

//Libs and Templates
import { generateUserId } from './../../../lib/generateUserId';
import { sendEmail } from '@/lib/email';
import RegisterTemplate from '@/app/emails/Register';

//Type
import { Gender } from '@prisma/client';

export async function POST(request: NextRequest) {

    const body = await request.json();
    try {
        const { studentFullName, studentEmail, studentPhoneNumber, gender, studentDateOfBirth, studentClass, category, schoolName, schoolLocation, schoolPhoneNumber, tutorName, tutorPhoneNumber } = body;

        if (!studentFullName || !studentEmail || !studentPhoneNumber || !gender || !studentDateOfBirth || !studentClass || !category || !schoolName || !schoolLocation || !schoolPhoneNumber || !tutorName || !tutorPhoneNumber) {
            return new NextResponse("Incomplete student details, kindly complete the details and try again.", { status: 404 });
        }

        let studentId: string;

        // Generate a unique studentId
        do {
            studentId = generateUserId();
        } while (await prisma.contestants.findUnique({ where: { studentId } }));

        //Create a new student registration 
        const newContestant = await prisma.contestants.create({
            data: {
                studentId,
                studentFullName: studentFullName.toLowerCase(),
                studentEmail: studentEmail.toLowerCase(),
                studentPhoneNumber,
                gender: gender.toLowerCase() as Gender,
                studentDateOfBirth: studentDateOfBirth,
                studentClass,
                category,
                schoolName: schoolName.toLowerCase(),
                schoolLocation: schoolLocation.toLowerCase(),
                schoolPhoneNumber,
                tutorName: tutorName.toLowerCase(),
                tutorPhoneNumber
            }
        })

        // Generate Template
        const emailTemplate = await render(RegisterTemplate({ uniqueId: studentId }));

        // Send the registration email
        await sendEmail({
            to: studentEmail,
            subject: "Registration Confirmation",
            html: emailTemplate,
        });

        return NextResponse.json(newContestant);

    } catch (error: any) {

        console.error("Error creating a new contestant:", error.stack);
        if (error instanceof Error) {
            return new NextResponse(error.message);
        }

        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
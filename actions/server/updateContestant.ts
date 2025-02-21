"use server"

import { prisma } from "@/lib/prismadb";
import { render } from '@react-email/components';
import { revalidatePath } from "next/cache";

//Utils and Templates
import { sendEmail } from '@/lib/email';
import PaymentConfirmation from "@/app/emails/PaymentConfirmation";

export default async function updateHasPaid(studentId: string, email: string, page: string) {

    try {

        await prisma.contestants.update({
            where: {
                studentId
            },
            data: {
                hasPaid: true,
            },
        });

        // Generate Template
        const emailTemplate = await render(PaymentConfirmation({ uniqueId: studentId }));

        // Send the registration email
        await sendEmail({
            to: email,
            subject: "Payment Confirmation",
            html: emailTemplate,
        });

        revalidatePath(`/admin/${page}`)
        return { success: true, message: "The contestant payment status was updated successfully." }

    } catch (error: any) {
        console.error('Error updating contestant payment status', error.stack)
        return { success: false, error: error }
    }
}
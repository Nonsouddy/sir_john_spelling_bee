import { prisma } from '@/lib/prismadb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

//libs
import { generateFileName } from '@/lib/generateUserId';

// Environment Variables
const region = process.env.BUCKET_REGION!;
const accessKey = process.env.ACCESS_KEY!;
const secretKey = process.env.SECRET_ACCESS_KEY!;
const bucketName = process.env.BUCKET_NAME!;
const fileSize = process.env.FILE_SIZE!;

// S3 Client
const s3 = new S3Client({
    region: region,
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretKey,
    }
});

const maxFileSize = 1024 * 1024 * parseInt(fileSize);

export async function POST(request: NextRequest) {

    const body = await request.json();
    console.log("The Body", body)

    try {

        const { name, venue, otherDetails, image, date } = body;


        // Upload images and store their URLs
        const uploadedUrls: string[] = await Promise.all(

            image.map(async (file: File) => {
                if (file.size > maxFileSize) {
                    throw new Error("File too large");
                }

                // Generate unique file name
                const fileName = generateFileName(file.name)

                // Prepare S3 upload command
                const putObjectCommand = new PutObjectCommand({
                    Bucket: bucketName,
                    Key: fileName,
                    ContentType: file.type,
                    ContentLength: file.size,
                    Metadata: { userName: name },
                });

                // Generate signed URL
                const signedUrl = await getSignedUrl(s3, putObjectCommand, { expiresIn: 3600 });

                // Upload file to S3
                await fetch(signedUrl, {
                    method: "PUT",
                    body: file,
                    headers: { "Content-Type": file.type },
                });

                return `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
            })
        );

        console.log("The uploaded image urls", uploadedUrls)

        // Create event
        const newEvent = await prisma.events.create({
            data: {
                name,
                venue,
                otherDetails,
                image: uploadedUrls,
                date
            }
        });


        return NextResponse.json(newEvent);

    } catch (error: any) {
        console.error("Error creating event:", error.stack);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

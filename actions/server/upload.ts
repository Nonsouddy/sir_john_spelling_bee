"use server"

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

export const uploadFiles = async (images: File[]) => {

    try {

        // Upload images and store their URLs
        const uploadedUrls: string[] = await Promise.all(

            images.map(async (file: File) => {

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
                    Metadata: { userName: "super admin" },
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

        return { success: true, imageLinks: uploadedUrls }

    } catch (error: any) {

        console.error('Error toggling contestant payment status', error.stack)
        return { success: false, message: "Couldn't upload file now, kindly try again later" }
    }
}
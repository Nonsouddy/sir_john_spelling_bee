"use server";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Utility to generate unique file names
import { generateFileName } from '@/lib/generateUserId';

// Environment Variables
const region = process.env.BUCKET_REGION!;
const accessKey = process.env.ACCESS_KEY!;
const secretKey = process.env.SECRET_ACCESS_KEY!;
const bucketName = process.env.BUCKET_NAME!;
const fileSizeLimit = process.env.FILE_SIZE!;

// S3 Client
const s3 = new S3Client({
    region,
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretKey,
    }
});

const maxFileSize = 1024 * 1024 * parseInt(fileSizeLimit);

// Allowed file types based on the input field
const allowedTypes = [
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/pdf",
    "text/plain"
];


const uploadFiles = async (files: File[]) => {
    try {
        const uploadedFiles = await Promise.all(
            files.map(async (file: File) => {
                if (file.size > maxFileSize) {
                    throw new Error(`"${file.name}" is too large! Max allowed: ${fileSizeLimit}MB.`);
                }

                if (!allowedTypes.includes(file.type)) {
                    throw new Error(`"${file.name}" is not an allowed file type.`);
                }

                // Generate unique file name
                const fileName = generateFileName(file.name);

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

                // Return details of uploaded file
                return {
                    fileUrl: `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`,
                    fileType: file.type,
                    fileSize: (file.size / (1024 * 1024)).toFixed(2) + " MB",
                };
            })
        );

        return { success: true, fileDetails: uploadedFiles };

    } catch (error: any) {
        console.error("Upload error:", error.message);
        return { success: false, message: error.message };
    }
};

export default uploadFiles;
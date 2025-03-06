"use server"

import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

// Environment Variables
const region = process.env.BUCKET_REGION!;
const accessKey = process.env.ACCESS_KEY!;
const secretKey = process.env.SECRET_ACCESS_KEY!;


const s3 = new S3Client({
    region: region,
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretKey,
    }
});

export const deleteFile = async (fileUrl: string) => {
    try {
        const fileName = fileUrl.split("/").pop();

        const deleteCommand = new DeleteObjectCommand({
            Bucket: process.env.BUCKET_NAME!,
            Key: fileName!,
        });

        await s3.send(deleteCommand);
        return { success: true, message: "File deleted successfully" };

    } catch (error) {
        console.error("Error deleting file:", error);
        return { success: false, message: "Failed to delete file" };
    }
};

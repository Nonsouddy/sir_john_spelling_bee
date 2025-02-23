import { v4 as uuidv4 } from "uuid";

export const generateUserId = (): string => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomPart = "";

    for (let i = 0; i < 6; i++) {
        randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return `SJS-${randomPart}`;
};


/**
 * Generates a unique and structured file name.
 * Format: YYYYMMDD-HHMMSS-uuid_originalFileName
 * Example: 20240223-153045-8f7a9d1e_profile_picture.png
 *
 * @param originalName - The original file name (to preserve file type).
 * @returns A unique file name string.
 */
export function generateFileName(originalName: string): string {
    const timestamp = new Date()
        .toISOString()
        .replace(/[-T:]/g, "") // Remove separators (YYYYMMDDHHMMSS)
        .split(".")[0]; // Remove milliseconds

    const uniqueId = uuidv4().split("-")[0]; // Shortened UUID for uniqueness
    const extension = originalName.split(".").pop(); // Get file extension

    return `${timestamp}-${uniqueId}.${extension}`;
}

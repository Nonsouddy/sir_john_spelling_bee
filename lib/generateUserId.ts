import { v4 as uuidv4 } from "uuid";

export const generateUserId = (): string => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomPart = "";

    for (let i = 0; i < 6; i++) {
        randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return `SJS-${randomPart}`;
};

export function generateFileName(originalName: string): string {
    
    const uniqueId = uuidv4();
    const extension = originalName.split(".").pop();

    return `${uniqueId}.${extension}`;
}

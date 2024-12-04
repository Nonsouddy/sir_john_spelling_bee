// services/galleryService.ts
import { v4 as uuidv4 } from 'uuid';

// actual API calls
export const uploadImage = async (file: File, description: string) => {
  // Simulate file upload
  const reader = new FileReader();
  
  return new Promise<{
    id: string;
    url: string;
    description: string;
    uploadedAt: Date;
  }>((resolve, reject) => {
    reader.onloadend = () => {
      const newImage = {
        id: uuidv4(),
        url: reader.result as string,
        description,
        uploadedAt: new Date()
      };
      resolve(newImage);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const fetchGalleryImages = async () => {
  //  an API call
  return Promise.resolve<{
    id: string;
    url: string;
    description: string;
    uploadedAt: Date;
  }[]>([]);
};

export const deleteImage = async (imageId: string) => {
  // In a real app, this would be an API call to delete the image
  return Promise.resolve();
};
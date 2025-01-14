"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import '@assets/css/adminGallery.css'
import { GalleryUploadForm } from './galleryUploadForm';
import { GalleryImageList } from './galleryImageList';
import { uploadImage, fetchGalleryImages, deleteImage } from './galleryService';

interface GalleryImage {
  id: string;
  url: string;
  description: string;
  uploadedAt: Date;
}

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      setIsLoading(true);
      const fetchedImages = await fetchGalleryImages();
      setImages(fetchedImages);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load images');
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (file: File, description: string) => {
    try {
      const newImage = await uploadImage(file, description);
      setImages(prevImages => [newImage, ...prevImages]);
    } catch (err) {
      setError('Failed to upload image');
    }
  };

  const handleImageDelete = async (imageId: string) => {
    try {
      await deleteImage(imageId);
      setImages(prevImages => prevImages.filter(img => img.id !== imageId));
    } catch (err) {
      setError('Failed to delete image');
    }
  };

  return (
    <div className= "adminGalleryContainer">
      <Head>
        <title>Admin Gallery Management</title>
        <meta name="description" content="Manage gallery images" />
      </Head>

      <main className= "mainContent">
        <h1 className="pageTitle">Gallery Management</h1>

        <GalleryUploadForm 
          onImageUpload={handleImageUpload}
          disabled={isLoading}
        />

        {error && (
          <div className= "errorMessage">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className= "loadingSpinner">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 50 50" 
              className= "spinner"
            >
              <circle 
                cx="25" 
                cy="25" 
                r="20" 
                fill="none" 
                strokeWidth="4" 
                stroke="#007bff" 
                strokeDasharray="60, 100"
              />
            </svg>
          </div>
        ) : (
          <GalleryImageList 
            images={images} 
            onDeleteImage={handleImageDelete} 
          />
        )}
      </main>
    </div>
  );
}
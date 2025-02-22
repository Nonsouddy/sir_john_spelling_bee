import React, { useState, useRef } from 'react';
import '@assets/css/adminGallery.css'
import Image from 'next/image';

interface GalleryUploadFormProps {
  onImageUpload: (file: File, description: string) => Promise<void>;
  disabled?: boolean;
}

export const GalleryUploadForm: React.FC<GalleryUploadFormProps> = ({ 
  onImageUpload, 
  disabled 
}) => {
  const [description, setDescription] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      await onImageUpload(file, description);
      // Reset form
      setDescription('');
      setPreviewImage(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className= "uploadForm"
      aria-label="Gallery Image Upload Form"
    >
      <div className= "formGroup">
        <label htmlFor="imageUpload" className="fileInputLabel">
          {previewImage ? (
            <Image 
              src={previewImage} 
              alt="Preview" 
              className= "imagePreview"
            />
          ) : (
            <div className= "fileInputPlaceholder">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className= "uploadIcon"
              >
                <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
              </svg>
              <span>Upload Image</span>
            </div>
          )}
          <input 
            type="file" 
            id="imageUpload"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFileChange}
            className="hiddenFileInput"
            disabled={disabled}
            required
          />
        </label>
      </div>

      <div className= "formGroup">
        <label htmlFor="imageDescription">Image Description</label>
        <input 
          type="text"
          id="imageDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className= "descriptionInput"
          placeholder="Enter image description"
          maxLength={200}
          disabled={disabled}
          required
        />
      </div>

      <button 
        type="submit" 
        className= "uploadButton"
        disabled={disabled || !previewImage}
      >
        Upload Image
      </button>
    </form>
  );
}
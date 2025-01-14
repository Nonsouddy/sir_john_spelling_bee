import React, { useState } from 'react';
import '@assets/css/adminGallery.css'


interface GalleryImage {
  id: string;
  url: string;
  description: string;
  uploadedAt: Date;
}

interface GalleryImageListProps {
  images: GalleryImage[];
  onDeleteImage: (imageId: string) => Promise<void>;
}

export const GalleryImageList: React.FC<GalleryImageListProps> = ({ 
  images, 
  onDeleteImage 
}) => {
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const handleDeleteClick = async (imageId: string) => {
    await onDeleteImage(imageId);
    setConfirmDelete(null);
  };

  return (
    <div className="galleryImageGrid">
      {images.length === 0 ? (
        <div className="emptyState">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className= "emptyIcon"
          >
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H5V5h14v14zM13.5 13l-2.25 3-1.75-2.25L6 17h12l-4.5-4z"/>
          </svg>
          <p>No images uploaded yet</p>
        </div>
      ) : (
        images.map((image) => (
          <div key={image.id} className= "galleryImageItem">
            <img 
              src={image.url} 
              alt={image.description} 
              className= "galleryImage" 
            />
            <div className= "imageOverlay">
              <p className= "imageDescription">
                {image.description}
              </p>
              <div className= "imageActions">
                {confirmDelete === image.id ? (
                  <div className= "confirmDelete">
                    <button 
                      onClick={() => handleDeleteClick(image.id)}
                      className= "confirmDeleteButton"
                    >
                      Confirm Delete
                    </button>
                    <button 
                      onClick={() => setConfirmDelete(null)}
                      className= "cancelDeleteButton"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => setConfirmDelete(image.id)}
                    className= "deleteButton"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
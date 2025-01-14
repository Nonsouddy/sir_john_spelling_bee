'use client';

import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FileDocument } from '../Type/Document';
import '@assets/css/material.css';

const FileUploadForm: React.FC = () => {
  const [files, setFiles] = useState<FileDocument[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = event.target.files;
    if (uploadedFiles) {
      const newFiles: FileDocument[] = Array.from(uploadedFiles).map(file => ({
        id: uuidv4(),
        name: file.name,
        uploadDate: new Date(),
        accessCode: Math.random().toString(36).substring(7),
        fileType: file.type,
        size: file.size,
        url: URL.createObjectURL(file)
      }));

      setFiles(prevFiles => {
        //  Limit total files or implement file replacement logic
        return [...prevFiles, ...newFiles];
      });
    }
  };

  const handleDelete = (fileId: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
  };

  return (
    <div className="container upload-section">
      <input 
        type="file" 
        multiple 
        ref={fileInputRef} 
        onChange={handleFileUpload}
        className="file-input" 
        id="file-upload"
        accept=".pdf,.doc,.docx,.txt,.jpg,.png"
      />
            {/* upload svg */}
      <label htmlFor="file-upload" className="file-label">
       
      <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#3498db">
    <path d="M448-201.33h66.67V-391l76 76 46.66-47L480-516.67l-156 156L371-314l77-77v189.67ZM226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-666.66q0-27 19.83-46.84Q199.67-880 226.67-880H574l226 226v507.33q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm314-542.67v-190.66h-314v666.66h506.66v-476H540.67Zm-314-190.66v190.66-190.66 666.66-666.66Z"/></svg>

        <span className="ml-4 pt-5">Click To Upload</span>
      </label>
      <div className='UploadedDoc'>Uploaded Doucments</div>
      

      {files.length > 0 && (
        <div className="file-list mt-4">
          {files.map(file => (
            <div 
           
              key={file.id} 
              className="file-item flex justify-between items-center p-2 border-b border-t"
            >
             

              <div>
                <p>{file.name}</p>
                <p className="text-sm text-gray-500">
                  Access Code: {file.accessCode}
                </p>
              </div>
              <button 
                onClick={() => handleDelete(file.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploadForm;
'use client';

import React from 'react';
import FileUploadForm from '../../components/FileUploadForm';
import '@assets/css/material.css';

const AdminPage: React.FC = () => {
  return (
    <div className='MathHead'>
    <h1 className="text-xl font-400 mb-6 text-center pb-5">Admin Document Upload</h1>
    <div className= "container">
      <FileUploadForm />
    </div>
    </div>
  );
};
      
export default AdminPage;
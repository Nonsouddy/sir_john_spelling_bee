'use client';

import React from 'react';
import FileUploadForm from '../../../../components/FileUploadForm';
import '@assets/css/material.css';

const AdminPage = () => {
  return (
    <div className='MathHead'>
    <h1 className="mb-6 pb-5 font-400 text-center text-xl">Admin Document Upload</h1>
    <div className= "container">
      <FileUploadForm />
    </div>
    </div>
  );
};
      
export default AdminPage;
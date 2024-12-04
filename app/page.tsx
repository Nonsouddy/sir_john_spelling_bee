import React from 'react'
// import Dashboard from './(Admin)/Dashboard'
import RegistrationPage from './(RegistrationPage)/registrationPage'
import  RegAuth from './(RegistrationPage)/regAuth'
import  StaffPage from './(Admin)/staffPage'
import  GalleryPage from './(Admin)/adminGalleryPage/gallery'



function page() {
  return (
    <>
  <RegistrationPage/>
  < RegAuth/>
  {/* < Dashboard/> */}
  <StaffPage/>
 <GalleryPage/>

  

  </>
   
  )
}

export default page
"use client"
import { useState } from 'react';
import Image from 'next/image';
import Facebook from "../../../public/Svgs/FaceBook.svg";
import Twitter from "../../../public/Svgs/X.svg";
import WhatsApp from "../../../public/Svgs/Whatsapp.svg";
import Insta from "../../../public/Svgs/Instagram.svg";
import Youtube from "../../../public/Svgs/Youtube.svg";
import Tiktok from "../../../public/Svgs/Tiktok.svg";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-12 min-h-screen font-comic">
      <div className="gap-8 grid md:grid-cols-2 mx-auto max-w-7xl">
        {/* Contact Form */}
        <div className="bg-white shadow-lg p-8 rounded-lg">
          <h2 className="mb-6 font-bold text-3xl text-center text-gray-800">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 pl-2 rounded-md focus:ring-indigo-500 w-full sm:text-sm outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 pl-2 rounded-md focus:ring-indigo-500 w-full sm:text-sm outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium text-gray-700 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 rounded-md focus:ring-indigo-500 w-full sm:text-sm outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-emailButton hover:bg-emailButtonHover px-4 py-3 rounded-md w-full text-white transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information and Social Media */}
        <div className="flex flex-col justify-between bg-white shadow-lg p-8 rounded-lg">
          {/* Google Maps Embed */}
          <div className="mb-6">
            <h3 className="mb-4 font-bold text-2xl text-gray-800">
              Our Location
            </h3>
            <div className="bg-gray-200 rounded-lg w-full h-64 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63058.319847516446!2d7.333816658508896!3d8.958784721425543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x104e724ce523c71b%3A0xd9e4fb48232178e7!2sLugbe%20900107%2C%20Federal%20Capital%20Territory!3m2!1d8.9640864!2d7.3813708!5e0!3m2!1sen!2sng!4v1738764332884!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="mb-6">
            <h3 className="mb-4 font-bold text-2xl text-gray-800">
              Contact Details
            </h3>
            <p className="mb-2 text-gray-600">
            Email us at: <a href="mailto:help@sirjohnspellingbee.com">help@sirjohnspellingbee.com</a></p>
    
            <p className="mb-2 text-gray-600">
            Call us: <a href="tel:+2349039129125">+ 234 9039129125,7036658383</a>
            </p>
            <p className="text-gray-600">Adress: B69, Yenagoa Street, Airport Road, Lugbe, Abuja-FCT Nigeria.</p>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="mb-4 font-bold text-2xl text-gray-800">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61560930817507" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Image src={Facebook} alt='' className='w-8 h-8'/>
              </a>
              <a 
                href="https://www.instagram.com/sjspellingbee?utm_source=qr&igsh=aW1scDEwcGo3OW1j" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 transition-colors"
              >
                <Image src={Insta} alt='' className='w-8 h-8'/>
              </a>
              <a 
                href="https://x.com/sjs_bee?s=09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-gray-800 transition-colors"
              >
               <Image src={Twitter} alt='' className='w-8 h-8'/>
              </a>
              <a 
                href="https://youtube.com/@sirjohnspellingbee-l2m?si=clWYl_3rT7HRFQgH"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-800 transition-colors"
              >
               <Image src={Youtube} alt='' className='w-8 h-8'/>
              </a>
              <a 
                href="https://wa.me/2348144118744" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 transition-colors"
              >
               <Image src={WhatsApp} alt='' className='w-8 h-8'/>
              </a>
              <a 
                href="https://vm.tiktok.com/ZMk42sQCk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 transition-colors"
              >
               <Image src={Tiktok} alt='' className='w-8 h-8'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
// import Facebook from "../../../public/Svgs/FaceBook.svg"
// import Twitter from "../../../public/Svgs/X.svg"
// import WhatsApp from "../../../public/Svgs/Whatsapp.svg"
// import Insta from "../../../public/Svgs/Instagram.svg"
// import Youtube from "../../../public/Svgs/Youtube.svg"
// import Tiktok from "../../../public/Svgs/Tiktok.svg"

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
    console.log('Form submitted:', formData);
  };
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    setShowMap(true);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-comic">
          Let&apos;s Connect!
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-yellow-400">
            <h2 className="text-4xl font-bold text-center mb-8 text-blue-600 font-comic">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-purple-700 mb-2 font-comic">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 pl-4 block w-full rounded-full border-2 border-blue-300 outline-none shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-12 text-lg font-comic"
                  placeholder="Type your name here..."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-purple-700 mb-2 font-comic">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 pl-4 block w-full rounded-full border-2 border-blue-300 outline-none shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-12 text-lg font-comic"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-purple-700 mb-2 font-comic">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 pl-4 pt-2 block w-full rounded-2xl border-2 border-blue-300 outline-none shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-lg font-comic"
                  placeholder="What would you like to tell us?"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-full text-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-colors shadow-lg font-comic"
                >
                  Message Me 
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Google Maps Embed */}
            {/* Google Maps Embed */}
            <div className="bg-white rounded-3xl shadow-xl p-6 border-4 border-green-400 overflow-hidden">
              <h3 className="text-3xl font-bold text-green-600 mb-4 text-center font-comic">
                Our Location
              </h3>
              <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden border-2 border-yellow-300">
                {showMap && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63058.319847516446!2d7.333816658508896!3d8.958784721425543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x104e724ce523c71b%3A0xd9e4fb48232178e7!2sLugbe%20900107%2C%20Federal%20Capital%20Territory!3m2!1d8.9640864!2d7.3813708!5e0!3m2!1sen!2sng!4v1738764332884!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Our Location on Google Maps"
                  />
                )}
              </div>
            </div>


            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-xl p-6 border-4 border-red-400">
              <h3 className="text-3xl font-bold text-red-500 mb-4 text-center font-comic">
                How to Reach Us
              </h3>
              <div className="space-y-4 text-lg">
                <p className="flex items-center text-gray-700 font-comic">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">📧</span>
                  <a href="mailto:contact@sirjohnspellingbee.com.ng" className="hover:text-blue-600 underline">
                    contact@sirjohnspellingbee.com.ng
                  </a>
                </p>
                <p className="flex items-center text-gray-700 font-comic">
                  <span className="bg-green-100 p-2 rounded-full mr-3">📱</span>
                  <a href="tel:+2348144118744" className="hover:text-green-600 underline">
                    +234 814 411 8744
                  </a>
                </p>
                <p className="flex items-center text-gray-700 font-comic">
                  <span className="bg-purple-100 p-2 rounded-full mr-3">🏠</span>
                  B69, Yenagoa Street, Airport Road, Lugbe, Abuja-FCT Nigeria.
                </p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="bg-white rounded-3xl shadow-xl p-6 border-4 border-blue-400">
              <h3 className="text-3xl font-bold text-blue-500 mb-4 text-center font-comic">
                Join Our Community
              </h3>
              <div className="flex justify-center flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61560930817507"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition-colors shadow-md hover:shadow-lg"
                  aria-label="Facebook"
                >

                  <Image src="/Svgs/FaceBook.svg" alt="Facebook" width={40} height={40} />
                </a>
                <a
                  href="https://www.instagram.com/sjspellingbee?utm_source=qr&igsh=aW1scDEwcGo3OW1j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-100 p-3 rounded-full hover:bg-pink-200 transition-colors shadow-md hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Image src="/Svgs/Instagram.svg" alt="Instagram" width={40} height={40} />
                </a>
                <a
                  href="https://x.com/sjs_bee?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors shadow-md hover:shadow-lg"
                  aria-label="Twitter"
                >

                  <Image src="/Svgs/X.svg" alt="X" width={40} height={40} />
                </a>
                <a
                  href="https://youtube.com/@sirjohnspellingbee-l2m?si=clWYl_3rT7HRFQgH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-100 p-3 rounded-full hover:bg-red-200 transition-colors shadow-md hover:shadow-lg"
                  aria-label="YouTube"
                >
                  <Image src="/Svgs/YouTube.svg" alt="YouTube" width={40} height={40} />
                </a>
                <a
                  href="https://wa.me/2348144118744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors shadow-md hover:shadow-lg"
                  aria-label="WhatsApp"
                >
                  <Image src="/Svgs/WhatsApp.svg" alt="WhatsApp" width={40} height={40} />
                </a>
                <a
                  href="https://vm.tiktok.com/ZMk42sQCk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-colors shadow-md hover:shadow-lg"
                  aria-label="TikTok"
                >

                  <Image src="/Svgs/TikTok.svg" alt="TikTok" width={40} height={40} />
                </a>
              </div>
              <p className="text-center mt-4 text-lg text-gray-600 font-comic">
                Follow us for fun spelling tips and updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
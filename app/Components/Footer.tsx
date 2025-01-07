"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import logo from "../../public/Svgs/FooterLogo.svg"
import line from "../../public/Svgs/Line.svg"
import FaceBook from "../../public/Svgs/FaceBook.svg"
import x from "../../public/Svgs/X.svg"
import WhatsApp from "../../public/Svgs/Whatsapp.svg"
import Insta from "../../public/Svgs/Instagram.svg"
import Youtube from "../../public/Svgs/Youtube.svg"
import Tiktok from "../../public/Svgs/Tiktok.svg"

import '../Style/footer.css';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Newsletter submission logic
        console.log('Submitted:', email);
        setEmail('');
    };

    return (
        <div className='footer'>
            <div className="newsletter-container">
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <div className='newsletter-text'>
                        <div className='newsletter-bigText'>
                            <span>Subscribe to Stay in the Loop! Never Miss a Buzz.</span>
                        </div>
                        <div className='newsletter-smallText'>
                            <span>Be the first to get exciting updates, tips, and exclusive content from Sir John’s Spelling Bee!"</span>
                        </div>
                    </div>
                    <div className='news-letter-input'>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">
                            <div>Register Now</div>
                        </button>
                    </div>

                </form>
            </div>




            <footer className="footer-container">
                <div className="footer-content">
                    {/* Logo Section */}
                    <div className="footer-logo">
                        <Image src={logo} alt="SchoolLogo" />
                        <div className="side-line"></div>

                    </div>
                    <div className='footer-info'>
                        <div className='footer-list'>

                            {/* Quick Links */}
                            <div className="footer-section">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/about">Resources</a></li>
                                    <li><a href="/services">Events</a></li>

                                </ul>
                            </div>




                            {/* Company */}
                            <div className="footer-section">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="/careers">Privacy Policies</a></li>
                                    <li><a href="/press">Terms and conditions</a></li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="footer-section">
                                <h4>Contact</h4>
                                <p>help@sirjohnspellingbee.com</p>
                                <p>09039129125 07036658383</p>
                            </div>


                        </div>
                        <span></span>

                        {/* Social Media */}

                    </div>
                </div>

                <div className="footer-social">
                    <a href="#" className="social-icon" id='face'>
                        <Image src={FaceBook} alt=''/>
                    </a>
                    <a href="#" className="social-icon" id='face'><Image src={Youtube} alt=''/> </a>
                    <a href="#" className="social-icon" id='face'><Image src={x} alt=''/> </a>
                    <a href="#" className="social-icon" id='face'><Image src={x} alt=''/> </a>
                    <a href="#" className="social-icon" id='face'><Image src={WhatsApp} alt=''/></a>
                    <a href="#" className="social-icon"> <Image src={Insta} alt=''/></a>
                    {/* <a href="#" className="social-icon"> <Image src={Tiktok} alt=''/>Instagram</a> */}
                </div>

                <div>
                   
                    <div className='footer-copy'>  &copy;
                        <div>AllRightReserved.2024,Deals</div> </div>
                    </div>

                {/* Floating Newsletter */}

            </footer>
        </div>
    );
};

export default Footer;
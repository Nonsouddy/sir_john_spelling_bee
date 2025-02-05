"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/Svgs/FooterLogo.svg"
import line from "../../public/Svgs/Line.svg"
import FaceBook from "../../public/Svgs/FaceBook.svg"
import x from "../../public/Svgs/X.svg"
import WhatsApp from "../../public/Svgs/Whatsapp.svg"
import Insta from "../../public/Svgs/Instagram.svg"
import Youtube from "../../public/Svgs/Youtube.svg"
import Tiktok from "../../public/Svgs/Tiktok.svg"

import '../Style/footer.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Newsletter submission logic
        console.log('Submitted:', email);
        setEmail('');
    };

    return (
        <div className='footer'>
              {/* Floating Newsletter */}
            <div className="newsletter-container">
                <form onSubmit={handleSubmit} className="newsletter-form">
                    <div className='newsletter-text'>
                        <div className='newsletter-bigText'>
                            <span>Subscribe to Stay in the Loop! Never Miss a Buzz.</span>
                        </div>
                        <div className='newsletter-smallText'>
                            <span>Be the first to get exciting updates, tips, and exclusive content from Sir John&apos;s Spelling Bee!</span>
                        </div>
                    </div>
                    <div className='news-letter-input'>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                            
                        />
                        <button 
                        type="submit">
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
                                    <li><Link href="/about">About Us</Link></li>
                                    <li>< Link href="/resources">Resources</Link></li>
                                    <li><Link href="/resources">Events</Link></li>

                                </ul>
                            </div>




                            {/* Company */}
                            <div className="footer-section">
                                <h4>Company</h4>
                                <ul>
                                    <li><Link href="/termsAndConditions">Privacy Policies</Link></li>
                                    <li>< Link href="/termsAndConditions">Terms and conditions</Link></li>
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
                    <div className="social-icon">
                        <Link href="https://www.facebook.com/profile.php?id=61560930817507" target="_blank" rel="noopener noreferrer"><Image src={FaceBook} alt='' /></Link>
                        <Link href="https://x.com/sjs_bee?s=09" target="_blank" rel="noopener noreferrer"><Image src={x} alt='' /> </Link>
                        <Link href="https://vm.tiktok.com/ZMk42sQCk/" target="_blank" rel="noopener noreferrer" ><Image src={Tiktok} alt='' /> </Link>
                        <Link href="https://wa.me/2348144118744" target="_blank" rel="noopener noreferrer"><Image src={WhatsApp} alt='' /> </Link>
                        <Link href="https://youtube.com/@sirjohnspellingbee-l2m?si=clWYl_3rT7HRFQgH" target="_blank" rel="noopener noreferrer"><Image src={Youtube} alt='' /></Link>
                        <Link href="https://www.instagram.com/sjspellingbee?utm_source=qr&igsh=aW1scDEwcGo3OW1j" target="_blank" rel="noopener noreferrer"><Image src={Insta} alt='' /></Link>
                        {/* <a href="#" className="social-icon"> <Image src={Tiktok} alt=''/>Instagram</a> */}
                    </div>
                </div>

                <div>

                    <div className='footer-copy'>  &copy;
                        <div>AllRightReserved. 2025, Deals</div> </div>
                </div>

              

            </footer>
        </div>
    );
};

export default Footer;
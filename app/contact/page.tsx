// components/SocialIcons.js
import Image from "next/image";
import '@assets/css/contact.css'
import FaceBook from "../../public/Svgs/FaceBook.svg"
import x from "../../public/Svgs/X.svg"
import WhatsApp from "../../public/Svgs/Whatsapp.svg"
import Insta from "../../public/Svgs/Instagram.svg"
import Youtube from "../../public/Svgs/Youtube.svg"
import Tiktok from "../../public/Svgs/Tiktok.svg"


const Contact = () => {
    return (
        <div className="contact-main">
            <div className="contact-page">
                {/* Hero Section */}
                <div className="contact-header">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you! Reach out to us anytime.</p>
                    </div>
                

                {/* Contact Details Section */}
                <section className="contact-details">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>Email us at: <a href="mailto:help@sirjohnspellingbee.com">help@sirjohnspellingbee.com</a></p>
                        <p>Call us: <a href="tel:+1234567890">+ 234 9039129125,7036658383</a></p>
                        <p>Adress: B69, Yenagoa Street, Airport Road, Lugbe, Abuja-FCT Nigeria.</p>
                    </div>
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.836445947587!2d144.95373531584415!3d-37.81720974202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3f8f731%3A0x5045675218ce6e0!2zTWVsYm91cm5lIFZJQywgQXVzdHJhbGlh!5e0!3m2!1sen!2sus!4v1633417785634!5m2!1sen!2sus"
                            width="100%"
                            height="300"
                            // allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </section>

                {/* Social Media Links */}
                <section className="social-media">
                    <h2>Connect with Us</h2>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Image src={FaceBook} alt='' /></a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer"><Image src={x} alt='' /> </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" ><Image src={Tiktok} alt='' /> </a>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><Image src={WhatsApp} alt='' /> </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Image src={Youtube} alt='' /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Image src={Insta} alt='' /></a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;

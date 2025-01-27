 "use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "../Style/navBar.css"
import logo from "../../public/Svgs/Logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="Logo"/>
          </Link>
        </div>
        
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link href="/resources" className="nav-link">Resources</Link>
          </li>
          <li className="nav-item">
            <Link href="/#faq-container" className="nav-link">FAQs</Link>
          </li>
          <div className='nav_log'>
         
          <li className="nav-item register">
            <Link href="/instructions" className="register-btn">Register</Link>
          </li>
          </div>
         
        </ul>
      </div>

   
    </div>
  );
};

export default Navbar;
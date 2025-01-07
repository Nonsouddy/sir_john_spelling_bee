"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "../Style/ResourcesNavbar.css"
import logo from "../../public/Svgs/Logo.svg"

const ResourcesNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="res-navbar">
      <div className=" res-navbar-container">
        
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        
        <ul className={` res-nav-menu ${isOpen ? 'active' : ''}`}>
          <li className=" res-nav-item">
            <Link href="/All" className="nav-link">All</Link>
          </li>
          <li className="res-nav-item">
            <Link href="/Nature" className="nav-link">Nature</Link>
          </li>
          <li className="res-nav-item">
            <Link href="/English" className="nav-link">English</Link>
          </li>
          <li className="res-nav-item">
            <Link href="/Novel" className="nav-link">Novel</Link>
          </li>
          <li className="res-nav-item">
            <Link href="/Short Stories" className="nav-link">Short Stories</Link>
          </li>
          <li className="res-nav-item">
            <Link href="/Poems" className="nav-link">Poems</Link>
          </li>
         
        </ul>
      </div>

   
    </nav>
  );
};

export default ResourcesNavbar;
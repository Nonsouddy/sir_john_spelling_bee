"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

//Images and Icons
import logo from "../public/Svgs/Logo.svg";
import navHover from "../public/Svgs/navHover.svg";
import { HambergerMenu } from 'iconsax-react';

// Navigation Links Configuration
const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact Us" },
  { path: "/resources", label: "Resources" },
  { path: "/faq", label: "FAQs" },
];


const Navbar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathName = usePathname()

  //Functions
  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <nav className='font-comic'>
      <div className="flex justify-between items-center bg-[#FFFFFA] shadow-[0px_4px_26px_0px_rgba(0,0,0,0.07)] px-5 sm:px-10 md:px-20 xl:px-32 py-6">
        <Link href="/"><Image src={logo} alt='Logo' className='w-fit h-8 md:h-12 xl:h-16' /></Link>
        <div className='lg:flex gap-x-5 xl:gap-x-10 hidden'>
          {NAV_LINKS.map((link) => (
            <div key={link.path} className='relative'>
              <Link href={link.path} className={`${pathName === link.path ? "text-accentOrange font-bold" : "text-textGray hover:text-accentOrange duration-300 font-medium"}`}>{link.label}</Link>
              <Image src={navHover} className={`${pathName === link.path ? "absolute left-1/2 transform -translate-x-1/2" : "hidden"}`} alt='Hover Image' />
            </div>
          ))}
        </div>
        <Link href="/register?page=1" className={`${pathName === "/register" ? "bg-accentOrange text-white" : "bg-primaryYellow text-[#1C1B17]"} lg:block hidden px-2.5 py-3.5 rounded-[30px] w-48 font-bold text-center hover:-translate-y-1 duration-300`}>Register Now</Link>
        <HambergerMenu color="#000" className='lg:hidden cursor-pointer size-9 md:size-10' variant="Bold" onClick={toggleMenu} />
      </div>

      {/* Mobile Screen */}
      <div className={`lg:hidden fixed inset-0 bg-black opacity-50 ${isOpen ? "translate-x-0" : "-translate-x-full delay-500"} transition-transform duration-500 ease-in-out z-[5]`} onClick={toggleMenu}></div>
      <div onClick={toggleMenu} className={`lg:hidden flex flex-col gap-y-10 ${isOpen ? "translate-x-0 delay-500" : "-translate-x-full"} bg-[#FFFFFA] w-72 border-r border-[#413d3d] z-10 fixed top-0 left-0 h-screen transition-transform duration-500 ease-in-out p-8 py-20`}>
        {NAV_LINKS.map((link) => (
            <Link key={link.path} href={link.path} className={`${pathName === link.path ? "text-accentOrange font-bold" : "text-textGray hover:text-accentOrange duration-300 font-medium"} text-sm md:text-base`}>{link.label}</Link>
        ))}
        <Link href="/register?page=1" className={`${pathName === "/register" ? "bg-accentOrange text-white" : "bg-primaryYellow text-[#1C1B17]"} block lg:hidden px-2.5 py-3.5 rounded-[30px] w-48 font-bold text-center hover:-translate-y-1 duration-300`}>Register Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
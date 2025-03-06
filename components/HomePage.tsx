"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import beeImage from '../public/Images/beeImage.png'
import HomeImg from "../public/Svgs/homePageImg.svg"
import Ellipse1 from "../public/Svgs/Ellipse 1.svg"
import Ellipse5 from "../public/Svgs/Ellipse 5.svg"
import Ellipse4 from "../public/Svgs/Ellipse 4.svg"
import Ellipse6 from "../public/Svgs/Ellipse 6.svg"
import Ellipse2 from "../public/Svgs/Ellipse 2.svg"
import Ellipse3 from "../public/Svgs/Ellipse 3.svg"
import crulArrow from "../public/Svgs/crulArrow.svg"
import polygon1 from "../public/Svgs/polygon-1.svg"
import Arrow from "../public/Svgs/Arrow 1.svg"

//Components
import HomeStardom from '../components/Home/HomeStardom'
import HomeRegSection from '../components/Home/HomeRegSection'



const HomeSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen w-full bg-white overflow-hidden">
            <div
                className={`container mx-auto px-4 py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
            >
                {/* Left Section */}
                <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0 transition-all duration-500 lg:mt-[-120px]  ">
                    <div className="relative w-full max-w-[300px] mx-auto animate-float ml-[220px]">
                        <Image
                            src={beeImage}
                            alt="Bee"
                            className="object-contain hover:scale-105 transition-transform duration-300"
                        />
                    </div>


                    <div className="mt-4 lg:mt-6 text-center lg:text-left">
                        <div className={`flex flex-wrap justify-center font-['Comic_Sans_MS'] lg:justify-start items-center gap-2 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
                            <div className="text-accentOrange hover:scale-110 transition-transform duration-300 animate-bounce-subtle">Buzz</div>
                            <div className="transition-transform hover:rotate-3 pl-3 pr-3">Into</div>
                            <div className="text-[#59C5F3] hover:scale-110 transition-transform duration-300 animate-pulse-subtle">Brilliance:</div>
                        </div>

                        <div className={`font-['Comic_Sans_MS'] text-2xl md:text-3xl font-bold mb-6 transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>Let Your Words Shine</div>

                        <p className={`font-inter text-darkGray  text-lg mb-8 max-w-2xl transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                            Master the art of spelling and shine with confidence, success, and incredible prizes!
                        </p>

                        <div className={` font-['Comic_Sans_MS'] flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                            <a href="/instructions">
                                <button className="bg-yellow-400 hover:bg-accentOrange text-black px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-slow">Register Now</button>
                            </a>
                            <a href="/about" className="group flex items-center gap-2 font-['Comic_Sans_MS'] text-text-darkGray hover:text-gray-800 cursor-pointer transition-colors duration-300">
                                <span>Learn the buzz</span>
                                <Image src={Arrow} alt="Arrow" width={24} height={24} className="transform transition-transform duration-300 group-hover:translate-x-2" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className={`w-full lg:w-1/2 relative transition-all duration-700 delay-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                    <div className="relative w-full aspect-square">
                        <div className="hidden lg:block md:block  ">
                            <div className=' flex gap-[500px] '>
                                <div className=" block md:hidden lg:block">
                                    <div className='flex justify-center w-fit mx-auto'>
                                        <div>
                                            <Image
                                                src={Ellipse5}
                                                alt=""
                                                className="mt-0 animate-spin-slow hover:animate-spin"
                                            />
                                        </div>
                                        <div className="-ml-2">
                                            <Image
                                                src={Ellipse1}
                                                alt=""
                                                className="mt-1/4 animate-spin-reverse-slow hover:animate-bounce"
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div className='mb-[-50px] block md:hidden lg:block'>
                                    <Image src={Ellipse4} alt="" className="mb-1/4 ml-1/3 animate-spin-slower hover:animate-pulse" />
                                    <Image src={Ellipse6} alt="" className=" mb-1/3 mr-1/3 animate-spin-reverse-slower hover:scale-110 transition-transform" />
                                </div>
                            </div>
                            <div className="relative w-full h-full animate-float">
                                <Image src={HomeImg} alt="Home" width={500} height={500} className="w-full h-full object-contain z-10 relative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden gap-[10px] md:flex mt-[-120px] lg:gap-[200px]  md:gap-[10px] items-center space-y-4 md:space-y-8 flex-wrap">


                {/* Top Section */}
                <div className="relative flex ml-6 items-center">
                    <div className="relative w-28 h-28 md:w-36 md:h-36 animate-spin-slow">
                        <Image src={Ellipse6} alt="Ellipse6" className="" />
                    </div>

                    <div className="relative flex-col items-center justify-center mt-[-130px] ml-[-60px] space-x-3 md:space-x-6">
                        <div className="w-16 h-16 md:w-24 md:h-24 -rotate-90 ml-[25px] ">
                            <Image src={Ellipse2} alt="Ellipse2" className=" " />

                        </div>
                        <div className="w-20 h-20 md:w-28 md:h-28 animate-pulse -rotate-90 mt-[-82px] ">
                            <Image src={Ellipse3} alt="Ellipse3" className="" />
                        </div>


                    </div>

                </div>

                {/* Middle Section */}
                <div className="flex  items-center space-y-10">
                    <div className="w-16 h-16 md:w-24 md:h-24  animate-wave ">
                        <Image src={crulArrow} alt="Arrow" className="w-full h-full" />
                    </div>


                    {/* Text Section */}
                    <div className='flex gap-6 '>

                        <div className='text-2xl flex gap-6 pt-6 mt-[-100px] animate-bounce '>
                            <div className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 '>B</div>
                            <span className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 mt-4 '>E</span>
                            <div className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 '>A</div>
                            <span className=' text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 mt-4'>_</span>
                            <div className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 '>T</div>
                            <span className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 mt-4 '>_</span>
                            <div className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 '>F</div>
                            <span className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2  mt-4 '>Y</span>

                        </div>
                    </div>

                </div>
            </div>

            <div className="relative flex justify-start items-center w-full">
                <div className="hidden sm:flex sm:ml-[-85px] w-[200px] h-[70px] sm:w-[180px] sm:h-[65px] md:w-[220px] md:h-[75px] md:ml-[-105px] 
                  lg:w-[250px] lg:h-[85px] lg:ml-[-120px] xl:w-[280px] xl:ml-[-130px] xl:h-[95px] 2xl:w-[300px] 2xl:h-[100px] 2xl:ml-[-130px]
                  transform rotate-[180deg] scale-x-[-1] 
                  animate-floating transition-all duration-500 ease-in-out">
                    <Image src={polygon1} alt="Polygon Shape" className="w-full h-full object-contain" />
                </div>
            </div>
            {/* Home Page Section 2 */}
          
            <HomeStardom/>
            <HomeRegSection/>
          
            







        </div>
    );
};

export default HomeSection;

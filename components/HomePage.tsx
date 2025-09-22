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
    // States for controlling animations
    const [isLoaded, setIsLoaded] = useState(false);
    const [animationsReady, setAnimationsReady] = useState(false);
    const [showSticker, setShowSticker] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        // Set loaded state first
        setIsLoaded(true);
        
        // Delay animations to prevent hydration mismatch
        const timer = setTimeout(() => {
            setAnimationsReady(true);
        }, 100); // Short delay after component mounts

        // Show sticker after a short delay
        const stickerTimer = setTimeout(() => {
            setShowSticker(true);
        }, 2000);
        
        return () => {
            clearTimeout(timer);
            clearTimeout(stickerTimer);
        };
    }, []);

    const handleCloseSticker = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShowSticker(false);
            setIsClosing(false);
        }, 300);
    };

    const handleStickerClick = () => {
        window.location.href = '/blog';
    };

    // Custom animation classes that only apply after hydration
    const fadeInClass = animationsReady ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0";
    const fadeInLeftClass = animationsReady ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10";
    const fadeInRightClass = animationsReady ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10";
    const fadeInUpClass = animationsReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";

    return (
        <div className="min-h-screen w-full bg-white overflow-hidden relative">
            {/* Disturbing Sticker Button */}
            {showSticker && (
                <div className={`fixed z-50 ${isClosing ? 'animate-bounce-out' : 'animate-bounce-in'} ${animationsReady ? 'animate-wiggle animate-pulse' : ''}`} 
                     style={{ 
                         top: '40%', 
                         right: '20px', 
                         transform: 'translateY(-50%)',
                         cursor: 'pointer'
                     }}>
                    <div 
                        className="relative group"
                        onClick={handleStickerClick}
                    >
                        {/* Main Sticker */}
                        <div className="relative bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-1 rounded-full shadow-2xl border-4 border-white animate-pulse">
                            <div className="bg-yellow-300 rounded-full p-4 w-24 h-24 flex items-center justify-center text-center">
                                <span className="font-comic font-bold text-lg text-black leading-tight">
                                    READ OUR<br/>BLOG!<br/>
                                    <span className="text-sm">📝✨</span>
                                </span>
                            </div>
                            
                            {/* Sparkle effects */}
                            <div className="absolute -top-2 -left-2 text-2xl animate-spin">✨</div>
                            <div className="absolute -bottom-2 -right-2 text-2xl animate-bounce">🌟</div>
                            <div className="absolute -top-2 -right-2 text-xl animate-ping">💫</div>
                        </div>
                        
                        {/* Close button */}
                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCloseSticker();
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold hover:bg-red-600 transition-colors border-2 border-white shadow-lg"
                        >
                            ×
                        </button>
                        
                        {/* Pointer arrow */}
                        {/* <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 text-3xl animate-bounce">👉</div> */}
                    </div>
                    
                    {/* Floating text */}
                    {/* <div className="absolute -left-40 top-1/2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg whitespace-nowrap font-comic font-bold text-sm animate-pulse">
                        Click me! 🚀
                    </div> */}
                </div>
            )}

            <div className={`container mx-auto px-4 py-8 md:py-16 flex flex-col lg:flex-row items-center justify-between transition-all duration-700 ${isLoaded ? fadeInClass : "opacity-0"}`}>
                {/* Left Section */}
                <div className="w-full lg:w-1/2 relative mb-12 lg:mb-0 transition-all duration-500 lg:mt-[-120px]">
                    <div className={`relative w-full max-w-[300px] mx-auto ml-[220px] transition-all duration-700 delay-300 ${animationsReady ? "animate-float" : ""}`}>
                        <Image
                            src={beeImage}
                            alt="Bee"
                            className={`object-contain transition-transform duration-300 ${animationsReady ? "hover:scale-105" : ""}`}
                        />
                    </div>

                    <div className="mt-4 lg:mt-6 text-center lg:text-left">
                        <div className={`flex flex-wrap justify-center font-['Comic_Sans_MS'] lg:justify-start items-center gap-2 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 ${fadeInLeftClass}`}>
                            <div className={`text-accentOrange transition-transform duration-300 ${animationsReady ? "hover:scale-110 " : ""}`}>Buzz</div>
                            <div className="transition-transform hover:rotate-3 pl-3 pr-3">Into</div>
                            <div className={`text-[#59C5F3] transition-transform duration-300 ${animationsReady ? "hover:scale-110 " : ""}`}>Brilliance:</div>
                        </div>

                        <div className={`font-['Comic_Sans_MS'] text-2xl md:text-3xl font-bold mb-6 transition-all duration-700 delay-300 ${fadeInUpClass}`}>
                            Let Your Words Shine
                        </div>

                        <p className={`font-inter text-darkGray text-lg mb-8 max-w-2xl transition-all duration-700 delay-500 ${fadeInUpClass}`}>
                            Master the art of spelling and shine with confidence, success, and incredible prizes!
                        </p>

                        <div className={`font-['Comic_Sans_MS'] flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-700 ${fadeInUpClass}`}>
                            <a href="/instructions">
                                <button className={`bg-yellow-400 hover:bg-accentOrange text-black px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${animationsReady ? "animate-pulse-slow" : ""}`}>
                                    Register Now
                                </button>
                            </a>
                            <a href="/about" className="group flex items-center gap-2 font-['Comic_Sans_MS'] text-text-darkGray hover:text-gray-800 cursor-pointer transition-colors duration-300">
                                <span>Learn the buzz</span>
                                <Image 
                                    src={Arrow} 
                                    alt="Arrow" 
                                    width={24} 
                                    height={24} 
                                    className={`transform transition-transform duration-300 ${animationsReady ? "group-hover:translate-x-2" : ""}`} 
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className={`w-full lg:w-1/2 relative transition-all duration-700 delay-1000 ${fadeInRightClass}`}>
                    <div className="relative w-full aspect-square">
                        <div className="hidden lg:block md:block">
                            <div className='flex gap-[500px]'>
                                <div className="block md:hidden lg:block">
                                    <div className='flex justify-center w-fit mx-auto'>
                                        <div>
                                            <Image
                                                src={Ellipse5}
                                                alt=""
                                                className={`mt-0 ${animationsReady ? "animate-spin-slow hover:animate-spin" : ""}`}
                                            />
                                        </div>
                                        <div className="-ml-2">
                                            <Image
                                                src={Ellipse1}
                                                alt=""
                                                className={`mt-1/4 ${animationsReady ? "animate-spin-reverse-slow hover:animate-bounce" : ""}`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-[-50px] block md:hidden lg:block'>
                                    <Image 
                                        src={Ellipse4} 
                                        alt="" 
                                        className={`mb-1/4 ml-1/3 ${animationsReady ? "animate-spin-slower hover:animate-pulse" : ""}`} 
                                    />
                                    <Image 
                                        src={Ellipse6} 
                                        alt="" 
                                        className={`mb-1/3 mr-1/3 ${animationsReady ? "animate-spin-reverse-slower hover:scale-110" : ""} transition-transform`} 
                                    />
                                </div>
                            </div>
                            <div className={`relative w-full h-full ${animationsReady ? "animate-float" : ""}`}>
                                <Image 
                                    src={HomeImg} 
                                    alt="Home" 
                                    width={500} 
                                    height={500} 
                                    className="w-full h-full object-contain z-10 relative" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden gap-[10px] md:flex mt-[-120px] lg:gap-[200px] md:gap-[10px] items-center space-y-4 md:space-y-8 flex-wrap">
                {/* Top Section */}
                <div className="relative flex ml-6 items-center">
                    <div className={`relative w-28 h-28 md:w-36 md:h-36 ${animationsReady ? "animate-spin-slow" : ""}`}>
                        <Image src={Ellipse6} alt="Ellipse6" />
                    </div>

                    <div className="relative flex-col items-center justify-center mt-[-130px] ml-[-60px] space-x-3 md:space-x-6">
                        <div className="w-16 h-16 md:w-24 md:h-24 -rotate-90 ml-[25px]">
                            <Image src={Ellipse2} alt="Ellipse2" />
                        </div>
                        <div className={`w-20 h-20 md:w-28 md:h-28 -rotate-90 mt-[-82px] ${animationsReady ? "animate-pulse" : ""}`}>
                            <Image src={Ellipse3} alt="Ellipse3" />
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="flex items-center space-y-10">
                    <div className={`w-16 h-16 md:w-24 md:h-24 ${animationsReady ? "animate-wave" : ""}`}>
                        <Image src={crulArrow} alt="Arrow" className="w-full h-full" />
                    </div>

                    {/* Text Section */}
                    <div className='flex gap-6'>
                        <div className={`text-2xl flex gap-6 pt-6 mt-[-100px] ${animationsReady ? "animate-bounce" : ""}`}>
                            <div className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2'>B</div>
                            <span className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 mt-4'>E</span>
                            <div className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2'>A</div>
                            <span className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 mt-4'>_</span>
                            <div className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2'>T</div>
                            <span className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 mt-4'>_</span>
                            <div className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2'>F</div>
                            <span className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 mt-4'>Y</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-start items-center w-full">
                <div className={`hidden sm:flex sm:ml-[-85px] w-[200px] h-[70px] sm:w-[180px] sm:h-[65px] md:w-[220px] md:h-[75px] md:ml-[-105px] 
                  lg:w-[250px] lg:h-[85px] lg:ml-[-120px] xl:w-[280px] xl:ml-[-130px] xl:h-[95px] 2xl:w-[300px] 2xl:h-[100px] 2xl:ml-[-130px]
                  transform rotate-[180deg] scale-x-[-1] 
                  ${animationsReady ? "animate-floating" : ""} transition-all duration-500 ease-in-out`}>
                    <Image src={polygon1} alt="Polygon Shape" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Home Page Section 2 */}
            <HomeStardom />
            <HomeRegSection />

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes bounce-in {
                    0% { transform: translateY(-50%) scale(0.3) rotate(-30deg); opacity: 0; }
                    50% { transform: translateY(-50%) scale(1.1) rotate(10deg); }
                    100% { transform: translateY(-50%) scale(1) rotate(0deg); opacity: 1; }
                }
                
                @keyframes bounce-out {
                    0% { transform: translateY(-50%) scale(1) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(-50%) scale(0.3) rotate(30deg); opacity: 0; }
                }
                
                @keyframes wiggle {
                    0%, 7% { transform: translateY(-50%) rotate(0deg); }
                    15% { transform: translateY(-50%) rotate(-5deg); }
                    20% { transform: translateY(-50%) rotate(5deg); }
                    25% { transform: translateY(-50%) rotate(-3deg); }
                    30% { transform: translateY(-50%) rotate(2deg); }
                    35% { transform: translateY(-50%) rotate(0deg); }
                    100% { transform: translateY(-50%) rotate(0deg); }
                }
                
                .animate-bounce-in {
                    animation: bounce-in 0.8s ease-out forwards;
                }
                
                .animate-bounce-out {
                    animation: bounce-out 0.3s ease-in forwards;
                }
                
                .animate-wiggle {
                    animation: wiggle 20s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default HomeSection;
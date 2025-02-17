
"use client"
import React from 'react';

function Categories() {
    return (
        <section className="relative w-ful min-h-screen lg:h-[1100px] bg-[#59C5F3] mt-[4071px]  lg:left-0 lg:top-[4071px] lg:w-[1440px]">
            <h1 className=" flex text-start absoulte px-6 gap-5 w-full md:w-[905px] min-h-[89px] left-1/2 translate-x-1/2 md:ml-[calc(50%-905px/2-189.5px)] top-[100px] font-['Comic_Sans_MS'] font-bold text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[49px] tracking-[0.28em] text-[#1C1B17]">
                Category <div> &</div>
                <div className='flex'>
                    <div className='text-[#FEF506]'>P</div>
                    <div className='text-[#EB8733]'>r</div>
                    <div className='text-[#FFFFFA]'>i</div>
                    <div className='text-[#FEF506]'>z</div>
                    <div className='text-[#EB8733]'>e</div>
                    <div className='text-[#1C1B17]'>s</div>
                </div>
            </h1>
            <div className=' flex flex-col md:flex-row  items-end w-full px-4 md:px-0 md:w-[1308px] min-h-[753px] gap-6 md:gap-12 left-0 md:left-[77px] top-[267px] mx-auto transition-all duration-300'>
                <div className="w-full font-['Comic_Sans_MS'] md:w-[402px] h-screen md:h-[753px] bg-yellow-300 rounded-lg flex-none order-0">

                    <h2 className="w-full px-4 md:w-[244px] ml-1/2 -translate-x-1/2 md:-translate-x-[156px] mt-4 md:mt-8 font-bold text-2xl md:text-3xl lg:text-[40px] leading-[122%] text-gray-900 text-center md:text-left">Competition Categories</h2>
                    <ul className="absolute left-[45px] top-[184px] w-[312px] h-[469px] text-blue-900 font-istok font-normal text-2xl leading-[40px] sm:text-xl sm:leading-[36px] md:text-2xl md:leading-[40px] lg:text-3xl lg:leading-[42px] xl:text-4xl xl:leading-[44px]">
                        <li>  Early Spellers (Primary 1–2) <br /></li>
                        <li> Upper Primary (Primary 3–5) <br /></li>
                        <li>Junior Secondary (JSS 1–3) <br /></li>
                        <li>Senior Secondary (SS 1–3)</li>
                    </ul>

                </div>
                <div className="w-full md:w-96 lg:w-[410px] h-[600px] bg-yellow-300 rounded-lg flex-none order-1">
                    <h2 className="absolute w-full md:w-[220px] left-1/2 md:-translate-x-[156px] top-8 md:top-[35px] font-bold text-2xl md:text-3xl lg:text-[40px] leading-[122%] text-gray-900 text-center md:text-left">For Winners</h2>
                    <ul className="absolute left-[49px] top-[172px] w-[286px] h-[406px] text-blue-900 font-istok font-normal text-2xl leading-[40px] sm:text-xl sm:leading-[36px] md:text-2xl md:leading-[40px] lg:text-3xl lg:leading-[42px] xl:text-4xl xl:leading-[44px]">
                        <li>1st: ₦1,000,000</li>
                        <li>2nd: ₦500,000</li>
                        <li>3rd: ₦300,000</li>
                        <li>4th: ₦150,000</li>
                        <li>5th: ₦100,000</li>
                    </ul>

                </div>
                <div className="w-full md:w-96 lg:w-[402px] h-[440px] bg-yellow-300 rounded-lg flex-none order-2">
                    <h2 className="absolute w-[220px] h-[104px] left-1/2 -translate-x-1/2 top-[31px] font-bold text-4xl leading-[49px] text-[#1C1B17] sm:text-3xl sm:top-[20px] md:text-2xl md:top-[15px]">For Coaches </h2>
                    <ul className="absolute left-[45px] top-[186px] w-[286px] h-[206px] text-blue-900 font-istok font-normal text-2xl leading-[40px] sm:text-xl sm:leading-[36px] md:text-2xl md:leading-[40px] lg:text-3xl lg:leading-[42px] xl:text-4xl xl:leading-[44px]">
                        <li>1st: ₦100,000</li>
                        <li>2nd: ₦50,000</li>
                        <li>3rd: ₦30,000</li>
                    </ul>

                </div>

            </div>

        </section>
    );
};

export default Categories;
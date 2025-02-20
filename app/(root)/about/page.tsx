"use client"

import Image from 'next/image'
import { useState } from 'react'
import Img1 from '../../../public/Svgs/aboutImg1.svg'
import Rect from '../../../public/Svgs/about_square.svg'
import moon from '../../../public/Svgs/aboutHalfMoon.svg'
import MissionTag from '@assets/svg/missionTag.svg'
import line from '@assets/svg/line 83.svg'
import beeImage from '@assets/img/beeImage.png'
import text from '@assets/svg/text.svg'
import ball from '@assets/svg/Ball.svg'
import strike from '@assets/svg/vector 5.svg'
import vector from '@assets/svg/vector 12.svg'

import stake from '@assets/svg/Vector 2516.svg'
import FAQPage from '../faq/page'

//Components
import CategoryAndPrizes from '../../../components/About/CategoryAndPrizes'
import AboutSection from '../../../components/About/AboutSection'
import KeyStakeHolders from '../../../components/About/KeyStakeHolders'
import MissionAndVission from '../../../components/About/MissionAndVission'


function About() {
    return (
        <>
            <div className=' min-h-screen w-full md:w-full'>
                <div className='max-w-7xl mx-auto px-4 py-8 md:px-8 md:ml-0 sm:ml-1' >
                    <div className='flex lg:flex-row items-center gap-20'>
                        <div className='w-full h-full '>
                            <div className='hidden lg:block lg:w-[24.71px] lg:h-[24.71px] lg:ml-[455px] lg:mt-[100px] lg:mb-4 '><Image src={Rect} alt='image' /></div>
                            <div className=" font-['Comic_Sans_MS'] flex flex-col items-center gap-3.5 w-full max-w-[570px] min-h-[443px] mx-4 md:mx-auto md:left-[122px] md:top-[338px] p-4 md:p-0 md:max-w-[1000px] sm:p-0 sm:text-center sm:m-0">
                                <h1 className=" w-full max-w-[530px] min-h-[78px] font-bold text-3xl md:text-4xl lg:text-[44px] leading-tight md:leading-[61px] text-center text-accentOrange self-stretch sm:p-0 sm:text-center sm:m-0">Sir John’s <span className='text-heroBlue'>Spelling</span> Bee</h1>

                                <p className=" mb-4 self-stretch text-xl md:text-2xl lg:text-[28px] md:text-start text-defaultColor sm:p-0 sm:text-start sm:m-0">The Sir John’s Spelling Bee (SJS Bee) is a national competition supported by Sir John’s Foundation and an annual competition designed for pupils and students – ages five (5) to seventeen (17) to inculcate the basic aspects of effective communication, ultimately imparting improved spelling skills, development of poise, increase learners’ vocabulary, pronunciation and accurate word usage.
                                    SJS Bee is organized nationally and begins at state level with each participating state at a time where only the strongest spellers from their respective state level competition will earn a place to participate in the national finals for the ultimate prize.
                                    Individual schools from various states have an opportunity to host their state level competition where schools in such states shall converge for the competition.</p>

                            </div>


                            <div className='hidden lg:block lg:w-[58px] lg:h-[58px] lg:ml-[124px] lg:mt-4'><Image src={moon} alt='image' /></div>

                        </div>
                        <div className='hidden mr-[-6rem] lg:mt-[-15.5rem] lg:block lg:w-full lg:h-full lg:left-[739px] lg:top-[133px] md:max-w-full md:mt-[-15.5rem]'>


                            <Image src={Img1} alt='School Image' className=" w-full h-[739px]  h-full" />

                        </div>
                    </div>

                </div>




            </div>
            <MissionAndVission/>
            <AboutSection/>
            <KeyStakeHolders/>

            <CategoryAndPrizes/>


        </>
        

    )
}

export default About


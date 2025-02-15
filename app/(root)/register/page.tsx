"use client"

import { use } from "react";

//Components
import FirstForm from '../../../components/Registration/FirstForm';
import SecondForm from '../../../components/Registration/SecondForm';

//Images and Icons
import Image from 'next/image';
import regImg from '../../../public/Svgs/Auth_image1.svg';
import regImg1 from '../../../public/Svgs/Auth_img2.svg';
import logo from '../../../public/Svgs/Auth_logo.svg';
import strike from '../../../public/Svgs/Auth_strike.svg';

const Page = (props: any) => {

  const searchParams: any = use(props.searchParams)
  const page = parseInt(searchParams.page ?? "1");

  return (
    <main className='flex'>
      <section className="hidden lg:block rounded-tr-[50px] rounded-br-[50px] w-full lg:w-[40%] h-dvh">
        {page === 1 ?
          <Image src={regImg} alt='Registration Image' className='rounded-tr-[50px] rounded-br-[50px] w-full h-dvh object-cover' />
          : page === 2 ?
            <Image src={regImg1} alt='Registration Image' className='rounded-tr-[50px] rounded-br-[50px] w-full h-dvh object-cover' />
            :
            <Image src={regImg} alt='Registration Image' className='rounded-tr-[50px] rounded-br-[50px] w-full h-dvh object-cover' />
        }
      </section>
      <section className='px-4 py-10 w-full lg:w-[60%]'>
        <div className='flex justify-center items-center'>
          <h1 className='font-comic font-bold text-textBlack text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Welcome!</h1>
          <div className='relative -ml-4'>
            <Image src={logo} alt='Bee Logo' className='size-16 md:size-20 xl:size-24' />
            <Image src={strike} alt="scribble" className='left-1/2 absolute -mt-2 md:-mt-3 xl:-mt-4 -translate-x-1/2 transform' />
          </div>
        </div>
        <p className='font-inter text-textBlack text-lg md:text-xl lg:text-2xl xl:text-3xl text-center'>Register your Speller here</p>
        {page === 1 ? <FirstForm />
          : page === 2 ? <SecondForm />
            : <FirstForm />
        }
      </section>
    </main>
  );
}

export default Page;
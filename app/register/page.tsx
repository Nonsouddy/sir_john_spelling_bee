"use client"

import { useSearchParams } from 'next/navigation';

//Components
import FirstForm from '../Components/Registeration/FirstForm';
import SecondForm from '../Components/Registeration/SecondForm';

//Images and Icons
import Image from 'next/image';
import regImg from '../../public/Svgs/Auth_image1.svg';
import regImg1 from '../../public/Svgs/Auth_img2.svg';
import logo from '../../public/Svgs/Auth_logo.svg';
import strike from '../../public/Svgs/Auth_strike.svg';

const page = () => {

  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');

  return (
    <main className='flex w-full h-dvh'>
      <section className="lg:block hidden rounded-tr-[50px] rounded-br-[50px] lg:w-[40%] h-full">
        {page === 1 ?
          <Image src={regImg} alt='Registration Image' className='rounded-tr-[50px] rounded-br-[50px] w-full' />
          : page === 2 ?
            <Image src={regImg1} alt='Registration Image' className='rounded-tr-[50px] rounded-br-[50px] w-full' />
            :
            <Image src={regImg} alt='Registration Image' className='rounded-tr-[50px] rounded-br-[50px] w-full' />
        }
      </section>
      <section className='px-4 py-10 w-full lg:w-[60%] h-full overflow-y-auto'>
        <div className='flex justify-center items-center'>
          <h1 className='font-bold font-comic text-2xl text-textBlack sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Welcome!</h1>
          <div className='relative -ml-4'>
            <Image src={logo} alt='Bee Logo' className='size-16 md:size-20 xl:size-24' />
            <Image src={strike} alt="scribble" className='left-1/2 absolute -mt-2 md:-mt-3 xl:-mt-4 transform -translate-x-1/2' />
          </div>
        </div>
        <p className='font-inter text-center text-lg text-textBlack md:text-xl lg:text-2xl xl:text-3xl'>Register your pupils here</p>
        {page === 1 ? <FirstForm />
          : page === 2 ? <SecondForm />
            : <FirstForm />
        }
      </section>
    </main>
  );
}

export default page;
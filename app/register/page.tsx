"use client"

import { useSearchParams, useRouter } from 'next/navigation';

//Components
import FirstForm from '../Components/FirstForm';

//Images and Icons
import Image from 'next/image';
import regImg from '../../public/Svgs/Auth_image1.svg';

const page = () => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');

  //Functions
  const updatePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    // Push the new URL with updated query parameters
    router.push(`?${params.toString()}`);
  };


  return (
    <main className='fixed flex w-full h-dvh'>
      <section className="lg:block hidden rounded-tr-[50px] rounded-br-[50px] lg:w-[40%] h-full">
        <Image src={regImg} alt='Registration Image' className='rounded-tr-[50px] rounded-br-[50px] w-full object-cover' />
      </section>
      <section className='px-4 py-10 w-full lg:w-[60%] h-full overflow-y-auto'>
        <FirstForm />
      </section>
    </main>
  );
}

export default page;
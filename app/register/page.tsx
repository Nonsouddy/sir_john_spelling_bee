"use client"

import { useSearchParams } from 'next/navigation';

//Components
import FirstForm from '../Components/FirstForm';
import SecondForm from '../Components/SecondForm';

//Images and Icons
import Image from 'next/image';
import regImg from '../../public/Svgs/Auth_image1.svg';
import regImg1 from '../../public/Svgs/Auth_img2.svg';

const page = () => {

  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');

  return (
    <main className='flex w-full h-dvh'>
      <section className="lg:block hidden rounded-tr-[50px] rounded-br-[50px] lg:w-[40%] h-full">
        {page === 1 ?
          <Image src={regImg} alt='Registration Image' className='rounded-tr-[50px] rounded-br-[50px] w-full object-cover' />
          : page === 2 ?
            <Image src={regImg1} alt='Registration Image' className='rounded-tr-[50px] rounded-br-[50px] w-full object-cover' />
            :
            <Image src={regImg} alt='Registration Image' className='rounded-tr-[50px] rounded-br-[50px] w-full object-cover' />
        }
      </section>
      <section className='px-4 py-10 w-full lg:w-[60%] h-full overflow-y-auto'>
        {page === 1 ? <FirstForm />
          : page === 2 ? <SecondForm />
            : <FirstForm />
        }
      </section>
    </main>
  );
}

export default page;
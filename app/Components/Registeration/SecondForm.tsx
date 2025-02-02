import { useSearchParams, useRouter } from 'next/navigation';

//Components
import Button from "../Button";
import Input from "../Input";

//Icons
import { Back } from 'iconsax-react';

const SecondForm = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    //Functions
    const updatePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', newPage.toString());
        // Push the new URL with updated query parameters
        router.push(`?${params.toString()}`);
    };

    return (
        <main className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
            <p className="my-8 font-inter font-semibold text-base sm:text-lg md:text-xl xl:text-2xl">School Information</p>
            <form action="" className="flex flex-col gap-y-5">
                <Input type='text' placeholder='Enter school name' label='Name of School' id='schoolName' autoComplete='off' required />
                <div className='flex justify-between gap-x-2 md:gap-x-3 xl:gap-x-5'>
                    <div className='w-[50%]'>
                        <Input type='text' placeholder='Enter address' label='Location' id='address' autoComplete='off' widthClass='w-full' required />
                    </div>
                    <div className='w-[50%]'>
                        <Input type='tel' placeholder='000 000 0000' label='Phone Number' id='schoolPhoneNumber' autoComplete='off' widthClass='w-full' required />
                    </div>
                </div>
                <p className="my-4 font-inter font-semibold text-base sm:text-lg md:text-xl xl:text-2xl">Coach/Tutor’s Information</p>
                <Input type='text' placeholder='Enter name' label='Full Name' id='tutorFullName' autoComplete='off' required />
                <Input type='tel' placeholder='000 000 0000' label='Phone Number' id='tutorPhoneNumber' autoComplete='off' widthClass='w-full' required />
                <Button type="submit" text="Register" loading={false} />
            </form>
            <div onClick={() => updatePage(1)} className='flex justify-end items-center cursor-pointer'>Go Back <Back color='#EB8733' className='size-6' variant='Bold' /></div>
        </main>
    );
}

export default SecondForm;
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';


//Components
import Input from './Input';
import Button from './Button';

//Images
import logo from '../../public/Svgs/Auth_logo.svg';
import strike from '../../public/Svgs/Auth_strike.svg';

// Predefined options for dropdowns
const CLASS_OPTIONS = [
    { class: 'elementary 1' },
    { class: 'elementary 2' },
    { class: 'elementary 3' },
    { class: 'elementary 4' },
    { class: 'elementary 5' },
    { class: 'elementary 6' },
    { class: 'jss 1' },
    { class: 'jss 2' },
    { class: 'jss 3' },
    { class: 'ss1 1' },
    { class: 'ss1 2' },
    { class: 'ss1 3 ' },
];

const CATEGORY_OPTIONS = [
    { category: 'early speller (primary 1 & 2)' },
    { category: 'upper primary (primary 3 - 6)' },
    { category: 'junior secondary (jss 1 - 3)' },
    { category: 'senior secondary (sss 1 -3)' },
];

const FirstForm = () => {

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
        <main>
            <div className='flex justify-center items-center'>
                <h1 className='font-bold font-comic text-2xl text-textBlack sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>Welcome!</h1>
                <div className='relative -ml-4'>
                    <Image src={logo} alt='Bee Logo' className='size-16 md:size-20 xl:size-24' />
                    <Image src={strike} alt="scribble" className='left-1/2 absolute -mt-2 md:-mt-3 xl:-mt-4 transform -translate-x-1/2' />
                </div>
            </div>
            <p className='font-inter text-center text-lg text-textBlack md:text-xl lg:text-2xl xl:text-3xl'>Register your pupils here</p>
            <form action="" className='flex flex-col gap-y-5 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-10'>
                <Input type='text' placeholder='First, Middle, Last Name' label='Full Name' id='fullName' autoComplete='off' required />
                <div className='flex justify-between gap-x-2 md:gap-x-3 xl:gap-x-5'>
                    <div className='w-[50%]'>
                        <Input type='email' placeholder='Enter email address' label='Email' id='email' autoComplete='off' widthClass='w-full' required />
                    </div>
                    <div className='w-[50%]'>
                        <Input type='tel' placeholder='000 000 0000' label='Phone Number' id='fullName' autoComplete='off' widthClass='w-full' required />
                    </div>
                </div>
                <div className='flex justify-between items-center gap-x-2 md:gap-x-3 xl:gap-x-5'>
                    <div className='w-[50%]'>
                        <div className='flex flex-col gap-y-1 font-inter'>
                            <label className="font-semibold text-textBlack cursor-pointer" htmlFor="gender">
                                Gender
                                <span className="text-red-500">*</span>
                            </label>
                            <select name="gender" id="gender" className="border-[#6E6E5E] focus:border-0 px-2 xl:px-4 py-3 border rounded-[10px] duration-300 focus:outline-accentOrange focus:outline">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <Input type='date' label='Date of Birth' id='dateOfBirth' autoComplete='off' widthClass='w-full' required />
                    </div>
                </div>
                <div className='flex flex-col gap-y-1 font-inter'>
                    <label className="font-semibold text-textBlack cursor-pointer" htmlFor="class">
                        Class
                        <span className="text-red-500">*</span>
                    </label>
                    <select name="class" id="class" className="border-[#6E6E5E] focus:border-0 px-2 xl:px-4 py-3 border rounded-[10px] duration-300 focus:outline-accentOrange focus:outline capitalize">
                        {CLASS_OPTIONS.map((classes) => (
                            <option key={classes.class} value={classes.class}>{classes.class}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-y-1 font-inter'>
                    <label className="font-semibold text-textBlack cursor-pointer" htmlFor="category">
                        Category
                        <span className="text-red-500">*</span>
                    </label>
                    <select name="class" id="class" className="border-[#6E6E5E] focus:border-0 px-2 xl:px-4 py-3 border rounded-[10px] duration-300 focus:outline-accentOrange focus:outline capitalize">
                        {CATEGORY_OPTIONS.map((category) => (
                            <option key={category.category} value={category.category}>{category.category}</option>
                        ))}
                    </select>
                </div>
                <Button type="button" text="Next" loading={false} onClick={() => updatePage(2)} />
            </form>
        </main>
    );
}

export default FirstForm;
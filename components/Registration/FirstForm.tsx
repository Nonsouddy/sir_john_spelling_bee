import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';

//Stores
import { useStudentFormStore } from '@/stores/useStudentForm';

//Components
import Input from '../Input';
import Button from '../Button';

// Predefined options for dropdowns
const CLASS_OPTIONS = [
    { class: 'primary 1' },
    { class: 'primary 2' },
    { class: 'primary 3' },
    { class: 'primary 4' },
    { class: 'primary 5' },
    { class: 'primary 6' },
    { class: 'jss 1' },
    { class: 'jss 2' },
    { class: 'jss 3' },
    { class: 'ss 1' },
    { class: 'ss 2' },
    { class: 'ss 3' },
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
    const { data, updateField } = useStudentFormStore();

    //Functions
    const updatePage = (newPage: number) => {

        if (!data.studentFullName || !data.studentEmail || !data.studentPhoneNumber || !data.gender || !data.studentDateOfBirth || !data.studentClass || !data.category) {
            toast.warning("Please fill in all fields before proceeding.");
            return;
        }
        const params = new URLSearchParams(searchParams);
        params.set('page', newPage.toString());
        // Push the new URL with updated query parameters
        router.push(`?${params.toString()}`);
    };

    return (
        <main className='font-inter'>
            <form action="" className='flex flex-col gap-y-5 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-10'>
                <Input type='text' placeholder='First, Middle, Last Name' label='Full Name' id='fullName' autoComplete='off' required value={data.studentFullName}
                    onChange={(e) => updateField("studentFullName", e.target.value)} />
                <div className='flex justify-between gap-x-2 md:gap-x-3 xl:gap-x-5'>
                    <div className='w-[50%]'>
                        <Input type='email' placeholder='Enter email address' label='Email' id='email' autoComplete='off' widthClass='w-full' required value={data.studentEmail}
                            onChange={(e) => updateField("studentEmail", e.target.value)} />
                    </div>
                    <div className='w-[50%]'>
                        <Input type='tel' placeholder='000 000 0000' label='Phone Number' id='fullName' autoComplete='off' widthClass='w-full' required value={data.studentPhoneNumber}
                            onChange={(e) => updateField("studentPhoneNumber", e.target.value)} />
                    </div>
                </div>
                <div className='flex justify-between items-center gap-x-2 md:gap-x-3 xl:gap-x-5'>
                    <div className='w-[50%]'>
                        <div className='flex flex-col gap-y-2'>
                            <label className="font-semibold cursor-pointer" htmlFor="gender">
                                Gender
                                <span className="text-red-500">*</span>
                            </label>
                            <select name="gender" id="gender" className="border-[#6E6E5E] focus:border-0 bg-inherit px-2 xl:px-4 py-3 border rounded-[10px] duration-300 focus:outline-accentOrange focus:outline" value={data.gender}
                                onChange={(e) => updateField("gender", e.target.value)} >
                                <option value="">Select Your Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <Input type='date' label='Date of Birth' id='dateOfBirth' autoComplete='off' widthClass='w-full' required value={data.studentDateOfBirth}
                            onChange={(e) => updateField("studentDateOfBirth", e.target.value)} />
                    </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label className="font-semibold cursor-pointer" htmlFor="class">
                        Class
                        <span className="text-red-500">*</span>
                    </label>
                    <select name="class" id="class" className="border-[#6E6E5E] focus:border-0 bg-inherit px-2 xl:px-4 py-3 border rounded-[10px] duration-300 focus:outline-accentOrange focus:outline uppercase" value={data.studentClass}
                        onChange={(e) => updateField("studentClass", e.target.value)} >
                        <option value="">Select Your Class</option>
                        {CLASS_OPTIONS.map((classes) => (
                            <option key={classes.class} value={classes.class}>{classes.class}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label className="font-semibold cursor-pointer" htmlFor="category">
                        Category
                        <span className="text-red-500">*</span>
                    </label>
                    <select name="category" id="category" className="border-[#6E6E5E] focus:border-0 bg-inherit px-2 xl:px-4 py-3 border rounded-[10px] duration-300 focus:outline-accentOrange focus:outline uppercase" value={data.category}
                        onChange={(e) => updateField("category", e.target.value)}>
                        <option value="">Select Your Category</option>
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
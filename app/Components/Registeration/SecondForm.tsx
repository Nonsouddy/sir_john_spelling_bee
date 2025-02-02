import { useSearchParams, useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';

//Stores and Hooks
import { useStudentFormStore } from '@/stores/useStudentForm';
import { useStudentRegistration } from '@/services/mutations.service';

//Components
import Button from "../Button";
import Input from "../Input";

//Icons
import { Back } from 'iconsax-react';
import { toast } from 'sonner';

const SecondForm = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const { data, updateField, resetForm } = useStudentFormStore();


    //Functions
    const updatePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', newPage.toString());
        // Push the new URL with updated query parameters
        router.push(`?${params.toString()}`);
    };

    // TanStack Query mutation for user authentication
    const registerStudent = useStudentRegistration();

    //OnSubmit Function
    const onSubmit: SubmitHandler<StudentFormData> = (data) => {

        registerStudent.mutate(data, {
            onSuccess: (response) => {
                
                resetForm();
            },
            onError: () => {
                toast.error("Couldn't regsiter user please try again later.");
                resetForm();
            },
        });
    };

    return (
        <main className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
            <p className="my-8 font-inter font-semibold text-base sm:text-lg md:text-xl xl:text-2xl">School Information</p>
            <form action="" className="flex flex-col gap-y-5">
                <Input type='text' placeholder='Enter school name' label='Name of School' id='schoolName' autoComplete='off' required value={data.schoolName}
                    onChange={(e) => updateField("schoolName", e.target.value)} />
                <div className='flex justify-between gap-x-2 md:gap-x-3 xl:gap-x-5'>
                    <div className='w-[50%]'>
                        <Input type='text' placeholder='Enter address' label='Location' id='address' autoComplete='off' widthClass='w-full' required value={data.schoolLocation}
                            onChange={(e) => updateField("schoolLocation", e.target.value)} />
                    </div>
                    <div className='w-[50%]'>
                        <Input type='tel' placeholder='000 000 0000' label='Phone Number' id='schoolPhoneNumber' autoComplete='off' widthClass='w-full' required value={data.schoolPhoneNumber}
                            onChange={(e) => updateField("schoolPhoneNumber", e.target.value)} />
                    </div>
                </div>
                <p className="my-4 font-inter font-semibold text-base sm:text-lg md:text-xl xl:text-2xl">Coach/Tutor’s Information</p>
                <Input type='text' placeholder='Enter name' label='Full Name' id='tutorFullName' autoComplete='off' required value={data.tutorName}
                    onChange={(e) => updateField("tutorName", e.target.value)} />
                <Input type='tel' placeholder='000 000 0000' label='Phone Number' id='tutorPhoneNumber' autoComplete='off' widthClass='w-full' required value={data.tutorPhoneNumber}
                    onChange={(e) => updateField("tutorPhoneNumber", e.target.value)} />
                <Button type="submit" text="Register" loading={false} />
            </form>
            <div onClick={() => updatePage(1)} className='flex justify-end items-center cursor-pointer'>Go Back <Back color='#EB8733' className='size-6' variant='Bold' /></div>
        </main>
    );
}

export default SecondForm;
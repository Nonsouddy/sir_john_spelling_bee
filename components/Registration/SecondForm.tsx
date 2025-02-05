"use client"

import { FormEvent, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

//Stores and Hooks
import { useStudentFormStore } from '@/stores/useStudentForm';

//Components
import Button from "../Button";
import Input from "../Input";
import RegistrationToast from '../Toast';

//Icons
import { Back } from 'iconsax-react';
import { toast } from 'sonner';
import { makeApiRequest } from '@/lib/apiUtils';

const SecondForm = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [show, setShow] = useState<boolean>(false);
    const [userId, setUserId] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const { data, updateField, resetForm } = useStudentFormStore();


    //Functions
    const toggleShow = () => setShow((prev) => !prev);

    const updatePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', newPage.toString());
        // Push the new URL with updated query parameters
        router.push(`?${params.toString()}`);
    };

    //OnSubmit Function
    const onSubmit = async (e: FormEvent) => {

        e.preventDefault()
        setLoading(true);

        if (!data.studentFullName || !data.studentEmail || !data.studentPhoneNumber || !data.gender || !data.studentDateOfBirth || !data.studentClass || !data.category || !data.schoolName || !data.schoolLocation || !data.schoolPhoneNumber || !data.tutorName || !data.tutorPhoneNumber) {
            toast.info("Incomplete student details, kindly complete the details and try again.");
            return
        }

        await makeApiRequest("/register", "post", data, {
            onSuccess: (response) => {
                setShow(true);
                setUserId(response.data.studentId);
                setLoading(false);
                resetForm();
            },
            onError: () => {
                toast.error("Couldn't register user please try again later.");
                setLoading(false);
                resetForm();
                updatePage(1);
            },
        });
    };

    return (
        <>
            {show && <RegistrationToast onClose={toggleShow} uniqueId={userId} />}
            <main className="px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10">
                <p className="my-8 font-inter font-semibold text-base sm:text-lg md:text-xl xl:text-2xl">School Information</p>
                <form onSubmit={onSubmit} className="flex flex-col gap-y-5">
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
                    <Button type="submit" text="Register" loading={loading} />
                </form>
                <div onClick={() => updatePage(1)} className='flex justify-end items-center cursor-pointer'>Go Back <Back color='#EB8733' className='size-6' variant='Bold' /></div>
            </main>
        </>
    );
}

export default SecondForm;
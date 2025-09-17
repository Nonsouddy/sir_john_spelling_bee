'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';

// Stores
import { useStudentFormStore } from '@/stores/useStudentForm';

// Components
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

const CATEGORY_MAPPING: Record<string, string> = {
    'primary 1': 'early speller (primary 1 & 2)',
    'primary 2': 'early speller (primary 1 & 2)',
    'primary 3': 'upper primary (primary 3 - 6)',
    'primary 4': 'upper primary (primary 3 - 6)',
    'primary 5': 'upper primary (primary 3 - 6)',
    'primary 6': 'upper primary (primary 3 - 6)',
    'jss 1': 'junior secondary (jss 1 - 3)',
    'jss 2': 'junior secondary (jss 1 - 3)',
    'jss 3': 'junior secondary (jss 1 - 3)',
    'ss 1': 'senior secondary (sss 1 -3)',
    'ss 2': 'senior secondary (sss 1 -3)',
    'ss 3': 'senior secondary (sss 1 -3)',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10,11}$/;

const FirstForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { data, updateField } = useStudentFormStore();

    const validateFirstForm = () => {
        const errors: string[] = [];

        if (!data.studentFullName.trim()) errors.push('Full Name');
        if (!data.studentEmail.trim()) errors.push('Email');
        if (!data.studentPhoneNumber.trim()) errors.push('Phone Number');
        if (!data.gender.trim()) errors.push('Gender');
        if (!data.studentDateOfBirth.trim()) errors.push('Date of Birth');
        if (!data.studentClass.trim()) errors.push('Class');
        if (!data.category.trim()) errors.push('Category');

        if (data.studentEmail && !emailRegex.test(data.studentEmail)) {
            errors.push('Valid Email Address');
        }

        if (data.studentPhoneNumber && !phoneRegex.test(data.studentPhoneNumber)) {
            errors.push('Valid Phone Number');
        }

        if (data.studentDateOfBirth) {
            const birthDate = new Date(data.studentDateOfBirth);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
           // Remove the month/day comparison entirely
            if (age < 5 || age > 17) {
                errors.push('Student must be between 5 and 17 years old');
            }
        }

        return errors;
    };

    const updatePage = (newPage: number) => {
        const validationErrors = validateFirstForm();

        if (validationErrors.length > 0) {
            toast.warning(`Please fix the following: ${validationErrors.join(', ')}`);
            return;
        }

        const params = new URLSearchParams(searchParams);
        params.set('page', newPage.toString());
        router.push(`?${params.toString()}`);
    };

    return (
        <main className="font-inter">
            <form action="" className="flex flex-col gap-y-5 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-10">
                <Input
                    type="text"
                    placeholder="First, Middle, Last Name"
                    label="Full Name"
                    id="fullName"
                    autoComplete="off"
                    required
                    value={data.studentFullName}
                    onChange={(e) => updateField('studentFullName', e.target.value)}
                />

                <div className="flex justify-between gap-x-2 md:gap-x-3 xl:gap-x-5">
                    <div className="w-[50%]">
                        <Input
                            type="email"
                            placeholder="Enter email address"
                            label="Email"
                            id="email"
                            autoComplete="off"
                            widthClass="w-full"
                            required
                            value={data.studentEmail}
                            onChange={(e) => updateField('studentEmail', e.target.value)}
                        />
                    </div>
                    <div className="w-[50%]">
                        <Input
                            type="tel"
                            placeholder="000 000 0000"
                            label="Phone Number"
                            id="phoneNumber"
                            autoComplete="off"
                            widthClass="w-full"
                            required
                            value={data.studentPhoneNumber}
                            onChange={(e) => updateField('studentPhoneNumber', e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center gap-x-2 md:gap-x-3 xl:gap-x-5">
                    <div className="w-[50%]">
                        <div className="flex flex-col gap-y-2">
                            <label className="font-semibold cursor-pointer" htmlFor="gender">
                                Gender<span className="text-red-500">*</span>
                            </label>
                            <select
                                name="gender"
                                id="gender"
                                className="border-[#6E6E5E] focus:border-0 bg-inherit px-2 xl:px-4 py-3 border rounded-[10px] duration-300 focus:outline-accentOrange focus:outline"
                                value={data.gender}
                                onChange={(e) => updateField('gender', e.target.value)}
                            >
                                <option value="">Select Your Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-[50%]">
                        <Input
                            type="date"
                            label="Date of Birth"
                            id="dateOfBirth"
                            autoComplete="off"
                            widthClass="w-full"
                            required
                            value={data.studentDateOfBirth}
                            onChange={(e) => updateField('studentDateOfBirth', e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="font-semibold cursor-pointer" htmlFor="class">
                        Class<span className="text-red-500">*</span>
                    </label>
                    <select
                        name="class"
                        id="class"
                        className="border-[#6E6E5E] focus:border-0 bg-inherit px-2 xl:px-4 py-3 border rounded-[10px] duration-300 focus:outline-accentOrange focus:outline uppercase"
                        value={data.studentClass}
                        onChange={(e) => updateField('studentClass', e.target.value)}
                    >
                        <option value="">Select Your Class</option>
                        {CLASS_OPTIONS.map((classes) => (
                            <option key={classes.class} value={classes.class}>
                                {classes.class}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-y-2">
                    <label className="font-semibold cursor-pointer" htmlFor="category">
                        Category<span className="text-red-500">*</span>
                    </label>
                    <select
                        name="category"
                        id="category"
                        className="border-[#6E6E5E] focus:border-0 bg-inherit px-2 xl:px-4 py-3 border rounded-[10px] duration-300 focus:outline-accentOrange focus:outline uppercase"
                        value={data.category}
                        onChange={(e) => updateField('category', e.target.value)}
                        disabled={!data.studentClass}
                    >
                        <option value="">Select Your Category</option>
                        {data.studentClass && (
                            <option value={CATEGORY_MAPPING[data.studentClass]}>
                                {CATEGORY_MAPPING[data.studentClass]}
                            </option>
                        )}
                    </select>
                </div>

                <Button type="button" text="Next" loading={false} onClick={() => updatePage(2)} />
            </form>
        </main>
    );
};

export default FirstForm;
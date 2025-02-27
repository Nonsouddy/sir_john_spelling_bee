"use client"

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';

//Types, Utils and Actions
import { EmailAuth, emailAuthSchema } from "@/app/schemas/auth.schema";
import { makeApiRequest } from "@/lib/apiUtils";

//Import Needed Components
import ZodInput from "../ZodInput";;
import Button from "../Button";
import ErrorText from "../Auth/error-message";
import { Checkbox } from "../ui/checkbox";

//Import Needed Icons
import { Lock, Unlock } from "iconsax-react";

const Form = () => {

    const router = useRouter();
    const [seePassword, setSeePassword] = useState<boolean>(false);
    const [suspended, setSuspended] = useState<boolean>(false);
    const [role, setRole] = useState<boolean>(false);

    //Functions
    const toggleShowPassword = () => setSeePassword((prev) => !prev);

    const toggleSuspended = () => setSuspended((prev) => !prev);

    const toggleRole = () => setRole((prev) => !prev);

    // Data validation
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<EmailAuth>({
        resolver: zodResolver(emailAuthSchema),
    });

    // OnSubmit function
    const onSubmit: SubmitHandler<EmailAuth> = async (data) => {

        toast.message("Creating Admin...")
        const formData = { ...data, suspended, role };

        await makeApiRequest("/admin", "post", formData, {
            onSuccess: () => {
                toast.success(`The Admin was created successfully.`);
                reset();
                router.push("/admin/staff")
            },
            onError: (error) => {
                toast.error(error.response.data);
                reset()
            },
        });
    };

    return (
        <main className="mx-auto my-10 p-2 md:p-4 xl:p-6 border border-gray-600 rounded-3xl w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
            <h1 className="my-4 font-semibold text-white text-lg md:text-xl xl:text-2xl">Add a new admin</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 mt-10">

                <div className="flex flex-col">
                    <ZodInput type="email" placeholder="Enter your email address" id="email" name="email" register={register} required={true} label="Email" otherClass="bg-inherit"  />
                    {errors.email && <ErrorText message={errors.email.message as string} />}
                </div>
                <div className="relative">
                    <div>
                        <ZodInput type={seePassword ? "text" : "password"} placeholder="Enter your password" id="password" name="password" register={register} required={true} label="Password" otherClass="bg-inherit"  />
                        {errors.password && <ErrorText message={errors.password.message as string} />}
                    </div>
                    <div className="top-[1.85rem] md:top-[2.1rem] xl:top-[2.35rem] right-2 absolute bg-blue-300 p-1 md:p-1.5 xl:p-2 rounded-md cursor-pointer" onClick={toggleShowPassword}>
                        {seePassword ? <Lock color="#000" size={20} /> : <Unlock color="#000" size={20} />}
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="suspended" className="rounded-[2rem]" onCheckedChange={toggleSuspended} />
                    <label htmlFor="suspended" className="peer-disabled:opacity-70 font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed">
                        Suspend Staff
                    </label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="role" className="rounded-[2rem]" onCheckedChange={toggleRole} />
                    <label htmlFor="role" className="peer-disabled:opacity-70 font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed">
                        Make a Super Admin
                    </label>
                </div>
                <Button type="submit" text="Add Staff" loading={isSubmitting} />
            </form>
        </main>
    );
}

export default Form;
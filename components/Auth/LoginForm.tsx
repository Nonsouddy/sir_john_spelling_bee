"use client"

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';

//Import Needed types and Utils
import { emailAuthSchema, EmailAuth } from "@/app/schemas/auth.schema";
import { makeApiRequest } from "@/lib/apiUtils";


//Import Needed Components
import ZodInput from "../ZodInput";;
import Button from "../Button";
import ErrorText from "./error-message";


//Import Needed Icons
import { Lock, Unlock } from "iconsax-react";

const LoginForm = () => {

    const router = useRouter();
    const [seePassword, setSeePassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("")

    //Toggle See Password
    const toggleShowPassword = () => {
        setSeePassword((prev) => !prev);
    }

    // Data validation
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<EmailAuth>({
        resolver: zodResolver(emailAuthSchema),
    });


    // OnSubmit function
    const onSubmit: SubmitHandler<EmailAuth> = async (data) => {

        const formData = { ...data };

        await makeApiRequest("/login", "post", formData, {
            onSuccess: (response) => {
                toast.success("Welcome Back")
                reset();
                router.replace(`/admin/dashboard`);
            },
            onError: (error: any) => {
                toast.error(error.response.data)
                reset();
            }
        });
    }

    return (
        <main className="bg-gray-700 p-4 md:p-6 xl:p-8 rounded-2xl">
            <h1 className="my-4 font-semibold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 mt-8 w-[16rem] sm:w-[22rem] md:w-[26rem] lg:w-[30rem] xl:w-[34rem]">
                <div className="flex flex-col">
                    <ZodInput type="email" placeholder="Enter your email address" id="email" name="email" register={register} required={true} label="Email" />
                    {errors.email && <ErrorText message={errors.email.message as string} />}
                </div>
                <div className="relative">
                    <div>
                        <ZodInput type={seePassword ? "text" : "password"} placeholder="Enter your password" onChange={(e: any) => setPassword(e.target.value)} id="password" name="password" register={register} required={true} label="Password" />
                        {errors.password && <ErrorText message={errors.password.message as string} />}
                    </div>
                    <div className="top-[1.85rem] md:top-[2.1rem] xl:top-[2.35rem] right-2 absolute bg-blue-300 p-1 md:p-1.5 xl:p-2 rounded-md cursor-pointer" onClick={toggleShowPassword}>
                        {seePassword ? <Lock color="#000" size={20} /> : <Unlock color="#000" size={20} />}
                    </div>
                </div>
                <Button type="submit" text="Login" loading={isSubmitting} />
            </form>
        </main>
    );
}

export default LoginForm;
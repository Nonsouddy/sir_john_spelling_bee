"use client"

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
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

        await makeApiRequest("/emailSignUp", "post", formData, {
            onSuccess: () => {
                
            },
            onError: (error: any) => {
                
            }
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 mt-8">
            <div className="flex flex-col">
                <ZodInput type="email" placeholder="Enter your email address" id="email" name="email" register={register} required={true} label="Email" />
                {errors.email && <ErrorText message={errors.email.message as string} />}
            </div>
            <div className="relative">
                <div>
                    <ZodInput type={seePassword ? "text" : "password"} placeholder="Enter your password" onChange={(e: any) => setPassword(e.target.value)} id="password" name="password" register={register} required={true} label="Password" />
                    {errors.password && <ErrorText message={errors.password.message as string} />}
                </div>
                <div className="top-6 md:top-7 xl:top-8 right-1 absolute bg-light-600 dark:bg-dark-600 p-1 md:p-1.5 xl:p-2 rounded-md cursor-pointer" onClick={toggleShowPassword}>
                    {seePassword ? <Lock className="text-5xl text-textBlueLight md:text-7xl xl:text-9xl dark:text-textBlueDark" /> : <Unlock className="text-5xl text-textBlueLight md:text-7xl xl:text-9xl dark:text-textBlueDark" />}
                </div>
            </div>
            <Button type="submit" text="Register" loading={isSubmitting} />
        </form>
    );
}

export default LoginForm;
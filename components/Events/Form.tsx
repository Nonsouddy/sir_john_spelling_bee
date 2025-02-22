"use client"

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';

//Import Needed types and Utils
import { EventInput, eventSchema } from "@/app/schemas/event.schema";
import { makeApiRequest } from "@/lib/apiUtils";


//Import Needed Components
import ZodInput from "../ZodInput";;
import Button from "../Button";
import ErrorText from "../Auth/error-message";

const Form = () => {

    const router = useRouter();

    // Data validation
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<EventInput>({
        resolver: zodResolver(eventSchema),
    });

    // OnSubmit function
    const onSubmit: SubmitHandler<EventInput> = async (data) => {

        const formData = { ...data };

        await makeApiRequest("/login", "post", formData, {
            onSuccess: () => {
                toast.success("Event was created successfully")
                reset();
                router.replace(`/admin/events`);
            },
            onError: (error: any) => {
                toast.error(error.response.data)
                reset();
            }
        });
    }


    return (
        <main className="mx-auto my-10 p-2 md:p-4 xl:p-6 border border-gray-600 rounded-3xl w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
            <h1 className="my-4 font-semibold text-white text-lg md:text-xl xl:text-2xl">Create a new event</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
                <div className="flex flex-col">
                    <ZodInput type="text" placeholder="Enter the event name" id="name" name="name" register={register} required={true} label="Event Name" otherClass="bg-inherit" />
                    {errors.name && <ErrorText message={errors.name.message as string} />}
                </div>
                <div className="flex flex-col">
                    <ZodInput type="text" placeholder="Enter the event venue" id="venue" name="venue" register={register} required={true} label="Event Venue" otherClass="bg-inherit" />
                    {errors.venue && <ErrorText message={errors.venue.message as string} />}
                </div>
                <div className="flex flex-col">
                    <ZodInput type="file" placeholder="Event Image" id="image" name="image" register={register} required={true} label="Event Image" otherClass="bg-inherit" />
                    {errors.image && <ErrorText message={errors.image.message as string} />}
                </div>
                <div className="flex flex-col">
                    <ZodInput type="datetime" placeholder="Event Date and Time" id="date" name="date" register={register} required={true} label="Event Date and Ttime" otherClass="bg-inherit" />
                    {errors.date && <ErrorText message={errors.date.message as string} />}
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="otherDetails" className="text-white cursor-pointer">Other Event Details</label>
                    <textarea name="otherDetails" id="otherDetails" className="bg-inherit px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange w-full h-40 duration-300 resize-y"></textarea>
                    {errors.otherDetails && <ErrorText message={errors.otherDetails.message as string} />}
                </div>
                <Button type="submit" text="Create New Event" loading={isSubmitting} />
            </form>
        </main>
    );
}

export default Form;
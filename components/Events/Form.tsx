"use client"

import { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';

//Types, Utils and Actions
import { EventInput, eventSchema } from "@/app/schemas/event.schema";
import { makeApiRequest } from "@/lib/apiUtils";
import { uploadFiles } from "@/actions/server/upload";

//Import Needed Components
import ZodInput from "../ZodInput";;
import Button from "../Button";
import ErrorText from "../Auth/error-message";

const Form = () => {

    const [images, setImages] = useState<File[]>([]);
    const router = useRouter();

    //For the Images
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files: File[] = Array.from(e.target.files);
            setImages(files)
        }
    };

    // Data validation
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<EventInput>({
        resolver: zodResolver(eventSchema),
    });

    // OnSubmit function
    const onSubmit: SubmitHandler<EventInput> = async (data) => {

        //Upload Images
        const { success, imageLinks } = await uploadFiles(images);

        if (!success) {
            toast.error("Couldn't process the selected image, kindly try again later.")
            reset();
            return
        }

        const formData = { ...data, images: imageLinks };

        await makeApiRequest("/event", "post", formData, {
            onSuccess: () => {
                toast.success("Event was created successfully")
                reset();
                router.push(`/admin/events`);
                return
            },
            onError: (error: any) => {
                toast.error(error.response.data)
                reset();
                return
            }
        });
    }


    return (
        <main className="mx-auto my-10 p-2 md:p-4 xl:p-6 border border-gray-600 rounded-3xl w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
            <h1 className="my-4 font-semibold text-white text-lg md:text-xl xl:text-2xl">Create a new event</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 text-xs sm:text-sm xl:text-base">
                <div className="flex flex-col">
                    <ZodInput type="text" placeholder="Enter the event name" id="name" name="name" register={register} required={true} label="Event Name" otherClass="bg-inherit" />
                    {errors.name && <ErrorText message={errors.name.message as string} />}
                </div>
                <div className="flex flex-col">
                    <ZodInput type="text" placeholder="Enter the event venue" id="venue" name="venue" register={register} required={true} label="Event Venue" otherClass="bg-inherit" />
                    {errors.venue && <ErrorText message={errors.venue.message as string} />}
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="image" className="text-white cursor-pointer">Event Image(s)</label>
                    <input required onChange={handleImageChange} type="file" name="image" accept="image/png, image/jpeg, image/jpg, image/webp, image/gif" multiple className="bg-inherit px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange duration-300" />
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="date" className="text-white cursor-pointer">Event Date and Time</label>
                    <input required {...register("date")} type="datetime-local" name="date" id="date" className="bg-inherit px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange duration-300" />
                    {errors.date && <ErrorText message={errors.date.message as string} />}
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="otherDetails" className="text-white cursor-pointer">Other Event Details</label>
                    <textarea {...register("otherDetails")} name="otherDetails" id="otherDetails" className="bg-inherit px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange w-full h-40 duration-300 resize-y"></textarea>
                    {errors.otherDetails && <ErrorText message={errors.otherDetails.message as string} />}
                </div>
                <Button type="submit" text="Create New Event" loading={isSubmitting} />
            </form>
        </main>
    );
}

export default Form;
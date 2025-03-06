"use client"

import { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";

//Types, Utils and Actions
import { EventInput, eventSchema } from "@/app/schemas/event.schema";
import { makeApiRequest } from "@/lib/apiUtils";
import { uploadFiles } from "@/actions/server/upload";

//Import Needed Components
import ZodInput from "../ZodInput";;
import Button from "../Button";
import ErrorText from "../Auth/error-message";

//Icons
import { CloseCircle } from "iconsax-react";


const UpdateForm = ({ event, toggleFn }: { event?: EventProperties, toggleFn: () => void; }) => {

    const [images, setImages] = useState<File[]>([]);

    //For the Image selection
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const maxFileSize = 50 * 1024 * 1024;
        const files: File[] = Array.from(e.target.files);

        // Filter out files that exceed the size limit
        const validFiles = files.filter(file => {
            if (file.size > maxFileSize) {
                toast.error(`"${file.name}" is too large! Max size is 50MB.`);
                return false;
            }
            return true;
        });

        if (validFiles.length === 0) {
            e.target.value = "";
            return;
        }

        setImages(validFiles);
    };


    // Data validation
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<EventInput>({
        resolver: zodResolver(eventSchema),
    });

    // OnSubmit function
    const onSubmit: SubmitHandler<EventInput> = async (data) => {

        //Upload Images if they exists
        if (Array.isArray(images) && images.length > 0) {

            const { success, imageLinks } = await uploadFiles(images);

            if (!success) {
                toast.error("Couldn't process the selected image, kindly try again later.")
                reset();
                return
            }

            const formData = { ...data, images: imageLinks, id: event?.id, formerImages: event?.images };

            await makeApiRequest("/updateEvent", "post", formData, {
                onSuccess: () => {
                    toast.success("Event was updated successfully")
                    reset();
                    toggleFn();
                    return
                },
                onError: (error: any) => {
                    toast.error(error.response.data)
                    reset();
                    return
                }
            });

        } else {

            const formData = { ...data, images: event?.images, id: event?.id };

            await makeApiRequest("/updateEvent", "post", formData, {
                onSuccess: () => {
                    toast.success("Event was updated successfully")
                    reset();
                    toggleFn();
                    return
                },
                onError: (error: any) => {
                    toast.error(error.response.data)
                    reset();
                    return
                }
            });
        }

    }


    return (
        <main className="top-0 left-0 z-[2] fixed place-items-center grid bg-black w-full h-dvh overflow-y-auto">
            <div className="relative bg-[#262626] my-10 p-2 md:p-4 xl:p-6 rounded-3xl w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
                <CloseCircle color="#dc2626" size="26" className="top-4 right-4 absolute cursor-pointer" variant="Bold" onClick={toggleFn} />
                <h1 className="my-4 font-semibold text-white text-lg md:text-xl xl:text-2xl">Update {event?.name}</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 text-xs sm:text-sm xl:text-base">
                    <div className="flex flex-col">
                        <ZodInput type="text" placeholder="Update Event name" id="name" name="name" defaultValue={event?.name} register={register} required={true} label="Update Event Name" otherClass="bg-inherit text-white" />
                        {errors.name && <ErrorText message={errors.name.message as string} />}
                    </div>
                    <div className="flex flex-col">
                        <ZodInput type="text" placeholder="Update Event venue" id="venue" name="venue" defaultValue={event?.venue} register={register} required={true} label="Update Event Venue" otherClass="bg-inherit text-white" />
                        {errors.venue && <ErrorText message={errors.venue.message as string} />}
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="image" className="text-white cursor-pointer">Update Event Image(s)</label>
                        <input onChange={handleImageChange} type="file" name="image" accept="image/png, image/jpeg, image/jpg, image/webp, image/gif" multiple className="bg-inherit px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange text-white duration-300" />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="date" className="text-white cursor-pointer">Update Event Date and Time</label>
                        <input {...register("date")} type="datetime-local" name="date" id="date" className="bg-inherit px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange text-white duration-300" />
                        {errors.date && <ErrorText message={errors.date.message as string} />}
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="otherDetails" className="text-white cursor-pointer">Update Other Event Details</label>
                        <textarea {...register("otherDetails")} name="otherDetails" id="otherDetails" defaultValue={event?.otherDetails ?? ""} className="bg-inherit px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange w-full h-40 text-white duration-300 resize-y"></textarea>
                        {errors.otherDetails && <ErrorText message={errors.otherDetails.message as string} />}
                    </div>
                    <Button type="submit" text={`Update ${event?.name}`} loading={isSubmitting} />
                </form>
            </div>
        </main>
    );
}

export default UpdateForm;
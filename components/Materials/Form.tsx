"use client"

import { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';

//Types, Utils and Actions
import { MaterialInput, materialSchema } from "@/app/schemas/material.schema";
import { makeApiRequest } from "@/lib/apiUtils";
import uploadFiles from "@/actions/server/uploadFIle";

//Import Needed Components
import ZodInput from "../ZodInput";;
import Button from "../Button";
import ErrorText from "../Auth/error-message";

const Form = () => {

    const [selectedDocs, setSelectedDocs] = useState<File[]>([]);
    const router = useRouter();

    //For the Images
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

        setSelectedDocs(validFiles);
    };

    // Data validation
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<MaterialInput>({
        resolver: zodResolver(materialSchema),
    });

    // OnSubmit function
    const onSubmit: SubmitHandler<MaterialInput> = async (data) => {

        //Upload Images
        const { success, fileDetails  } = await uploadFiles(selectedDocs);

        if (!success) {
            toast.error("Couldn't process the selected image, kindly try again later.")
            reset();
            return
        }

        const formData = { ...data, downloadLink: fileDetails![0].fileUrl, type: fileDetails![0].fileType, size: fileDetails![0].fileSize };

        await makeApiRequest("/material", "post", formData, {
            onSuccess: () => {
                toast.success("The material was added successfully")
                reset();
                router.push(`/admin/materials`);
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
            <h1 className="my-4 font-semibold text-white text-lg md:text-xl xl:text-2xl">Add a new material</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 text-xs sm:text-sm xl:text-base">
                <div className="flex flex-col">
                    <ZodInput type="text" placeholder="Enter the material title" id="title" name="title" register={register} required={true} label="Material Title" otherClass="bg-inherit" />
                    {errors.title && <ErrorText message={errors.title.message as string} />}
                </div>
                <div className="flex flex-col">
                    <ZodInput type="text" placeholder="Enter the material author" id="author" name="author" register={register} label="Material Author" otherClass="bg-inherit" />
                    {errors.author && <ErrorText message={errors.author.message as string} />}
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="material" className="text-white cursor-pointer">Select Material</label>
                    <input id="material" type="file" accept=".doc,.docx,application/pdf,text/plain" className="bg-inherit px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange duration-300" />
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="otherDetails" className="text-white cursor-pointer">Other Material Details</label>
                    <textarea {...register("body")} name="body" id="otherDetails" className="bg-inherit px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange w-full h-40 duration-300 resize-y"></textarea>
                    {errors.body && <ErrorText message={errors.body.message as string} />}
                </div>
                <Button type="submit" text="Add Material" loading={isSubmitting} />
            </form>
        </main>
    );
}

export default Form;
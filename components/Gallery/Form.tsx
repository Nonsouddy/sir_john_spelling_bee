"use client"

import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

//Utils
import { makeApiRequest } from '@/lib/apiUtils';

//Components
import Button from "../Button";
import { uploadFiles } from '@/actions/server/upload';


const Form = () => {

    //Form Values
    const [images, setImages] = useState<File[]>([]);
    const [description, setDescription] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();


    //For the Images and Description
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

    const handleDescriptionChange = (value: string) => setDescription(value);

    //OnSubmit Function
    const onSubmit = async (e: FormEvent) => {

        e.preventDefault()
        setLoading(true);

        //Upload Images
        const { success, imageLinks } = await uploadFiles(images);

        if (!success) {
            toast.error("Couldn't process the selected image, kindly try again later.")
            return
        }

        await makeApiRequest("/gallery", "post", { images: imageLinks, description }, {
            onSuccess: () => {
                setLoading(false);
                toast.success(`${images.length} new Images was added to your gallery successfully.`);
                router.push(`/admin/gallery`);
            },
            onError: () => {
                toast.error("Couldn't add the images, please try again later.");
                setLoading(false);
            },
        });
    };



    return (
        <main className="mx-auto my-10 p-2 md:p-4 xl:p-6 border border-gray-600 rounded-3xl w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
            <h1 className="my-4 font-semibold text-white text-lg md:text-xl xl:text-2xl">Add a new Gallery Image</h1>
            <form onSubmit={onSubmit} className="flex flex-col gap-y-5">
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="image" className="text-white cursor-pointer">New Image(s)</label>
                    <input required onChange={handleImageChange} type="file" name="image" accept="image/png, image/jpeg, image/jpg, image/webp, image/gif" multiple className="bg-inherit px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange duration-300" />
                </div>
                <div className="flex flex-col gap-y-1">
                    <label htmlFor="description" className="text-white cursor-pointer">Description (optional)</label>
                    <textarea name="description" onChange={(event: ChangeEvent<HTMLTextAreaElement>) => handleDescriptionChange(event.target.value)} id="description" className="bg-inherit px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange w-full h-40 duration-300 resize-y"></textarea>
                </div>
                <Button type="submit" text="Upload Images" loading={loading} />
            </form>
        </main>
    );
}

export default Form;
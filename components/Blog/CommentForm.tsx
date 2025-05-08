'use client'

import { useState, FormEvent, ChangeEvent } from 'react';
import { toast } from 'sonner';

//Utils and Actions
import { revalidatePage } from '@/actions/server/revalidate';
import { makeApiRequest } from '@/lib/apiUtils';

//Component
import Input from '../Input';
import Button from '../Button';

export default function CommentForm({ postId, slug }: { postId: string, slug: string }) {

    //States
    const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    //Functions
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    //toggle submission
    const toggleSubmission = () => {
        setSubmitted((prev) => !prev);
        setLoading((prev) => !prev);
    }

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();
        toggleSubmission();

        await makeApiRequest("/addComment", "post", { ...formData, postId }, {
            onSuccess() {
                return toast.success("Your comment was added successfully.");
            },
            onError() {
                return toast.error("Sorry, we couldn't enter your comment now, kindly try again later.");
            }
        })
        await revalidatePage(`/blog/${slug}`);
    }

    if (submitted) return <p className="text-green-600">Comment submitted !!!</p>

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 font-inter text-xs sm:text-sm xl:text-base">
            <Input type="text" name="name" placeholder='Enter your Name' id="name" label='Name' onChange={handleChange} required />
            <Input type="email" name="email" placeholder='Enter your Email' id="email" label='Email' onChange={handleChange} required />
            <div className='flex flex-col gap-y-1'>
                <label htmlFor="comment" className="font-semibold cursor-pointer">Comment<span className="text-red-500">*</span></label>
                <textarea name="comment" id="comment" placeholder="Write a comment..." onChange={handleChange} required className="px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange h-40 duration-300 resize-none" />
            </div>
            <Button type='submit' text={"Submit Comment"} loading={loading} />
        </form>
    )
}

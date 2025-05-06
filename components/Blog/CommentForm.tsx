'use client'

import { useState, FormEvent, ChangeEvent } from 'react';

//Utils
import { makeApiRequest } from '@/lib/apiUtils';

//Component
import Input from '../Input';
import Button from '../Button';

export function CommentForm({ postId }: { postId: string }) {

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

            },
            onError() {

            }
        })
    }

    if (submitted) return <p className="text-green-600">Comment submitted and pending approval!</p>

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            <Input type="text" placeholder='Enter your Name' id="name" label='Name' onChange={handleChange} required />
            <Input type="email" placeholder='Enter your Email' id="email" label='Email' onChange={handleChange} required />
            <div className='flex flex-col gap-y-1'>
                <label htmlFor="comment">Comment</label>
                <textarea name="comment" id="comment" placeholder="Write a comment..." onChange={handleChange} required className="px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange h-40 duration-300 resize-none" />
            </div>
            <Button type='submit' text={"Submit Comment"} loading={loading} />
        </form>
    )
}

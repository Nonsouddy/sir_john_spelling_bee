'use client'

import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CryptoJS from "crypto-js";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

//Lib, utils and libs
import { makeApiRequest } from '@/lib/apiUtils';

//Icons
import { CloseSquare } from 'iconsax-react';
import Button from '../Button';

export default function EditDrawer({ isOpen, onClose, admin }: EditProps) {

    function decryptPassword(encryptedText: string): string {
        const bytes = CryptoJS.AES.decrypt(encryptedText, "sir-john-spelling-bee");
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    //States
    const initialState: InitialStateProps = {
        id: admin.id,
        email: admin.email,
        password: admin.encryptedPassword ? decryptPassword(admin.encryptedPassword) : "",
        role: admin.role === "super_admin" ? true : false,
        suspended: admin.suspended,
    };

    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()

    //Functions
    const handleFormChange = (event: any) => {
        const { name, type, checked, value } = event.target;
        setState({ ...state, [name]: type === "checkbox" ? checked : value });
    };

    //For the forms
    const textFields = [{ name: "email" }, { name: "password" }]
    const booleanFields = [{ name: "role" }, { name: "suspended" }]

    //OnSubmit function
    const onSubmit = async (event: FormEvent) => {
        toast.message("Updating Admin...")
        event.preventDefault()
        setLoading(true)

        const formData = { ...state };

        await makeApiRequest("/editAdmin", "post", formData, {
            onSuccess: () => {
                toast.success(`Admin was Profile was updated successfully.`);
                onClose();
                router.push("/admin/staff")
            },
            onError: () => {
                toast.error("Couldn't update Admin details, try again later.");
                setLoading(false)
            },
        });
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ type: 'spring', damping: 10, stiffness: 300 }}
                    className="bottom-0 z-[100] fixed inset-x-0 bg-black shadow-lg border-2 border-slate-800 rounded-t-[2rem]">

                    <div className="p-4 md:p-6 xl:p-8">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold text-base md:text-lg xl:text-xl">Edit User</h2>
                            <CloseSquare onClick={onClose} size={30} color='#dc2626' className='cursor-pointer' variant='Bold' />
                        </div>
                        <form className="flex flex-col gap-y-5 mt-10" onSubmit={onSubmit}>
                            {textFields.map((field, index) => (
                                <div key={`field-${index}`} className='flex flex-col gap-y-1'>
                                    <label className="capitalize cursor-pointer" htmlFor={field.name}>{field.name}</label>
                                    <input type={`${field.name === "email" ? "email" : "text"}`} id={field.name} name={field.name} onChange={handleFormChange} value={state[field.name] as string}
                                        className="bg-inherit px-2 xl:px-4 py-3 border border-[#6E6E5E] focus:border-0 rounded-[10px] focus:outline focus:outline-accentOrange duration-300" />
                                </div>
                            ))}
                            <div className='flex gap-x-5'>
                                {booleanFields.map((field) => (
                                    <div key={field.name} className='flex items-center gap-x-1'>
                                        <label className="capitalize cursor-pointer" htmlFor={field.name}>{field.name === "role" ? "Super Admin" : field.name}</label>
                                        <input type="checkbox" name={field.name} id={field.name} onChange={handleFormChange} checked={state[field.name] as boolean} className="cursor-pointer" />
                                    </div>
                                ))}
                            </div>
                            <Button type='submit' text='Update Details' loading={loading} />
                        </form>
                    </div>
                </motion.div>
            )}
            <div className={`${isOpen ? "fixed inset-0 h-dvh z-[99]" : "hidden"} `} onClick={onClose}></div>
        </AnimatePresence>
    )
}
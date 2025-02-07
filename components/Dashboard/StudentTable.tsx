'use client'

import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

//Utils
import { makeApiRequest } from '@/lib/apiUtils';

//Icons
import { Trash, ChartCircle, TickSquare } from "iconsax-react";

export default function StudentTable({ contestants, role }: { contestants: Contestant[], role: string }) {

    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    //Functions
    const handleSelect = (id: string) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }

    //For the deleting of images
    const handleDelete = async (uniqueId?: string, selectedIds?: string[]) => {

        toast.message("Deleting contestant(s)...")
        setLoading(true)

        const formData = { uniqueId, selectedIds };

        await makeApiRequest("/deleteOrder", "delete", formData, {
            onSuccess: () => {
                toast.success(`The contestant was deleted successfully.`);
                setLoading(false);
                window.location.reload();
            },
            onError: () => {
                toast.error("Couldn't delete order now, please try again later.");
                setLoading(false);
                window.location.reload();
            },
        });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="bg-lightBlack shadow-md mb-4 rounded-xl min-w-full overflow-hidden">
                    <thead className="bg-gray-700">
                        <tr>
                            <th className="px-6 py-3 w-12 font-medium text-left text-xs uppercase">
                                Select
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-xs uppercase">
                                IDs
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-xs uppercase">
                                Contestant Name
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-xs uppercase">
                                Email and Phone Number
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-xs uppercase">
                                Gender and Date of Birth
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-xs uppercase">
                                Class and Category
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-xs uppercase">
                                School name
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-xs uppercase">
                                Location and Phone Number
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-xs uppercase">
                                Tutor Name and Phone Number
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-xs uppercase">
                                Has Paid?
                            </th>
                            <th className="px-6 py-3 font-medium text-left text-xs uppercase">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {contestants.map((contestant, index) => (
                            <tr key={contestant.id} className={`${index % 2 === 0 ? "bg-black" : "bg-lightBlack"} whitespace-nowrap capitalize`}>
                                <td className="px-6 py-4">
                                    <input type="checkbox" checked={selectedIds.includes(contestant.studentId)} onChange={() => handleSelect(contestant.studentId)} className="w-4 h-4 text-generalBlue dark:text-cloudBlue cursor-pointer" />
                                </td>
                                <td className="px-6 py-4"><Link href={`/admin/students/${contestant.studentId}`}>{contestant.studentId}</Link>
                                </td>
                                <td className="px-6 py-4">
                                    {contestant.studentFullName}
                                </td>
                                <td className="px-6 py-4">
                                    {contestant.studentEmail}
                                    <p>{contestant.studentPhoneNumber}</p>
                                </td>
                                <td className="px-6 py-4">
                                    {contestant.gender}
                                    <p>{contestant.studentDateOfBirth}</p>
                                </td>
                                <td className="px-6 py-4">
                                    {contestant.studentClass}
                                   <p>{contestant.category}</p> 
                                </td>
                                <td className="px-6 py-4">
                                    {contestant.schoolName}
                                </td>
                                <td className="px-6 py-4">
                                    {contestant.schoolLocation}
                                    <p>{contestant.schoolPhoneNumber}</p>
                                </td>
                                <td className="px-6 py-4">
                                    {contestant.tutorName}
                                    <p>{contestant.tutorPhoneNumber}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${contestant.hasPaid ? 'bg-green-800 text-green-100' : 'bg-yellow-800 text-yellow-100'}`}>
                                        {contestant.hasPaid ? "Yes" : "No"}
                                    </span>
                                </td>
                                <td className="flex mt-2 md:mt-3 px-6 py-4">
                                    <Link href={`/admin/students/${contestant.studentId}`} className="mr-4 text-indigo-400 hover:text-indigo-200">
                                        <TickSquare color='#4ade80' variant='Bold' className="w-5 h-5" />
                                    </Link>
                                    {role === "super_admin" &&
                                        <button onClick={() => handleDelete(contestant.studentId, undefined)} className="text-red-400 hover:text-red-200" disabled={loading}>
                                            {loading ? <ChartCircle size={14} color="#2ccce4" className="animate-spin" />
                                                : <Trash color='#f87171' className="w-5 h-5" />
                                            }
                                        </button>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedIds.length > 0 &&
                <div className="flex justify-between mt-6">
                    <p>Selected Contestant IDs: {selectedIds.join(', ')}</p>
                    {role === "super_admin" &&
                        <button disabled={loading} className="flex items-center gap-x-5 bg-red-400 hover:bg-red-200 p-3 rounded-[2rem] text-black cursor-pointer" onClick={() => handleDelete(undefined, selectedIds)}>
                            {loading ? <ChartCircle size={14} color="#FFF" className="animate-spin" />
                                : <>
                                    <p>Delete Registration(s)</p>
                                    <Trash color='#000' className="size-6" />
                                </>
                            }
                        </button>
                    }
                </div>
            }
        </div>
    )
}
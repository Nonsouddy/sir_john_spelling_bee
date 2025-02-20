'use client'

import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

//actions
import updateHasPaid from '@/actions/server/updateContestant';
import { deleteContestant, deleteContestants } from '@/actions/server/deleteContestant';

//Icons
import { Trash, ChartCircle, TickSquare } from "iconsax-react";

export default function StudentTable({ fetchedContestants, role }: { fetchedContestants: Contestant[], role: string }) {

    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [contestants, setContestants] = useState<Contestant[]>(fetchedContestants)

    //Functions
    const handleSelect = (id: string) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }

    //Handle updates
    const handleUpdate = async (studentId: string, email: string) => {

        toast.message("Updating Payment Status...")
        setLoading(true)

        const { success, message, error } = await updateHasPaid(studentId, email);
        if (success) {
            setContestants(contestants.filter((contestant) => contestant.studentId !== studentId))
            toast.success(`${message}`)
            return
        }
        if (error) {
            console.log(`Error updating the payment status of ${studentId}`, error);
            toast.error("Couldn't update the contestant payment status. Kindly try again.")
            return
        }
    }

    const handleDelete = async (studentId: string) => {
        toast.message("Deleting Contestant...")
        setLoading(true)

        const { success, message, error } = await deleteContestant(studentId)
        if (success) {
            setContestants(contestants.filter((contestant) => contestant.studentId !== studentId))
            toast.success(`${message}`)
            return
        }
        if (error) {
            console.log(`Error deleting the contestant with the studentId of ${studentId}`, error);
            toast.error("Couldn't delete contestant kindly try again later. Kindly try again.")
            return
        }
    }

    const handleDeleteMany = async (studentIds: string[]) => {
        toast.message("Deleting Contestants...")
        setLoading(true)

        const { success, message, error } = await deleteContestants(studentIds)
        if (success) {
            setContestants(contestants.filter((contestant) => !studentIds.includes(contestant.studentId)));
            toast.success(`${message}`)
            return
        }
        if (error) {
            console.log(`Error deleting the contestants with the studentIds of ${studentIds}`, error);
            toast.error("Couldn't delete contestants kindly try again later. Kindly try again.")
            return
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="bg-lightBlack shadow-md mb-4 rounded-xl min-w-full overflow-hidden">
                    <thead className="bg-gray-700">
                        <tr>
                            <th className="px-6 py-3 w-12 font-medium text-xs text-left uppercase">
                                Select
                            </th>
                            <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                IDs
                            </th>
                            <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                Contestant Name
                            </th>
                            <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                Email and Phone Number
                            </th>
                            <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                Gender and Date of Birth
                            </th>
                            <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                Class and Category
                            </th>
                            <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                School name
                            </th>
                            <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                Location and Phone Number
                            </th>
                            <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                Tutor Name and Phone Number
                            </th>
                            <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                Has Paid?
                            </th>
                            <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {contestants.length > 0 && contestants.map((contestant, index) => (
                            <tr key={contestant.id} className={`${index % 2 === 0 ? "bg-black" : "bg-lightBlack"} whitespace-nowrap capitalize`}>
                                <td className="px-6 py-4">
                                    <input type="checkbox" checked={selectedIds.includes(contestant.studentId)} onChange={() => handleSelect(contestant.studentId)} className="w-4 h-4 text-generalBlue dark:text-cloudBlue cursor-pointer" />
                                </td>
                                <td className="px-6 py-4"><Link href={`/admin/contestants/${contestant.studentId}`}>{contestant.studentId}</Link>
                                </td>
                                <td className="px-6 py-4">
                                    <Link href={`/admin/contestants/${contestant.studentId}`}>{contestant.studentFullName}</Link>
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
                                <td className="flex gap-x-5 mt-2 md:mt-3 px-6 py-4">
                                    <TickSquare onClick={() => handleUpdate(contestant.studentId, contestant.studentEmail)} color='#4ade80' variant='Bold' className="size-6 cursor-pointer" />
                                    {role === "super_admin" &&
                                        <button onClick={() => handleDelete(contestant.studentId)} className="text-red-400 hover:text-red-200" disabled={loading}>
                                            {loading ? <ChartCircle size={14} color="#2ccce4" className="animate-spin" />
                                                : <Trash variant='Bold' color='#f87171' className="size-6" />
                                            }
                                        </button>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                {contestants.length === 0 &&
                    <p className="px-6 py-4 text-center">
                        Payment is confirmed for all contestants.
                    </p>
                }
            </div>
            {selectedIds.length > 0 &&
                <div className="flex justify-between mt-6">
                    <p>Selected Contestant IDs: {selectedIds.join(', ')}</p>
                    {role === "super_admin" &&
                        <button disabled={loading} className="flex items-center gap-x-5 bg-red-400 hover:bg-red-200 p-3 rounded-[2rem] text-black cursor-pointer" onClick={() => handleDeleteMany(selectedIds)}>
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
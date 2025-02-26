"use client"

import { useState } from "react";
import { toast } from "sonner";

//Actions


//Libs and Components
import EditDrawer from "./EditDrawer";

//Icons
import { Ban, Trash2, Edit2 } from 'lucide-react';


const StaffTable = ({ admins }: { admins: Admin[] }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [admin, setAdmin] = useState<Admin>()

    //Functions

    const toggleIsOpen = () => {
        setIsOpen((prev) => !prev)
    }

    const addAdmin = (admin: Admin) => {
        setAdmin(admin)
    }

    const handleSuspend = async (id: string, type: string) => {
        toast.message(`Updating...`)

    }

    const handleDelete = async (id: string) => {
        toast.message("Deleting...")

    }

    return (
        <>
            {isOpen && <EditDrawer isOpen={isOpen} onClose={toggleIsOpen} admin={admin!} />}
            <main>
                <div className="overflow-x-auto">
                    <table className="bg-light-600 dark:bg-dark-600 shadow-md mb-4 rounded-xl min-w-full overflow-hidden">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                    Email
                                </th>
                                <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                    Role
                                </th>
                                <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map((admin, index) => (
                                <tr key={admin.id} className={`${index % 2 === 0 ? "bg-black" : "bg-[#262626]"} whitespace-nowrap`}>
                                    <td className="px-6 py-4">
                                        <p>{admin.email}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                            ${admin.role === 'super_admin' ? 'bg-green-800 dark:text-green-100' :
                                                admin.role === 'admin' ? 'bg-yellow-800 dark:text-yellow-100' : ''}`}>
                                            {admin.role === "super_admin" ? "super admin" : "admin"}
                                        </span>
                                    </td>
                                    <td className="flex items-center gap-x-5 px-6 py-4">
                                        <button onClick={() => handleSuspend(admin.id, `${admin.suspended ? 'unsuspend' : 'suspend'}`)} className={`mr-2 ${admin.suspended ? 'text-red-600 dark:text-red-400' : 'text-yellow-600 dark:text-yellow-400'}`}
                                            title={admin.suspended ? 'Unsuspend' : 'Suspend'}>
                                            <Ban className="w-5 h-5" strokeWidth={4} />
                                        </button>
                                        <button onClick={() => handleDelete(admin.id)} className="text-red-600 dark:text-red-400"
                                            title="Delete Admin">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => { toggleIsOpen(); addAdmin(admin) }} className="text-green-600 dark:text-green-400"
                                            title="Edit Admin">
                                            <Edit2 className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default StaffTable;
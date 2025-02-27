"use client"

import { useState } from "react";
import { toast } from "sonner";
import CryptoJS from "crypto-js";

//Actions, Libs
import deleteAdmin from "@/actions/server/deleteAdmin";
import updateStatus from "@/actions/server/suspendAdmin";


//Libs and Components
import EditDrawer from "./EditDrawer";

//Icons
import { Ban, Trash2, Edit2 } from 'lucide-react';


const StaffTable = ({ admins }: { admins: Admin[] }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectAdmin, setSelectAdmin] = useState<Admin>()

    //Functions
    function decryptPassword(encryptedText: string): string {
        const bytes = CryptoJS.AES.decrypt(encryptedText, "sir-john-spelling-bee");
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    const toggleIsOpen = () => {
        setIsOpen((prev) => !prev)
    }

    const addAdmin = (selectedAdmin: Admin) => {
        setSelectAdmin(selectedAdmin)
    }

    const handleSuspend = async (id: string, type: string) => {

        const confirmDelete = window.confirm(`Are you sure you want to ${type} this admin?`);
        if (!confirmDelete) return;

        toast.message(`Updating Suspension Status...`)
        const { success, message } = await updateStatus(id, type);

        if (!success) {
            toast.error("Couldn't delete update admins suspension status now, kindly try again later");
            return;
        }

        toast.success(message);
    }

    const handleDelete = async (id: string) => {

        const confirmDelete = window.confirm(`Are you sure you want to delete this admin?`);
        if (!confirmDelete) return;

        toast.message("Deleting...")

        const { success, message } = await deleteAdmin(id);

        if (!success) {
            toast.error("Couldn't delete admin now, kindly try again later");
            return;
        }

        toast.success(message);
    }

    return (
        <>
            {isOpen && <EditDrawer isOpen={isOpen} onClose={toggleIsOpen} admin={selectAdmin!} />}
            <main>
                <div className="overflow-x-auto">
                    <table className="shadow-md mb-4 rounded-xl min-w-full overflow-hidden">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                    Email
                                </th>
                                <th className="px-6 py-3 font-medium text-xs text-left uppercase">
                                    Password
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
                                        <p>{admin.encryptedPassword ? decryptPassword(admin.encryptedPassword) : "Password Unavailable"}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                            ${admin.role === 'super_admin' ? 'text-green-100 bg-green-600' :
                                                admin.role === 'admin' ? 'text-yellow-100 bg-yellow-600' : ''}`}>
                                            {admin.role === "super_admin" ? "super admin" : "admin"}
                                        </span>
                                    </td>
                                    <td className="flex items-center gap-x-5 px-6 py-4">
                                        <button onClick={() => handleSuspend(admin.id, `${admin.suspended ? 'unsuspend' : 'suspend'}`)} className={`mr-2 ${admin.suspended ? 'text-red-400' : 'text-yellow-400'}`}
                                            title={admin.suspended ? 'Unsuspend Admin' : 'Suspend Admin'}>
                                            <Ban className="w-5 h-5" strokeWidth={4} />
                                        </button>
                                        <button onClick={() => handleDelete(admin.id)} className="text-red-400"
                                            title="Delete Admin">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                        <button onClick={() => { toggleIsOpen(); addAdmin(admin) }} className="text-green-400"
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
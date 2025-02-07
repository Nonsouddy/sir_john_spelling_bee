"use client"

import { usePathname } from "next/navigation";

//Libs and Icons
import { formatSubheading } from "@/lib/format";
import { ArrowRight2, LogoutCurve } from "iconsax-react";

const AdminHeader = () => {

    const pathName = usePathname()
    const updatedPathname = pathName.replace(/^\/admin\//, "");

    return (
        <main className="bg-lightBlack px-2 sm:px-3 md:px-4 lg:px-2 xl:px-4 2xl:px-6 py-3">
            <div className="flex items-center gap-x-1 md:gap-x-2 xl:gap-x-3 text-gray-500">
                <p>Main Menu</p>
                <p><ArrowRight2 size="18" color="#6b7280" /></p>
                <p className="font-semibold text-white capitalize">{updatedPathname}</p>
            </div>
            <div className="flex flex-col gap-y-2 mt-8 text-textLight">
                <div className="flex justify-between items-center my-2 lg:my-0">
                    <p className="font-semibold text-xl md:text-2xl xl:text-3xl capitalize">{updatedPathname}</p>
                    <p className="inline-flex gap-x-1 lg:hidden font-bold text-red-400 cursor-pointer"><span>Logout</span><LogoutCurve color="#f87171" size={18} variant="Bold" /></p>
                </div>
                <p>{formatSubheading(updatedPathname)}</p>
            </div>
        </main>
    );
}

export default AdminHeader;
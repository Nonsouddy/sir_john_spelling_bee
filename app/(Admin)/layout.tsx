import { permanentRedirect } from "next/navigation";

//Actions
import getCurrentUser from "@/actions/fetch/currentUser";
import getAdmin from "@/actions/fetch/getAdmin";

//Components
import DownBar from "@/components/Downbar";
import SideBar from "@/components/SideBar";
import AdminHeader from "@/components/AdminHeader";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {

    const userDetails = await getCurrentUser();
    const currentAdmin = await getAdmin(userDetails.id);

    //If suspended, redirect to the suspended page
    if (currentAdmin.suspended) {
        permanentRedirect("/unauthorised")
    }


    return (
        <main className="bg-black h-dvh font-inter text-textLight overflow-y-auto" suppressHydrationWarning>
            <section className="mainWidth">
                <AdminHeader />
                <div className="px-2 sm:px-3 md:px-4 lg:px-2 xl:px-4 2xl:px-6">
                    {children}
                </div>
            </section>
            <div className="lg:block hidden"><SideBar role={currentAdmin.role} /></div>
            <div className="lg:hidden mt-20 lg:mt-10"><DownBar role={currentAdmin.role} /></div>
        </main>

    )
}
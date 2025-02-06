import { permanentRedirect } from "next/navigation";

//Actions
import getCurrentUser from "@/actions/fetch/currentUser";
import getAdmin from "@/actions/fetch/getAdmin";

//Components
import DownBar from "@/components/Downbar";
import SideBar from "@/components/SideBar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {

    const userDetails = await getCurrentUser();
    const currentAdmin = await getAdmin(userDetails.id);

    //If suspended, redirect to the suspended page
    if (currentAdmin.suspended) {
        permanentRedirect("/unauthorised")
    }


    return (
        <main className="h-dvh overflow-y-auto" suppressHydrationWarning>
            <section className="mainWidth">
                {children}
            </section>
            <div className="lg:block hidden"><SideBar role={currentAdmin.role} /></div>
            <div className="lg:hidden"><DownBar role={currentAdmin.role} /></div>
        </main>

    )
}
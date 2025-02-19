//Components
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default async function PagesLayout({ children }: { children: React.ReactNode }) {

    return (
        <main className="h-dvh overflow-y-auto" suppressHydrationWarning>
            <section>
                <Navbar />
                {children}
                <Footer />
            </section>
        </main>

    )
}
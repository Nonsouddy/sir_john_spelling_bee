
//Actions


//Components


export default async function AdminLayout({ children }: { children: React.ReactNode }) {



    //If suspended, redirect to the suspended page


    return (
        <main className="h-dvh overflow-y-auto" suppressHydrationWarning>
            <main>
                {children}
            </main>
        </main>

    )
}
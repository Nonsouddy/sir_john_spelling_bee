import Link from "next/link";

const Heading = ({ totalEvents, page, Icon }: { totalEvents: number, page: string, Icon: React.ReactNode }) => {
    return (
        <main className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-y-5 my-4">
            <div className="flex items-center gap-x-2">
                {Icon}
                <p className="font-semibold text-base md:text-lg xl:text-xl capitalize">All {page} <sup>{totalEvents}</sup></p>
            </div>
            <Link href={`/admin/${page}/new`} className="bg-primaryYellow hover:bg-inherit px-4 md:px-6 xl:px-8 py-3 border border-primaryYellow rounded-3xl font-medium text-textBlack hover:text-primaryYellow text-center capitalize duration-300">Add New {page}</Link>
        </main>
    );
}

export default Heading;
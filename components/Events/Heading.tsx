import Link from "next/link";

//Icons
import { CalendarTick } from "iconsax-react";

const Heading = ({ totalEvents }: { totalEvents: number }) => {
    return (
        <main className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-y-5 my-4">
            <div className="flex gap-x-2 items-center">
                <CalendarTick size="28" color="#007bff" />
                <p className="font-semibold text-base md:text-lg xl:text-xl">All Events <sup>{totalEvents}</sup></p>
            </div>
            <Link href="/new" className="bg-primaryYellow hover:bg-inherit px-4 md:px-6 xl:px-8 py-3 border border-primaryYellow rounded-3xl font-medium text-textBlack hover:text-primaryYellow duration-300">Create New Event</Link>
        </main>
    );
}

export default Heading;
import Image from 'next/image';
// import { FC, } from 'react';
import { getEvents } from '@/actions/fetch/getEvents';

const borderColors = ["border-accentOrange", "border-heroBlue", "border-yellow600", "border-gray500"];
const backgroundColors = ["bg-orange50", "bg-blue50", "bg-fFFEEB", "bg-gray50"];
const headColors = ["text-orange600", "text-blue600", "text-yellow700", "text-gray700"];
const pColors = ["text-orange800", "text-blue800", "text-yellow800", "text-orange800"];
const desColors = ["text-orange800", "text-blue800", "text-yellow800", "text-textGray"];

export default async function EventsSection(): Promise<JSX.Element> {
    const events = await getEvents();

    return (
        <div className="px-6 py-10">
            <h2 className="text-3xl font-bold text-start mb-8 font-['Comic_Sans_MS'] text-defaultColor">Upcoming Events</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {events.map((event: any, index: number) => (
                    <div key={index} className={`bg-white shadow-md rounded-lg overflow-hidden border-2 ${borderColors[index % borderColors.length]} flex flex-col items-center p-6`}>
                        <div className={`relative w-11/12 h-48 border-4 ${borderColors[index % borderColors.length]} flex justify-center items-center p-4 mx-auto`}>
                            <Image src={event.image} alt={event.title} layout="fill" objectFit="cover" />
                        </div>
                        <div className="p-5 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center font-['Istok_Web']">
                            <div className='w-full sm:w-auto'>
                                <h3 className={`text-xl ${headColors[index % headColors.length]} font-semibold flex font-['Comic_Sans_MS']`}>{event.title}</h3>
                                <p className={`${pColors[index % pColors.length]}`}>{event.description}</p>
                            </div>
                            <div className={`border-2 text-defaultColor ${borderColors[index % borderColors.length]} ${backgroundColors[index % backgroundColors.length]} mt-2 p-1 gap-2 text-sm flex sm:space-x-4 gap-4`}> 
                                <p>Date: {event.date}</p> 
                                <p>Time: {event.time}</p> 
                            </div>
                        </div>
                        <p className={`mt-4 ml-6 font-['Istok_Web'] ${desColors[index % desColors.length]}`}>{event.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// export default EventsSection;
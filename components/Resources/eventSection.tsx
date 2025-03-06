import Image from 'next/image';
import { FC } from 'react';

interface Event {
    title: string;
    description: string;
    date: string;
    time: string;
    image: string;
    details: string;
}

const events: Event[] = [
    {
        title: "The Rapid Fire Round",
        description: "Test your speed and precision!",
        date: "January 10",
        time: "10 AM",
        image: "/Svgs/eventImg1.svg",
        details: "Spellers must quickly spell as many words as possible within a time limit. It’s all about accuracy under pressure—are you ready to think fast?",
    },
    {
        title: "The Word Origin Challenge",
        description: "Dive into the roots of language!",
        date: "January 10",
        time: "10 AM",
        image: "/Svgs/eventImg2.svg",
        details: "Participants spell words while identifying their origins. Discover the beauty of etymology and broaden your vocabulary in this fascinating round.",
    },
    {
        title: "The Team Spelling Showdown",
        description: "Stronger together!",
        date: "January 10",
        time: "10 AM",
        image: "/Svgs/eventImg3.svg",
        details: "Work with your team to tackle tricky words. Collaboration and strategy are key to conquering this exciting group event.",
    },
    {
        title: "The Master Speller Finale",
        description: "The ultimate test of excellence!",
        date: "January 10",
        time: "10 AM",
        image: "/Svgs/eventImg4.svg",
        details: "The top spellers face off in an intense finale to determine the ultimate champion. Who will claim the crown and take home the grand prize?",
    },
];

const borderColors = ["border-accentOrange", "border-heroBlue", "border-yellow600", "border-gray500"];
const backgroundColors = ["bg-orange50", "bg-blue50", "bg-fFFEEB", "bg-gray50"];
const headColors = ["text-orange600", "text-blue600", "text-yellow700", "text-gray700"];
const pColors = ["text-orange800", "text-blue800",  "text-yellow800",  "text-orange800",];
const desColors = ["text-orange800", "text-blue800",  "text-yellow800",  "text-textGray",];

const EventsSection: FC = () => {
    return (
        <div className="px-6 py-10">
            <h2 className="text-3xl font-bold text-start mb-8 font-['Comic_Sans_MS'] text-defaultColor">Upcoming Events</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {events.map((event, index) => (
                    <div key={index} className={`bg-white shadow-md rounded-lg overflow-hidden border-2 ${borderColors[index % borderColors.length]} flex flex-col items-center p-6`}>
                        <div className={`relative w-11/12 h-48 border-4 ${borderColors[(index + 0) % borderColors.length]} flex justify-center items-center p-4 mx-auto`}>
                            <Image src={event.image} alt={event.title} layout="fill" objectFit="cover" className="" />
                        </div>
                        <div className="p-5 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center font-['Istok_Web']">
                            <div className='w-full sm:w-auto'>
                                <h3 className={`text-xl ${headColors[(index + 0) % headColors.length]} font-semibold flex font-['Comic_Sans_MS']`}>{event.title}</h3>
                                <p className={`  ${pColors[(index + 0) % pColors.length]}`}>{event.description}</p>
                            </div>
                            <div className={`border-2  text-defaultColor ${borderColors[(index + 0) % borderColors.length]} ${backgroundColors[(index + 0) % backgroundColors.length]} mt-2 p-1  gap-2 text-sm flex  sm:space-x-4 gap-4`}> 
                                <p>Date:{event.date}</p> 
                                <p>Time:{event.time}</p> 
                            </div>
                        </div>
                        <p className={`mt-4 ml-6 font-['Istok_Web'] ${desColors[(index + 0) % desColors.length]}`}>{event.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsSection;



















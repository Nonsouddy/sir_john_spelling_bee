import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

interface Event {
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  details: string;
}

const borderColors = ["border-accentOrange", "border-heroBlue", "border-yellow600", "border-gray500"];
const backgroundColors = ["bg-orange50", "bg-blue50", "bg-fFFEEB", "bg-gray50"];
const headColors = ["text-orange600", "text-blue600", "text-yellow700", "text-gray700"];
const pColors = ["text-orange800", "text-blue800", "text-yellow800", "text-orange800"];
const desColors = ["text-orange800", "text-blue800", "text-yellow800", "text-textGray"];

const EventsSection: FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/event');
        
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="px-6 py-10 flex justify-center items-center">
        <p className="text-xl">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-6 py-10 flex justify-center items-center">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  // Fallback to empty array if events is undefined
  const eventsList = events || [];

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold text-start mb-8 font-['Comic_Sans_MS'] text-defaultColor">
        Upcoming Events
      </h2>
      {eventsList.length === 0 ? (
        <p className="text-center text-gray-500">No upcoming events at the moment.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {eventsList.map((event, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg overflow-hidden border-2 ${borderColors[index % borderColors.length]} flex flex-col items-center p-6`}
            >
              <div
                className={`relative w-11/12 h-48 border-4 ${borderColors[index % borderColors.length]} flex justify-center items-center p-4 mx-auto`}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-5 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center font-['Istok_Web']">
                <div className="w-full sm:w-auto">
                  <h3
                    className={`text-xl ${headColors[index % headColors.length]} font-semibold flex font-['Comic_Sans_MS']`}
                  >
                    {event.title}
                  </h3>
                  <p className={`${pColors[index % pColors.length]}`}>
                    {event.description}
                  </p>
                </div>

                <div
                  className={`border-2 text-defaultColor ${borderColors[index % borderColors.length]} ${backgroundColors[index % backgroundColors.length]} mt-2 p-1 gap-2 text-sm flex sm:space-x-4`}
                >
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                </div>
              </div>

              <p
                className={`mt-4 ml-6 font-['Istok_Web'] ${desColors[index % desColors.length]}`}
              >
                {event.details}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsSection;
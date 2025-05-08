import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { makeApiRequest } from "@/lib/apiUtils"; 

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
        const response = await makeApiRequest(
          '/event', // Endpoint (baseURL is already set to /api in makeApiRequest)
          'get',
          undefined, // No data needed for GET request
          {
            onSuccess: (res) => {
              console.log('Events fetched successfully');
            },
            onError: (err) => {
              setError(`Failed to load events: ${err.message}`);
            }
          }
        );
        
        setEvents(response.data);
      } catch (err) {
        // Error is already handled by onError callback
        console.error('Error in fetchEvents function:', err);
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
    <div className="px-4 sm:px-6 py-10 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-start mb-6 sm:mb-8 font-['Comic_Sans_MS'] text-defaultColor">
        Upcoming Events
      </h2>
      {eventsList.length === 0 ? (
        <p className="text-center text-gray-500">No upcoming events at the moment.</p>
      ) : (
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
          {eventsList.map((event, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg overflow-hidden border-2 ${borderColors[index % borderColors.length]} flex flex-col items-center p-3 sm:p-6 w-full`}
            >
              <div
                className={`relative w-full border-2 rounded-lg ${borderColors[index % borderColors.length]} overflow-hidden`}
                style={{ minHeight: "200px", maxHeight: "400px" }}
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                  priority
                />
              </div>

              <div className="p-3 sm:p-5 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center font-['Istok_Web'] mt-2">
                <div className="w-full sm:w-auto">
                  <h3
                    className={`text-lg sm:text-xl ${headColors[index % headColors.length]} font-semibold flex font-['Comic_Sans_MS']`}
                  >
                    {event.title}
                  </h3>
                  <p className={`${pColors[index % pColors.length]} text-sm sm:text-base`}>
                    {event.description}
                  </p>
                </div>

                <div
                  className={`border-2 text-defaultColor ${borderColors[index % borderColors.length]} ${backgroundColors[index % backgroundColors.length]} mt-2 p-1 gap-1 sm:gap-2 text-xs sm:text-sm flex sm:space-x-4`}
                >
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                </div>
              </div>

              <p
                className={`mt-2 sm:mt-4 mx-3 sm:ml-6 text-sm sm:text-base font-['Istok_Web'] ${desColors[index % desColors.length]}`}
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
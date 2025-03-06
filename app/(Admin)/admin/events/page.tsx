//Actions
import getEvents from "@/actions/fetch/getEvents";

//Components
import Heading from "@/components/Heading";
import EventList from "@/components/Events/EventList";

//Icons
import { CalendarTick } from "iconsax-react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
const page = async () => {

  const events = await getEvents();

  return (
    <main>
      <Heading totalEvents={events.length} page="events" Icon={<CalendarTick variant="Bold" size="28" color="#007bff" />} />
      <EventList events={events} />
    </main>
  );
}

export default page;
//Actions
import getEvents from "@/actions/fetch/getEvents";

//Components
import Heading from "@/components/Events/Heading";
import EventList from "@/components/Events/EventList";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
const page = async () => {

  const events = await getEvents();

  return (
    <main>
      <Heading totalEvents={events.length} />
      <EventList events={events} />
    </main>
  );
}

export default page;
//Actions
import getEvents from "@/actions/fetch/getEvents";

//Components
import Heading from "@/components/Events/Heading";
import EventList from "@/components/Events/EventList";

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
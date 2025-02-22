//Actions
import getEvents from "@/actions/fetch/getEvents";

//Components
import Heading from "@/components/Events/Heading";

const page = async () => {

  const events = await getEvents();

  return (
    <main>
      <Heading totalEvents={events.length} />
    </main>
  );
}

export default page;
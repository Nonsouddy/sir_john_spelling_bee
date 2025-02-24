"use client"
import { toast } from "sonner";

//Actions
import deleteEvent from "@/actions/server/deleteEvent";

//Component
import EventCard from "./EventCard";

export default function EventList({ events }: { events: EventProperties[] }) {

    const handleEdit = async (id: string) => {

        // Implement your edit logic here
        console.log(`Editing event with id: ${id}`)
    }

    const handleDelete = async (id: string) => {

        const confirmDelete = window.confirm("Are you sure you want to delete this event?");
        if (!confirmDelete) return;

        toast.info("Deleting event...")
        const { success, message } = await deleteEvent(id);

        if (!success) {
            toast.error("Couldn't delete event now, kindly try again later");
            return;
        }

        toast.success(message);
    };



    return (
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
                <EventCard key={event.id} event={event} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
        </div>
    )
}
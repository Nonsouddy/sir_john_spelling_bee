"use client"

//Component
import EventCard from "./EventCard";

export default function EventList({ events }: { events: EventProperties[] }) {

    const handleEdit = (id: string) => {
        // Implement your edit logic here
        console.log(`Editing event with id: ${id}`)
    }

    const handleDelete = (id: string) => {
        // Implement your delete logic here
        console.log(`Deleting event with id: ${id}`)
    }


    return (
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
                <EventCard key={event.id} event={event} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
        </div>
    )
}
"use client"

import { toast } from "sonner";
import { useState } from "react";

//Actions
import deleteEvent from "@/actions/server/deleteEvent";

//Component
import EventCard from "./EventCard";
import UpdateForm from "./UpdateForm";

export default function EventList({ events }: { events: EventProperties[] }) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedEvent, setSelectedEvent] = useState<EventProperties>()

    //Functions
    const handleEdit = async (event: EventProperties) => {
        setIsOpen((prev) => !prev);
        setSelectedEvent(event)
    }

    const toggleOpen = () => setIsOpen((prev) => !prev)

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
        <>
            {isOpen && <UpdateForm toggleFn={toggleOpen} event={selectedEvent} />}
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} onEdit={handleEdit} onDelete={handleDelete} />
                ))}
            </div>
        </>

    )
}
"use client"

import { toast } from "sonner";

//Actions
import deleteGalleryItem from "@/actions/server/deleteImages";

//Components
import GalleryCard from "./GalleryCard";

const GalleryList = ({ gallery }: { gallery: Gallery[] }) => {

    //Functions
    const handleDelete = async (id: string) => {

        const confirmDelete = window.confirm("Are you sure you want to delete this images?");
        if (!confirmDelete) return;

        toast.info("Deleting images...")
        const { success, message } = await deleteGalleryItem(id);

        if (!success) {
            toast.error("Couldn't delete images now, kindly try again later");
            return;
        }

        toast.success(message);
    };

    return (
        <main className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((items) => (
                <GalleryCard key={items.id} gallery={items} onDelete={handleDelete} />
            ))}
        </main>
    );
}

export default GalleryList;
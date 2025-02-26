"use client"

import { useState } from "react";
import Image from "next/image";

//Components
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

//Icons and Images
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Trash, Edit } from "iconsax-react";
import logo from "../../public/Svgs/Logo.svg";
import { formatDate } from "@/lib/format";

function EventCard({ event, onEdit, onDelete }: { event: EventProperties; onEdit: (event: EventProperties) => void; onDelete: (id: string) => void; }) {

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1 >= event.images.length ? 0 : prevIndex + 1))
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 < 0 ? event.images.length - 1 : prevIndex - 1))
    }

    return (
        <Card className="overflow-hidden">
            <div className="relative h-52">
                <Image src={event.images[currentImageIndex] || logo} alt={event.name} fill className="object-cover object-top" priority />
                {event.images.length > 1 && (
                    <>
                        <button onClick={prevImage} className="top-1/2 left-2 absolute bg-black bg-opacity-50 p-1 rounded-full text-white -translate-y-1/2 transform">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button onClick={nextImage} className="top-1/2 right-2 absolute bg-black bg-opacity-50 p-1 rounded-full text-white -translate-y-1/2 transform">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </>
                )}
            </div>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle className="font-semibold text-normalBlue text-sm md:text-base xl:text-lg">{event.name}</CardTitle>
                    <div className="flex gap-x-3">
                        <Button className="bg-[#EB8733]" size="icon" onClick={() => onEdit(event)}>
                            <Edit size="18" color="#FFF" />
                            <span className="sr-only">Edit</span>
                        </Button>
                        <Button className="bg-[#dc2626]" size="icon" onClick={() => onDelete(event.id)}>
                            <Trash size="18" color="#FFF" />
                            <span className="sr-only">Delete</span>
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="flex items-center mb-2 text-muted-foreground">
                    <MapPin className="mr-2 w-4 h-4" />
                    {event.venue}
                </p>
                <p className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 w-4 h-4" />
                    {formatDate(event.date)}
                </p>
                <p className="mt-4 text-normalBlue">Other Details</p>
                <div className="h-fit max-h-40 overflow-y-auto">
                    {event.otherDetails ?
                        <p className="mt-2 whitespace-pre-line">{event.otherDetails}</p>
                        : <p>No other details.</p>
                    }
                </div>
            </CardContent>
            <CardFooter className="text-muted-foreground text-xs">
                Created: {new Date(event.createdAt).toLocaleDateString()}
            </CardFooter>
        </Card>
    )
}

export default EventCard;
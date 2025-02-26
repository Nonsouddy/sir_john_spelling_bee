"use client"

import { useState } from "react";
import Image from "next/image";

//Components
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

//Images and Icons
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Trash, Edit } from "iconsax-react";
import logo from "../../public/Svgs/Logo.svg";

const GalleryCard = ({ gallery, onDelete }: { gallery: Gallery, onDelete: (id: string) => void; }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1 >= gallery.images.length ? 0 : prevIndex + 1))
    }

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 < 0 ? gallery.images.length - 1 : prevIndex - 1))
    }


    return (
        <Card className="overflow-hidden">
            <div className="relative h-52">
                <Image src={gallery.images[currentImageIndex] || logo} alt={"gallery images"} fill className="object-cover object-top" priority />
                {gallery.images.length > 1 && (
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
                <Button className="bg-[#dc2626]" size="icon" onClick={() => onDelete(gallery.id)}>
                    <Trash size="18" color="#FFF" />
                    <span className="sr-only">Delete</span>
                </Button>
            </CardHeader>
            <CardContent>
                <p className="mt-4 text-normalBlue">Description</p>
                <div className="h-fit max-h-40 overflow-y-auto">
                    {gallery.description ?
                        <p className="mt-2 whitespace-pre-line">{gallery.description}</p>
                        : <p>No Description.</p>
                    }
                </div>
            </CardContent>
            <CardFooter className="text-muted-foreground text-xs">
                Created: {new Date(gallery.createdAt).toLocaleDateString()}
            </CardFooter>
        </Card>
    );
}

export default GalleryCard;
"use client"

import { toast } from "sonner";

//Actions
import deleteMaterial from "@/actions/server/deleteMaterial";

//Components
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

//Icons
import { Trash, DocumentText1 } from "iconsax-react";
import { Download } from "lucide-react";


export default function MaterialsDisplay({ materials }: MaterialsDisplayProps) {
    console.log("The materials", materials)
    const handleDelete = async (id: string) => {

        const confirmDelete = window.confirm("Are you sure you want to delete this material?");
        if (!confirmDelete) return;

        toast.info("Deleting event...")
        const { success, message } = await deleteMaterial(id);

        if (!success) {
            toast.error("Couldn't delete event now, kindly try again later");
            return;
        }

        toast.success(message);
    };

    return (
        <main className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {materials.map((material) => (
                <Card key={material.id}>
                    <CardHeader className="flex flex-row justify-between items-center">
                        <CardTitle className="flex items-center">
                            <DocumentText1 className="mr-2 size-5 md:size-6 xl:size-7" color="#16a34a" variant="Bold" />
                            {material.title}
                        </CardTitle>
                        <Trash onClick={() => handleDelete(material.id)} className="size-5 md:size-6 xl:size-7 cursor-pointer" color="#dc2626" variant="Bold" />
                    </CardHeader>
                    <CardContent>
                        <p className="capitalize">
                            <strong>Author:</strong> {material.author || "N/A"}
                        </p>
                        <p>
                            <strong>Type:</strong> {material.type}
                        </p>
                        <p>
                            <strong>Size:</strong> {material.size}MB
                        </p>
                        {material.body && <p className="mt-2">{material.body}</p>}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <span>
                            Created: {new Date(material.createdAt).toLocaleDateString()}
                        </span>
                        <Button asChild size="sm">
                            <a href={material.downloadLink} download>
                                <Download className="mr-2 w-4 h-4" />
                                Download
                            </a>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </main>
    )
}


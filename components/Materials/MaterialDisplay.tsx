"use client"

import { useState } from "react"
import { Table } from "@/components/ui/table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileIcon, Grid, List } from "lucide-react"



export default function MaterialsDisplay({ materials }: MaterialsDisplayProps) {
    const [view, setView] = useState<"table" | "grid">("table")

    const formatFileSize = (size: number) => {
        const units = ["B", "KB", "MB", "GB", "TB"]
        let unitIndex = 0
        while (size >= 1024 && unitIndex < units.length - 1) {
            size /= 1024
            unitIndex++
        }
        return `${size.toFixed(2)} ${units[unitIndex]}`
    }

    const TableView = () => (
        <Table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Created</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {materials.map((material) => (
                    <tr key={material.id}>
                        <td>{material.title}</td>
                        <td>{material.author || "N/A"}</td>
                        <td>{material.type}</td>
                        <td>{formatFileSize(material.size)}</td>
                        <td>{new Date(material.createdAt).toLocaleDateString()}</td>
                        <td>
                            <Button asChild size="sm">
                                <a href={material.downloadLink} download>
                                    <Download className="mr-2 w-4 h-4" />
                                    Download
                                </a>
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )

    const GridView = () => (
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => (
                <Card key={material.id}>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <FileIcon className="mr-2 w-4 h-4" />
                            {material.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>
                            <strong>Author:</strong> {material.author || "N/A"}
                        </p>
                        <p>
                            <strong>Type:</strong> {material.type}
                        </p>
                        <p>
                            <strong>Size:</strong> {formatFileSize(material.size)}
                        </p>
                        {material.body && <p className="mt-2">{material.body}</p>}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
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
        </div>
    )

    return (
        <div>
            <div className="flex justify-end mb-4">
                <Button variant="outline" size="sm" onClick={() => setView("table")} className="mr-2">
                    <List className="mr-2 w-4 h-4" />
                    Table
                </Button>
                <Button variant="outline" size="sm" onClick={() => setView("grid")}>
                    <Grid className="mr-2 w-4 h-4" />
                    Grid
                </Button>
            </div>
            {view === "table" ? <TableView /> : <GridView />}
        </div>
    )
}


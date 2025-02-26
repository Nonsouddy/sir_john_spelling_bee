import Link from "next/link";

//Components
import { Button } from "@/components/ui/button";

//Icons
import { Shield } from "lucide-react";


export default function UnauthorizedPage() {
    return (
        <div className="flex justify-center items-center bg-background min-h-screen">
            <div className="text-center">
                <Shield className="mx-auto mb-4 w-16 h-16 text-gray-500" />
                <h1 className="mb-4 font-bold text-2xl md:text-3xl xl:text-4xl">Unauthorized Access</h1>
                <p className="mb-8 text-gray-500 text-xl">Sorry, you don't have permission to access this page.</p>
                <div className="space-x-4">
                    <Button asChild>
                        <Link href="/">Go to Homepage</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/login">Log In</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}


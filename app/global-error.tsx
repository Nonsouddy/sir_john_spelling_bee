"use client"

import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {


    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h2 className="mb-4 font-bold text-2xl">Something went wrong!</h2>
            <button onClick={() => reset()} className="bg-primaryYellow hover:bg-inherit hover:bg-yellow-500 px-8 py-3 rounded-3xl text-textBlack duration-300">
                Try again
            </button>
        </div>
    )
}


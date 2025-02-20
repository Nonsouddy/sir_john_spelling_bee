import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center min-h-dvh">
            <h2 className="mb-4 font-bold text-lg md:text-xl xl:text-2xl">404 - Page Not Found</h2>
            <p className="mb-4">Sorry, the page you are looking for doesn't exist.</p>
            <button className="bg-primaryYellow hover:bg-inherit hover:bg-yellow-500 px-8 py-3 rounded-3xl text-textBlack duration-300">
                <Link href="/">Go back home</Link>
            </button>
        </div>
    )
}
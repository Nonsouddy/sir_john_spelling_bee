//Icons
import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-dvh">
      <Loader2 className="w-10 h-10 text-primary animate-spin" />
      <h2 className="mt-4 font-semibold text-normalBlue text-xl">Loading...</h2>
    </div>
  )
}
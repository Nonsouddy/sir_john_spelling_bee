"use client"

import { motion } from "framer-motion"
import { Construction, Sparkles, Timer } from "lucide-react"

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
}

const pulse = {
    animate: {
        scale: [1, 1.1, 1],
        transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
        },
    },
}

export default function MaintenancePage({ page }: { page: string }) {
    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 dark:from-gray-900 to-gray-100 dark:to-gray-800 p-4 min-h-screen">

            <div className="relative z-[2] mx-auto max-w-2xl text-center">
                <motion.div initial="initial" animate="animate" variants={pulse} className="inline-block mb-8">
                    <div className="relative">
                        <Construction className="w-20 h-20 text-blue-500 dark:text-blue-400" />
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 8,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                            }}
                            className="-top-1 -right-1 absolute"
                        >
                            <Sparkles className="w-6 h-6 text-yellow-500" />
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={fadeInUp} className="space-y-6">
                    <div>
                        <h1 className="text-base text-gray-900 md:text-lg xl:text-2xl dark:text-white">{page}</h1>
                        <h1 className="font-black font-comic text-3xl text-gray-900 md:text-4xl xl:text-5xl dark:text-white">Coming Soon</h1>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base xl:text-lg dark:text-gray-300">
                        We're working hard to bring you something amazing. Our team is putting the finishing touches on this page.
                    </p>

                    <div className="flex justify-center items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Timer className="w-5 h-5" />
                        <span>Estimated completion: Soon™</span>
                    </div>

                    <div className="bg-gray-200 dark:bg-gray-700 mx-auto rounded-full w-full max-w-md h-2 overflow-hidden">
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "75%" }}
                            transition={{
                                duration: 2,
                                ease: "easeOut",
                            }}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-full"
                        />
                    </div>

                    <div className="gap-6 grid grid-cols-1 md:grid-cols-3 pt-8 font-comic">
                        {["Amazing Features", "Beautiful Design", "Smooth Experience"].map((feature, index) => (
                            <motion.div
                                key={feature}
                                initial="initial"
                                animate="animate"
                                variants={{
                                    initial: { opacity: 0, y: 20 },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            delay: 0.2 * index,
                                        },
                                    },
                                }}
                                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                                <p className="font-semibold text-gray-900 dark:text-white">{feature}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}


import Image from 'next/image';
import { motion } from 'framer-motion';

// Import your images
import step1 from '../../public/Images/step1.png';
import step2 from '../../public/Images/step2.png';
import step3 from '../../public/Images/step3.png';
import step4 from '../../public/Images/step4.png';
import Ellipse3 from '../../public/Svgs/Ellipse 3.svg';
import Ellipse7 from '../../public/Svgs/Ellipse7.svg';
import Ellipse8 from '../../public/Svgs/Ellipse8.svg';
import Ellipse9 from '../../public/Svgs/Ellipse9.svg';
import Ellipse10 from '../../public/Svgs/Ellipse10.svg';
import polygon3 from '../../public/Svgs/polygon-3.svg';

const HomeRegisterSection = () => {
    // Animation variants for the container and steps
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="py-16 overflow-hidden relative bg-white">
            <motion.div 
                className="container mx-auto max-w-full font-['Comic_Sans_MS']"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <div className="mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-18">
                        {/* Left column */}
                        <div className="relative bg-regSectionBg1 p-4 sm:p-8 w-full rounded-lg">
                            {/* Step 1 */}
                            <motion.div 
                                className="flex flex-col items-center md:items-start md:flex-row mb-12 md:mb-16 relative"
                                variants={itemVariants}
                            >
                                <div className="w-full p-2 sm:p-8 flex flex-col items-center md:items-start justify-center md:justify-item-start mx-auto transition-transform duration-300 hover:-translate-y-1">
                                    <motion.div 
                                        className="mb-4 w-full max-w-xs"
                                        whileHover={{ rotate: [0, -3, 3, 0], transition: { duration: 0.5 } }}
                                    >
                                        <Image src={step1} alt="Registration step" className="w-full h-auto" />
                                    </motion.div>
                                    <p className="w-full text-center md:text-start text-textGray md:w-[56%] lg:w-[56%]">
                                        Sign up online and secure your spot in the competition. Schools can register multiple students for discounted rates!
                                    </p>
                                </div>
                                <motion.div 
                                    className="absolute left-[75%] top-1/4 md:right-0 hidden md:block"
                                    animate={{ 
                                        y: [-5, 5, -5],
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }
                                    }}
                                >
                                    <Image src={Ellipse9} alt="" width={64} height={64} className="w-16 h-16" />
                                </motion.div>
                            </motion.div>

                            {/* Vector connection */}
                            <div className="relative hidden md:block">
                                {/* Vector connection placeholder */}
                            </div>

                            {/* Step 2 */}
                            <motion.div 
                                className="flex flex-col items-center md:items-end md:flex-row md:justify-end mb-12 md:mb-16 mt-12 md:mt-24 relative"
                                variants={itemVariants}
                            >
                                <motion.div 
                                    className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:block"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        transition: {
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }
                                    }}
                                >
                                    <div className="relative">
                                        <Image src={Ellipse7} alt="" width={32} height={32} className="w-8 h-8" />
                                    </div>
                                    <motion.div 
                                        className="absolute top-[100px] rotate-[-53.62deg]"
                                        animate={{
                                            rotate: [-53.62, -60, -53.62],
                                            transition: { 
                                                duration: 3, 
                                                repeat: Infinity 
                                            }
                                        }}
                                    >
                                        <Image src={polygon3} alt="" width={40} height={48} className="w-24 h-24" />
                                    </motion.div>
                                </motion.div>

                                <div className="p-2 sm:p-8 flex flex-col items-center md:items-end mx-auto transition-transform duration-300 hover:-translate-y-1">
                                    <motion.div 
                                        className="mb-4 w-full max-w-xs"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Image src={step2} alt="Registration step" className="relative w-full h-auto" />
                                    </motion.div>
                                    <p className="w-full text-center md:text-start textGray md:w-[56%] lg:w-[56%]">
                                        Gain access to official study guides, word lists, and tips to help you prepare like a pro.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Vector connections */}
                            <div className="relative hidden md:block">
                                {/* Vector connections placeholder */}
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="relative bg-regSectionBg2 w-full rounded-lg p-4 sm:p-8">
                            {/* Step 3 */}
                            <motion.div 
                                className="flex flex-col items-center md:items-start md:flex-row md:justify-start relative"
                                variants={itemVariants}
                            >
                                <div className="p-2 sm:p-8 flex flex-col items-center md:items-start mx-auto transition-transform duration-300 hover:-translate-y-1">
                                    <motion.div 
                                        className="mb-4 w-full max-w-xs"
                                        whileHover={{ y: -10, transition: { yoyo: Infinity, duration: 0.5 } }}
                                    >
                                        <Image src={step3} alt="Registration step" className="w-full h-auto" />
                                    </motion.div>
                                    <p className="w-full text-center md:text-start textGray md:w-[56%] lg:w-[56%]">
                                        Show off your skills at the state-level competition and qualify for the national stage.
                                    </p>
                                </div>

                                <motion.div 
                                    className="gap-6 flex flex-row items-center justify-start hidden md:flex"
                                    animate={{ 
                                        y: [0, -5, 0], 
                                        transition: { 
                                            duration: 2, 
                                            repeat: Infinity 
                                        } 
                                    }}
                                >
                                    <div>
                                        <Image src={Ellipse8} alt="" width={64} height={64} className="w-24 h-24" />
                                    </div>
                                    <motion.div 
                                        className="ml-4 rotate-[-90.78deg] -mt-8"
                                        animate={{
                                            rotate: [-90.78, -100, -90.78],
                                            transition: { 
                                                duration: 4, 
                                                repeat: Infinity 
                                            }
                                        }}
                                    >
                                        <Image src={Ellipse3} alt="" width={64} height={64} className="w-14 h-14" />
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            {/* Vector connection */}
                            <div className="relative hidden md:block">
                                {/* Vector connection placeholder */}
                            </div>

                            {/* Step 4 */}
                            <motion.div 
                                className="flex flex-col items-center md:items-end md:flex-row md:justify-end mb-12 md:mb-24 relative mt-12 md:mt-24"
                                variants={itemVariants}
                            >
                                <motion.div 
                                    className="absolute left-[20%] top-1/4 md:right-0 hidden md:block"
                                    animate={{ 
                                        rotate: [0, 360],
                                        transition: { 
                                            duration: 10, 
                                            repeat: Infinity, 
                                            ease: "linear" 
                                        }
                                    }}
                                >
                                    <Image src={Ellipse10} alt="" width={64} height={64} className="w-16 h-16" />
                                </motion.div>

                                <div className="p-2 sm:p-8 flex flex-col items-center md:items-end mx-auto transition-transform duration-300 hover:-translate-y-1">
                                    <motion.div 
                                        className="mb-4 w-full max-w-xs"
                                        whileHover={{ 
                                            boxShadow: "0px 0px 8px 4px rgba(255,215,0,0.6)",
                                            transition: { duration: 0.3 }
                                        }}
                                    >
                                        <Image src={step4} alt="Registration step" className="w-full h-auto" />
                                    </motion.div>
                                    <p className="w-full text-center md:text-start text-textGray md:w-[56%] lg:w-[56%]">
                                        Compete with the best spellers across Nigeria for the ultimate prize and recognition!
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default HomeRegisterSection;
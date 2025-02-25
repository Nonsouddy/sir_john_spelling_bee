
import Image from 'next/image';

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
import vector7 from '../../public/Svgs/vector7.svg';
import vector8 from '../../public/Svgs/vector8.svg';
import vector9 from '../../public/Svgs/vector9.svg';
import vector10 from '../../public/Svgs/vector10.svg';
import vector11 from '../../public/Svgs/vector11.svg';


const HomeRegisterSection = () => {
    return (
        <section className="py-16 overflow-hidden relative bg-white">
            <div className="container mx-auto max-w-full font-['Comic_Sans_MS']">
                <div className="mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-18">
                        {/* Left column */}
                        <div className="relative bg-regSectionBg1 p-8 w-full rounded-lg ">
                            {/* Step 1 */}
                            <div className="flex flex-col md:flex-row items-start mb-16 relative ">
                                <div className=" w-full p-8 flex flex-col items-start justify-item-start mx-auto transition-transform duration-300 hover:-translate-y-1">
                                    <div className="mb-4 ">
                                        <Image src={step1} alt="Registration step" className="w-full h-auto" />
                                    </div>
                                    <p className=" w-full text-start text-textGray  md:w-[56%] lg:w-[56%]">
                                        Sign up online and secure your spot in the competition.Schools can register multiple students for discounted rates!
                                    </p>
                                </div>
                                <div className="absolute left-[75%] top-1/4 md:right-0 hidden md:block">
                                    <Image src={Ellipse9} alt="" width={64} height={64} className="w-16 h-16" />
                                </div>
                            </div>

                            {/* Vector connection */}
                            <div className="relative hidden md:block">
                                {/* <Image  
                  src={vector7} 
                  alt="" 
                  width={200}
                  height={100}
                  className="absolute transform -translate-y-[100%] translate-x-[155%] "
                /> */}
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col md:flex-row items-center justify-start mb-16 mt-24 relative">
                                <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:block">
                                    <div className="relative">
                                        <Image src={Ellipse7} alt="" width={32} height={32} className="w-8 h-8" />
                                    </div>
                                    <div className="absolute  top-[100px]  rotate-[-53.62deg]">
                                        <Image src={polygon3} alt="" width={40} height={48} className="w-24 h-24" />
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col items-end mx-auto transition-transform duration-300 hover:-translate-y-1 sm:items-start">
                                    <div className="mb-4">
                                        <Image src={step2} alt="Registration step" className=" relative w-full h-auto " />
                                    </div>
                                    <p className="w-full text-start textGray md:w-[56%] lg:w-[56%]">
                                        Gain access to official study guides, word lists, and tips to help you prepare like a pro.
                                    </p>
                                </div>
                            </div>

                            {/* Vector connections */}
                            <div className="relative hidden md:block">
                                {/* <Image src={vector8} alt="" 
                width={256} height={128} 
                className="absolute transform -translate-y-[160%] translate-x-[174%] z-10 "
                 /> */}
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="relative bg-regSectionBg2 w-full rounded-lg p-8">
                            {/* Step 3 */}
                            <div className="flex flex-col md:flex-row items-center justify-start  relative">
                                <div className="p-8 flex flex-col items-start mx-auto transition-transform duration-300 hover:-translate-y-1">
                                    <div className="mb-4">
                                        <Image src={step3} alt="Registration step" className="w-full h-auto" />
                                    </div>
                                    <p className="w-full text-start textGray md:w-[56%] lg:w-[56%]">
                                        Show off your skills at the state-level competition and qualify for the national stage.
                                    </p>
                                </div>

                                <div className=" gap-6 flex flex-row items-center justify-start hidden md:flex">
                                    <div>
                                        <Image src={Ellipse8} alt=""  width={64} height={64} className="w-24 h-24" />
                                    </div>
                                    <div className="ml-4 rotate-[-90.78deg] -mt-8">
                                        <Image src={Ellipse3} alt=""  width={64} height={64} className="w-14 h-14" />
                                    </div>
                                </div>

                            </div>


                            {/* Vector connection */}
                            <div className="relative hidden md:block">
                                {/* <Image 
                  src={vector11} 
                  alt="" 
                  width={200}
                  height={100}
                  className="absolute transform -translate-x-1/2 w-full max-w-xs" 
                /> */}
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col md:flex-row items-center justify-start mb-24 relative mt-24">
                                <div className="absolute left-[20%] top-1/4 md:right-0 hidden md:block">
                                    <Image src={Ellipse10} alt="" width={64} height={64} className="w-16 h-16" />
                                </div>

                                <div className=" p-8 flex flex-col items-end mx-auto transition-transform duration-300 hover:-translate-y-1 sm:items-start">
                                    <div className="mb-4">
                                        <Image src={step4} alt="Registration step" className="w-full h-auto" />
                                    </div>
                                    <p className="w-full text-start text-textGray md:w-[56%] lg:w-[56%]">
                                        Compete with the best spellers across Nigeria for the ultimate prize and recognition!
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeRegisterSection;
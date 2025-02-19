import Image from "next/image"
import MissionTag from '../../public/Svgs/mission.svg'
import VisionTag from '../../public/Svgs/vision.svg'
import beeImage from '../../public/Images/beeImage.png'


function MissionAndVission() {
    return (
        <>
            <div className="min-h-screen w-full ">
                <div className="mx-auto sm:px-0 md:overflow-hidden lg:overflow-hidden ">
                    <div className="grid grid-cols-1 md:flex lg:flex lg:gap-2 mb-8 md:mt-0 gap-6 sm:mt-0 gap-0">
                        <div className="w-full md:w-full lg:w-[695px] md:h-[500px] lg:h-[700px] lg:ml-0 lg:mt-[50px]  bg-heroBlue rounded-none md:rounded-r-xl lg:rounded-r-2xl">
                       
                            <div className="mx-auto my-auto flex-items-center justify-center lg:w-[450px] lg:h-[250px] md:w-[200px] h-[200px] sm:h-[200px] mt-[40px] w-[300px] bg-cover bg-center bg-no-repeat rounded-lg">
                                <Image className='w-full h-full object-cover' src={VisionTag} alt='School Image' />
                            </div>





                            <div className="flex flex-col items-center gap-3 mx-auto md:mx-0 w-[90%] sm:w-[375px] md:w-[451px]  h-[150px] sm:h-[170px] mt-[50px] sm:text-center md:h-[187px]  md:ml-[20px] md:mt-[50px] p-0">
                                < h2 className="w-[90%] sm:w-[350px] md:w-[451px] h-[50px] sm:h-[60px] md:h-[66px] font-['Comic_Sans_MS'] font-bold  text-3xl sm:text-4xl md:text-[48px] leading-[112%] text-center text-accentOrange mx-auto md:mx-0 flex-none order-0 self-stretch ">
                                    Vission </h2>
                                <p className="w-[90%] sm:w-[350px]  md:w-[451px] h-auto min-h-[70px] sm:min-h-[80px] md:min-h-[92px] font-['Istok_Web'] font-normal  text-base sm:text-lg md:text-2xl leading-relaxed md:leading-[35px] text-center text-gray-900 mx-auto md:mx-0 flex-none order-1 self-stretch">Through words, we can raise children with tools to dream, build, create, break away boundaries and explore the world.</p>
                            </div>
                        </div>



                        <div className="w-full md:w-full lg:w-[695px] h-[600px] md:h-[500px] lg:h-[700px] right-0 md:ml-[50px] md:mt-[300px] lg:mt-[180px] sm:mt-[30px] bg-orange-50 rounded-none md:rounded-l-2xl">
                            <div className="flex flex-col items-center gap-3  mx-auto md:mx-0 w-[90%] sm:w-[375px] md:w-full h-[150px] sm:h-[170px] mt-[50px]  md:h-[187px] md:ml-[50px] md:mt-[50px] p-0">

                                < h2 className="w-[90%] sm:w-[350px] md:w-[451px] h-[50px] sm:h-[60px] md:h-[66px] font-['Comic_Sans_MS'] font-bold text-3xl sm:text-4xl md:text-[48px] leading-[112%] text-center text-heroBlue mx-auto md:mx-0 flex-none order-0 self-stretch">
                                    Mission</h2>
                                <p className="w-[90%] sm:w-[350px] md:w-[451px] h-auto min-h-[70px] sm:min-h-[80px] md:min-h-[92px] font-['Istok_Web'] font-normal text-base sm:text-lg md:text-2xl leading-relaxed md:leading-[35px] text-center text-gray-900 mx-auto md:mx-0 flex-none order-1 self-stretch">To contribute towards a culture of reading and a love for words that will improve the literacy of the Nigerian child-through Sir John’s Spelling Bee.</p>
                            </div>
                            <div className="mx-auto my-auto flex-items-center justify-center lg:w-[450px] lg:h-[250px] md:w-[200px] h-[200px] sm:h-[200px] mt-[40px] w-[300px] bg-cover bg-center bg-no-repeat rounded-lg">
                                <Image className='w-full h-full object-cover' src={MissionTag} alt='School Image' />
                            </div>
                            

                        </div>
                    </div>
                    <div className='flex gap-6 mt-[-100px] ml-10 sm:block hidden md:flex '>
                        <div className='pt-10'>
                            <Image className='' src={beeImage} alt='' />

                        </div>
                        <div className='text-2xl flex gap-6 pt-6 sm:text-xl '>
                            <div className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 '>K</div>
                            <span className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 mt-4'>A</span>
                            <div className='text-center font-extrabold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 '>_</div>
                            <span className=' text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 mt-4'>A</span>
                            <div className='text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 '>T</div>
                            <div className='text-center font-extrabold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2'>_</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MissionAndVission
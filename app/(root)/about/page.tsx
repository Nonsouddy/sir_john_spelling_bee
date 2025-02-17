import Image from 'next/image'
import '@assets/css/about.css'
import Img1 from '@assets/svg/aboutImg1.svg'
import Rect from '@assets/svg/about_square.svg'
import VisionTag from '@assets/svg/visionTag.svg'
import moon from '@assets/svg/aboutHalfMoon.svg'
import MissionTag from '@assets/svg/missionTag.svg'
import line from '@assets/svg/line 83.svg'
import beeImage from '@assets/img/beeImage.png'
import text from '@assets/svg/text.svg'
import ball from '@assets/svg/Ball.svg'
 import strike from '@assets/svg/vector 5.svg'
import vector from '@assets/svg/vector 12.svg'
import Student from '@assets/img/Students.png'
import Teacher from '@assets/img/Teacher.png'
import Parent from '@assets/img/Parent.png'
import stake from '@assets/svg/Vector 2516.svg'
import FAQPage from '../faq/page'
// import CategoryAndPrizes from '../../Type/CategoryAndPrizes'

//Components
// import MaintenancePage from '../../../components/MaintenancePage'


function About() {
  return (
    <>
      {/* <MaintenancePage page="About Us" /> */}
      <div className=' min-h-screen '>
        <div className='container mx-auto' >
          <div className='flex  lg:flex-row items-center gap-20'>
            <div  className='w-full h-full '>
              <div className='hidden lg:block lg:w-[24.71px] lg:h-[24.71px] lg:ml-[455px] lg:mt-[100px] lg:mb-4 '><Image src={Rect} alt='image' /></div>
              <div className=" font-['Comic_Sans_MS'] flex flex-col items-start gap-3.5 w-full max-w-[530px] min-h-[443px] mx-4 md:mx-auto md:left-[122px] md:top-[338px] p-4 md:p-0 ">
                <h1 className=" w-full max-w-[530px] min-h-[78px] font-bold text-3xl md:text-4xl lg:text-[44px] leading-tight md:leading-[61px] text-center  text-accentOrange self-stretch">Sir John’s <span className='text-heroBlue'>Spelling</span> Bee</h1>
                <p className=" text-xl md:text-2xl lg:text-[28px] leading-[1.4] md:leading-[39px] text-center text-defaultColor">Sir John’s Spelling Bee is a competition for children aged 5–17, aimed at fostering effective communication skills, enriching vocabulary, improving pronunciation, and cultivating poise and confidence. It promotes literacy by emphasizing the power of words as tools for dreaming, building, and exploring.</p>
              </div>
              <div className='hidden lg:block lg:w-[58px] lg:h-[58px] lg:ml-[124px] lg:mt-4'><Image src={moon} alt='image'/></div>
            </div>
            <div className='hidden -mr-8 lg:block lg:w-full lg:h-full lg:left-[739px] lg:top-[133px] md:w-full md:top-[133px]'>
           
           
                <Image src={Img1} alt='School Image' className=" w-full h-full md:w-full h-full" />
                
            </div>
          </div>
        </div>


        {/* <div className='line'>
                    <Image src={line} alt='line' />
                </div>
                <div className='about-main-section-3'>
                    <div className='about-vision'>
                        <div className='vision-image'>

                            <Image className='vision-image-tag' src={VisionTag} alt='School Image' />

                        </div>
                        <div className='vision-text'>
                            <h2>Vision</h2>
                            <p>Through words, we can raise children with tools to dream, build, create, break away boundaries and explore the world.</p>
                        </div>
                    </div>



                    <div className='about-mission'>
                        <div className='mission-text'>
                            <h2>Mission</h2>
                            <p>To contribute towards a culture of reading and a love for words that will improve the literacy of the Nigerian child-through Sir John’s Spelling Bee.</p>
                        </div>
                        <div className='mission-image'>
                            <Image className='mission-image-tag' src={MissionTag} alt='School Image' />
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
                <div className='flex gap-0 -mt-10'>

                    <Image className='about-bee' src={beeImage} alt='' />
                    <Image className='about-bee-text' src={text} alt='' />
                </div>
                <div className='about-main-section-2'>
                    <Image className='ball-Img' src={ball} alt='' />
                    <div className='about-section-2'>
                        <div className='about-section-2-col1'>
                            <div className='about-sec-2-bigtext'>
                                <h2> Why Sir John’s </h2>
                                <div id='id'>
                                    <span>Spelling</span>
                                    <div>Bee</div>
                                </div>
                            </div>
                            <p>Words are powerful—they are the building blocks of language and key to expressing ourselves. At Sir John’s Spelling Bee, we create a fair and inclusive platform where learners can grow their confidence, showcase their abilities, and embrace the challenge of effective communication. Through words, we empower participants to connect, share, and explore their world.</p>
                        </div>
                        <div className='about-section-2-col2'>
                            <div className='about-section-2-col2-box'>
                                <div className='about-box-info'>

                                    <h2>
                                        <div className='Ex'>
                                            <span id='p'>Excit </span><div>ing and</div>
                                        </div>
                                        <div className=''>Chall<span id='w'>enging</span></div>


                                    </h2>

                                    <p>Experience the thrill of a fun and competitive environment.</p>
                                </div>
                            </div>
                            <div className='about-section-2-col2-box'>
                                <div className='about-box-info'>
                                    <div className='Ex'>
                                        <h2>Build<span>Skills</span></h2>
                                        <Image className='vector' src={vector} alt='' />
                                    </div>

                                    <p>Improve vocabulary,<br />reading ability, and <br />public speaking.</p>
                                </div>
                            </div>
                            <div className='about-section-2-col2-box'>
                                <div className='about-box-info'>
                                    <h2>Boost Confidence</h2>
                                    <Image className="bar-strike" src={strike} alt='' />
                                    <p>Develop self-assurance and poise through engaging activities.</p>
                                </div>
                            </div>
                            <div className='about-section-2-col2-box'>
                                <div className='about-box-info'>
                                    <h2>En<span id='En'>courage</span>
                                        <div>Learning</div>
                                    </h2>
                                    <p>Foster a love for libraries and knowledge through interactive experiences.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <CategoryAndPrizes/> */}
      </div>


    </>

  )
}

export default About

{/* Key Stakeholder Section */ }

{/* <div className='stakeholder-main'>
                    <div className='stakeholder-section'>
                        <div className='stakeholder-heading'>Key Stakeholders</div>
                        <div >
                            <div className='stakeholder-info'>
                                <div className='stake-card'>
                                    <div className='stake-img'><Image src={Teacher} alt="TeacherImage" /></div>
                                    <div className='stake-detail'>
                                        <h2 className='text-[#59C5F3]'>Teachers</h2>
                                        <p>They play a vital role by serving as mentors, spelling coaches, and motivators. They create engaging learning experiences that inspire their pupils and students while also acting as school bee coordinators and judges to ensure student success.</p>
                                    </div>
                                </div>
                                <div className='stake-card'>
                                    <div className='stake-img'><Image src={Student} alt="StudentImage" /></div>
                                    <div className='stake-detail'>
                                        <h2 className='text-[#EB8733]'>Pupils/Students</h2>
                                        <p>They benefit from developing a competitive spirit in a supportive environment. The intellectual stimulation of the competition is as exciting as physical activities, encouraging participants to build friendships and interact with others.</p>
                                    </div>
                                </div>
                                <div className='stake-card'>
                                    <div className='stake-img'><Image src={Parent} alt="ParentImage" /></div>
                                    <div className='stake-detail'>
                                        <h2 className='text-[#D0C901]'>Parents/Guardians</h2>
                                        <p>They play a crucial role in supporting the overall well-being of their wards. They experience joy and fulfillment in seeing their children achieve success and grow through their participation in Sir John’s Spelling Bee.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
{/* Category & Prizes */ }

{/* <div className='prize-main'>
                    <div className='prize-section'>
                        <div className='prize-head-text'>
                            <h2> Category </h2><div>& </div>
                            <div className='prize'>
                                <div className='text-[#FEF506]'>P</div>
                                <div className='text-[#EB8733]'>r</div>
                                <div className='text-[#FFFFFA]'>i</div>
                                <div className='text-[#FEF506]'>z</div>
                                <div className='text-[#EB8733]'>e</div>
                                <div className='text-[#1C1B17]'>s</div>
                            </div>
                        </div>
                        <div className='prize-categories'>
                            <div className='prize-list-1'>
                                <h2>Competition Categories</h2>
                                <div>
                                    <li >Early Spellers (Primary 1–2)
                                    </li>
                                    <li>Upper Primary (Primary 3–5)</li>
                                    <li> Junior Secondary (JSS 1–3)</li>
                                    <li> Senior Secondary (SS 1–3)</li>

                                </div>
                            </div>
                            <div className='prize-list-2'>
                                <h2>For Winners</h2>

                                <div>
                                    <li>1st: ₦1,000,000</li>
                                    <li>2nd: ₦500,000</li>
                                    <li>3rd: ₦300,000</li>
                                    <li>4th: ₦150,000</li>
                                    <li>5th: ₦100,000</li>
                                </div>


                            </div>
                            <div className='prize-list-3'>
                                <h2>For Coaches</h2>
                                <div>
                                    <li>1st: ₦100,000 </li>
                                    <li> 2nd: ₦50,000</li>
                                    <li> 3rd: ₦30,000</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

import Link from 'next/link';
import "../Style/homePage.css"
import Image from 'next/image'
import FAQPage from '../faqPage/Page'
import Footer from './Footer'
import Navbar from './Navbar'
import HomeImg from "../../public/Svgs/homePageImg.svg"
import Arrow from "../../public/Svgs/Arrow 1.svg"
import Ellipse1 from "../../public/Svgs/Ellipse 1.svg"
import Ellipse2 from "../../public/Svgs/Ellipse 2.svg"
import Ellipse3 from "../../public/Svgs/Ellipse 3.svg"
import Ellipse5 from "../../public/Svgs/Ellipse 5.svg"
import Ellipse4 from "../../public/Svgs/Ellipse 4.svg"
import Ellipse6 from "../../public/Svgs/Ellipse 6.svg"
import Ellipse7 from "../../public/Svgs/Ellipse 7.svg"
import Ellipse8 from "../../public/Svgs/Ellipse 8.svg"
import Ellipse9 from "../../public/Svgs/Ellipse 9.svg"
import Ellipse10 from "../../public/Svgs/Ellipse 10.svg"
import crulArrow from "../../public/Svgs/crulArrow.svg"
import polygon1 from "../../public/Svgs/polygon-1.svg"
import polygon2 from "../../public/Svgs/polygon-2.svg"
import polygon3 from "../../public/Svgs/polygon-3.svg"
import vector7 from "../../public/Svgs/vector 7.svg"
import vector8 from "../../public/Svgs/vector 8.svg"
import vector9 from "../../public/Svgs/vector 9.svg"
import vector10 from "../../public/Svgs/vector 10.svg"
import vector11 from "../../public/Svgs/vector 11.svg"
import star from "../../public/Images/star.png"
import beeImage from '@assets/img/beeImage.png'
import book from "../../public/Images/book.png"
import tropy from "../../public/Images/tropy.png"
import step1 from "../../public/Images/step1.png"
import step2 from "../../public/Images/step2.png"
import step3 from "../../public/Images/step3.png"
import step4 from "../../public/Images/step4.png"


function HomePage() {
    return (
       <>
        <section className='home-main'>
            {/* HomePage first column */}
            <div className='home-section'>
                <div className=''>
                    <Image className='home-image' src={beeImage} alt='' />
                    <div className='home-head-section'>
                        <div className='home-head-col1'>
                            <div className='home-head-color-text'>
                                <div className=' Buzz'>Buzz</div>
                                <div> Into </div>
                                <div id ="hh" className='text-[#59C5F3]'>Brilliance:</div>
                            </div>
                            <div>Let Your Words Shine</div>
                        </div>

                        <p>Master the art of spelling and shine with confidence, success, and incredible prizes! </p>
                        <div className='homePage-btn'>
                            <a  href="/instructions"><button className='home-btn'>Register</button></a>
                            <a href="/about" className='home-learn'>
                                <div>Learn the buzz</div>
                                <Image src={Arrow} alt='' />

                            </a>
                        </div>
                    </div>
                </div>
                <div className='home-page-head-section2'>
                    <div className='home-ellipse-sec'>
                        <div className='home-ellipse1' >
                            <Image src={Ellipse5} alt='' />
                            <Image src={Ellipse1} alt='' />




                        </div>
                        <div className='home-ellipse2'>

                            <Image src={Ellipse4} alt='' />
                            <Image id='img' src={Ellipse6} alt='' />

                        </div>
                    </div>
                    <div className='home-page-head-section2-img'>
                        <Image src={HomeImg} alt='' />
                    </div>
                </div>
            </div>
            {/* HomePage Second column  */}
            <div className='home-head-section'>
                <div className='home-head-section2'>
                    <div className='home-head-section2-col1'>
                        <div className='ellipse6'>
                            <Image src={Ellipse6} alt='' />
                        </div>
                        <div className='home-head-section2-ellipse'>
                            <div className='ellipse3'>
                                <Image src={Ellipse3} alt='' />
                            </div>

                            <div className='ellipse2'>
                                <Image src={Ellipse2} alt='' />
                            </div>
                        </div>


                    </div>
                    <div className='home-head-section-details'>

                        <Image src={crulArrow} alt='' />

                        <div className='home-head-section-text'>
                            <div>B</div>
                            <span>E</span>
                            <div>A</div>
                            <span>_</span>
                            <div>T</div>
                            <span>_</span>
                            <div>F</div>
                            <span>Y</span>
                        </div>
                    </div>

                </div>
            </div>
            {/* HomePage Third column  */}
            <div>
                <div className='polygon'>
                    <Image src={polygon1} alt='' />
                </div>

                <div className=' home-head-section'>
                    <div className='home-head-section3'>

                        <div className='home-head-section3-Top'>
                            <h2>Your Path to Spelling Stardom!</h2>
                            <p>Sir John’s Spelling Bee offers more than just competition—it’s a platform to grow, excel, and thrive.</p>
                        </div>
                        <div className='home-head-section3-col'>
                            <div className='home-head-sec3-row1'>
                                <Image src={star} alt='' />
                                <div className='home-card'>

                                    <h2>Build Your Confidence</h2>
                                    <p>Gain poise and self-assurance through public speaking and performing on a national stage.</p>
                                </div>
                            </div>
                            <div className='home-head-sec3-row2'>
                                <Image src={book} alt='' />
                                <div className='home-card'>

                                    <h2>Expand Your Knowledge</h2>
                                    <p>Improve your vocabulary, spelling accuracy, and understanding of word usage for lifelong benefits</p>
                                </div>
                            </div>
                            <div className='home-head-sec3-row3'>
                                <Image src={tropy} alt='' />
                                <div className='home-card'>

                                    <h2>Earn Amazing Rewards</h2>
                                    <p>Compete for incredible prizes, from cash awards to recognition for you, your school, and your teachers.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='bee_home'>
                            <Image className='' src={beeImage} alt='' />
                        </div>
                        <div className='home-head-section-text'>
                            <div>k</div>
                            <span>A</span>
                            <div>_</div>
                            <span>A</span>
                            <div>T</div>
                            <span>_</span>
                        </div>
                    </div>
                    <div className='polygon2'>
                        <Image src={polygon2} alt='' />
                    </div>

                </div>

            </div>
            {/* HomePage Register section  */}
            <div className='home-register-main'>
                <div className='home-register-section'>
                    <div className='home-register'>
                        <div className='home-register-detail-1'>
                            <div className='flex'>
                                <div className='register-card'>
                                    <Image src={step1} alt='' />
                                    <p>Sign up online and secure your spot in the competition. Schools can register multiple students for discounted rates!</p>
                                </div>
                                <div className='register-card-img1'>
                                    <Image src={Ellipse9} alt='' />
                                </div>
                            </div>
                             <div><Image className='vector-7' src={vector7} alt='' /></div>

                            <div className='gam'>
                                <div >
                                    <div className='register-card-img2'><Image src={Ellipse7} alt='' /></div>
                                    <div className='register-card-img3'> <Image src={polygon3} alt='' /></div>
                                </div>
                                <div className='register-card2'>
                                    <Image src={step2} alt='' />
                                    <p>Gain access to official study guides, word lists, and tips to help you prepare like a pro.</p>
                                </div>
                               
                                
                            </div>
                            <Image className='vector-8' src={vector8} alt='' />
                            <Image className='vector-9' src={vector9} alt='' />
                            <Image className='vector-10' src={vector10} alt='' />

                        </div>
                        <div className='home-register-detail-2'>


                            <div className='gam2'>
                                <div className='register-card-img4'>
                                    <Image src={Ellipse10} alt='' />
                                </div>
                                <div className='register-card2'>
                                    <Image src={step4} alt='' />
                                    <p>Compete with the best spellers across Nigeria for the ultimate prize and recognition!</p>
                                </div>
                            </div>
                            <div className='gam3'>
                                <div className='register-card'>
                                    <Image src={step3} alt='' />
                                    <p>Show off your skills at the state-level competition and qualify for the national stage.</p>
                                </div>
                                <div>
                                    <div className='register-card-img5'><Image src={Ellipse8} alt='' /></div>
                                    <div className='register-card-img6'><Image src={Ellipse3} alt='' /></div>
                                </div>
                            </div>
                            <Image className='vector-11' src={vector11} alt='' />

                        </div>
                    </div>
                    <div>

                    </div>
                
                </div>

                
            </div>
            <FAQPage/>
          
        </section>
       
        
        </>
    )
}






export default HomePage
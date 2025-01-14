import React from 'react'
import Image from 'next/image'
import '@assets/css/resourcesPage.css'
// import ResourceBanner from "../../public/Images/ResourcesBanner.png"
// import RightArrow from "@assets/svg/Arrow 13.svg"
import eventImg1 from "@assets/svg/eventImg1.svg"
import eventImg2 from "@assets/svg/eventImg2.svg"
import eventImg3 from "@assets/svg/eventImg3.svg"
import eventImg4 from "@assets/svg/eventImg4.svg"
import Btn from "@assets/svg/downloadBtn.svg"
import crul1 from "@assets/svg/crul1.svg"
import crul2 from "@assets/svg/crul2.svg"
import crul3 from "@assets/svg/crul3.svg"
import bookBall from "@assets/svg/bookBall.svg"
import bookBall1 from "@assets/svg/bookBall1.svg"
import bookBall2 from "@assets/svg/bookBall2.svg"
import bookLeft from "@assets/svg/bookLeft.svg"
import bookLeft1 from "@assets/svg/bookLeft1.svg"
import bookSmallBall1 from "@assets/svg/bookSmallBall1.svg"
import bookSmallBall2 from "@assets/svg/bookSmallBall2.svg"
import bookSmallBall3 from "@assets/svg/bookSmallBall3.svg"
import bookSmallBall4 from "@assets/svg/bookSmallBall4.svg"
import Ellipse11 from "@assets/svg/Ellipse11.svg"
// import resourceBackground from "@assets/svg/resourceBackground.svg"
import moon from '@assets/svg/aboutHalfMoon.svg'
import halfmoon from '@assets/svg/halfMoon.svg'
import vector13 from '@assets/svg/vector13.svg'
import Link from 'next/link'


function ResourcesPage() {
    return (
        <>
       
            <div className='resources-head-main'>
                <div className='resources-head'>
                    <div className='resources-moon'><Image src={moon} alt='image' /></div>
                    <div className='resources-moon2'><Image src={halfmoon} alt='image' /></div>
                    <div className='resources-big-text'>
                        <h2>Get everything you need to be prepared</h2></div>
                    <div className='resources-Ellipse'><Image src={Ellipse11} alt='image' /></div>
                    <div className='res-broken-line'><Image src={vector13} alt='image' /></div>
                    <div className='res-broken-line2'><Image src={vector13} alt='image' /></div>

                    <div></div>
                </div>

                {/* <div className='resource-nav'>
                    <div className='resource-list'>
                        <ul>
                            <Link href="/"><li>All</li></Link>
                            <Link href="/"><li>Nature</li></Link>
                            <Link href="/"> <li>English</li></Link>
                            <Link href="/"> <li>Novel</li></Link>
                            <Link href="/"><li>History</li></Link>
                            <Link href="/"> <li> Short Stories</li></Link>
                            <Link href="/"><li>Poems</li></Link>
                        </ul>
                    </div>
                    <div>
                        <Link href="/"> <Image className='nav-arrow' src={RightArrow} alt='Arrow 13' /></Link>
                    </div>
                </div> */}



                <div className='resource-section'>
                    <div className='resource-main-section-1 '>
                        {/* book section start */}
                        <div className='book-section-row'>
                            <div className=' book-section-row-card'>
                                <div className='row-card1'>
                                    <h2><span>Wild Life</span> Africa</h2>
                                    <p>By Chimca Odinaka</p>
                                    <div>Names of all the wild life found on the coast of west Africa. From terrestrial to aquatic.</div>
                                </div>
                                <div> <Image className='top-ball' src={bookSmallBall1} alt='' /></div>

                                {/* <div> <Image className='left-ball' src={bookLeft} alt='' /></div> */}
                                <div className='book-download-section'>
                                    <div className='crul'><Image className='' src={crul1} alt='' /></div>
                                    <div className='book-Pdf'>PDF 3.4mb</div>
                                </div>

                                <div> <Image className='left-ball' src={bookLeft} alt='' /></div>

                                <div> <Image className='left-ball2' src={bookLeft} alt='' /></div>

                            </div>
                            <div className='download-section'>

                                <div>
                                    <Image className='book-big-ball' src={bookBall} alt='' />
                                    <Image className='btm-ball'
                                        src={bookSmallBall1} alt='' />
                                </div>
                                <div className='book-btn-section'>
                                    <div>Download</div>
                                    <div className='book-btn-sectionimg'>
                                        <Link href="/">
                                            <Image src={Btn} alt='' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='book-section-row1'>
                            <div className=' book-section-row-card1'>
                                <div className='row-card2'>
                                    <h2><span>Wild Life</span> Africa</h2>
                                    <p>By Chimca Odinaka</p>
                                    <div>Names of all the wild life found on the coast of west Africa. From terrestrial to aquatic.</div>
                                </div>
                                <div> <Image className='top-ball' src={bookSmallBall4} alt='' /></div>

                                <div className='book-download-section'>
                                    <div className='crul'><Image className='' src={crul2} alt='' /></div>
                                    <div className='book-Pdf1'>PDF 3.4mb</div>
                                </div>
                                <div> <Image className='left-ball' src={bookLeft1} alt='' /></div>

                                <div> <Image className='left-ball2' src={bookLeft1} alt='' /></div>



                            </div>
                            <div className='download-section'>

                                <div>
                                    <Image className='book-big-ball' src={bookBall1} alt='' />
                                    <Image className='btm-ball'
                                        src={bookSmallBall2} alt='' />
                                </div>
                                <div className='book-btn-section'>
                                    <div>Download</div>
                                    <div className='book-btn-sectionimg'>
                                        <Link href="/">
                                            <Image src={Btn} alt='' />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='book-section-row2'>
                            <div className=' book-section-row-card2'>
                                <div className='row-card3'>
                                    <h2><span>Wild Life</span> Africa</h2>
                                    <p>By Chimca Odinaka</p>
                                    <div>Names of all the wild life found on the coast of west Africa. From terrestrial to aquatic.</div>
                                </div>
                                <div> <Image className='top-ball' src={bookSmallBall1} alt='' /></div>
                                {/* <div> <Image className='left-ball' src={bookLeft} alt='' /></div> */}
                                {/* <div> <Image className='left-ball' src={bookLeft} alt='' /></div> */}
                                <div className='book-download-section'>
                                    <div className='crul'><Image className='' src={crul3} alt='' /></div>
                                    <div className='book-Pdf2'>PDF 3.4mb</div>
                                </div>
                                <div> <Image className='left-ball' src={bookLeft} alt='' /></div>

                                <div> <Image className='left-ball2' src={bookLeft} alt='' /></div>


                            </div>
                            <div className='download-section'>

                                <div>
                                    <Image className='book-big-ball' src={bookBall2} alt='' />
                                    <Image className='btm-ball'
                                        src={bookSmallBall3} alt='' />`
                                </div>
                                <div className='book-btn-section2'>
                                    <div >Download</div>
                                    <div className='book-btn-sectionimg'>
                                        <Link href="/">
                                            <Image src={Btn} alt='' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className='resource-main-section-2'>
                        <h2 className='resource-main-head'>Upcoming Events</h2>
                        <div className='resource-section2-col1'>
                            <div className='event-details'>

                                <div className='event-img'><Image className='' src={eventImg1} alt='' /></div>
                                <div className='event-row1'>
                                    <div className='event-card'>
                                        <div className='event-text1'>
                                            <h2>The Rapid Fire Round</h2>
                                            <p>Test your speed and precision!</p>
                                        </div>
                                        <div className='event-date'>
                                            <div className='pt-1'>Date: January 10.</div>
                                            <div className='pt-1'>Time: 10 am</div>

                                        </div>

                                    </div>
                                    <div className='event-info1'>Spellers must quickly spell as many words as possible within a time limit. It’s all about accuracy under pressure—are you ready to think fast?</div>
                                </div>
                            </div>
                            <div className='event-details1'>

                                <div className='event-img'><Image className='' src={eventImg2} alt='' /></div>
                                <div className='event-row2'>
                                    <div className='event-card'>

                                        <div className='event-text2'>
                                            <h2>The Word Origin Challenge</h2>
                                            <p>Dive into the roots of language!</p>
                                        </div>
                                        <div className='event-date1'>
                                            <div className='pt-1'>Date: January 10.</div>
                                            <div className='pt-1'>Time: 10 am</div>
                                        </div>
                                    </div>

                                    <div className='event-info2'>Participants spell words while identifying their origins. Discover the beauty of etymology and broaden your vocabulary in this fascinating round.</div>

                                </div>

                            </div>


                        </div>
                        <div className='resource-section2-col2'>
                            <div className='event-details2'>

                                <div className='event-img1'><Image className='' src={eventImg3} alt='' /></div>
                                <div className='event-row3'>
                                    <div className='event-card'>
                                        <div className='event-text3'>
                                            <h2>The Team Spelling Showdown</h2>
                                            <p>Stronger together!</p>
                                        </div>
                                        <div className='event-date2'>
                                            <div className='pt-1'>Date: January 10.</div>
                                            <div className='pt-1'>Time: 10 am</div>
                                        </div>
                                    </div>
                                    <div className='event-info3'>Work with your team to tackle tricky words. Collaboration and strategy are key to conquering this exciting group event</div>
                                </div>
                            </div>
                            <div className='event-details3'>

                                <div className='event-img2'><Image className='' src={eventImg4} alt='' /></div>
                                <div className='event-row4'>
                                    <div className='event-text4'>
                                        <h2>The Master Speller Finale</h2>
                                        <p>The ultimate test of excellence!</p>
                                    </div>

                                    <div className='event-info4'>The top spellers face off in an intense finale to determine the ultimate champion. Who will claim the crown and take home the grand prize?</div>
                                    <div className='event-date4'>
                                        <div className='pt-1'>Date: January 10.</div>
                                        <div className='pt-1'>Time: 10 am</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </>
           
     
    )

}

export default ResourcesPage
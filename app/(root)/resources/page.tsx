
"use client"
import Image from 'next/image'
import '@assets/css/resourcesPage.css'
import Ellipse11 from "../../../public/Svgs/Ellipse11.svg"
// import resourceBackground from "@assets/svg/resourceBackground.svg"
import halfmoon from '../../../public/Svgs/halfMoon.svg'
import vector13 from '../../../public/Svgs/vector13.svg'
import moon from '../../../public/Svgs/aboutHalfMoon.svg'

//Components
import MaterialSection from '../../../components/Resources/material'
import EventSection from '../../../components/Resources/eventSection'
import EventsSection from '../../../components/Resources/eventSection'






 function ResourcesPage() {
    return (
        <>
            {/* <MaintenancePage page="Resources Page" /> */}
            <div className=''>
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

                 <MaterialSection/>
                 <EventSection/>
            </div >
            

        </>


    )

}

export default ResourcesPage
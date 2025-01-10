import React from 'react'
import '@assets/css/termsAndConditon.css'

function page() {
    return (
        <>
            <div className='TandC-main-section'>
                <header className=" TandC-header">
                    <h1>Terms & Conditions</h1>
                    <p>Please read these terms carefully before using our services</p>
                </header>

                <div className="TandC-container">
                    <div className="TandC-card">
                        <h2 className=" TandC-section-title">1. Introduction</h2>
                        <div className=" TandC-content">
                            <p>Welcome to our platform. By accessing and using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our services.</p>
                        </div>
                    </div>

                    <div className="TandC-card">
                        <h2 className="TandC-section-title">2. User Responsibilities</h2>
                        <div className="TandC-content">
                            <p>As a user of our platform, you are responsible for:</p>
                            <ul>
                                <li>Maintaining the confidentiality of your account information</li>
                                <li>Providing accurate and up-to-date information</li>
                                <li>Complying with all applicable laws and regulations</li>
                                <li>Using our services in a manner that does not infringe on others' rights</li>
                            </ul>
                        </div>
                    </div>

                    <div className="TandC-card">
                        <h2 className="TandC-section-title">3. Privacy Policy</h2>
                        <div className="TandC-content">
                            <p>Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your personal information.</p>
                            <div className="TandC-highlight">
                                Please note that by using our services, you consent to the collection and use of your information as described in our Privacy Policy.
                            </div>
                        </div>
                    </div>

                    <div className="TandC-card">
                        <h2 className="TandC-section-title">4. Service Modifications</h2>
                        <div className="TandC-content">
                            <p>We reserve the right to modify or discontinue our services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>
                        </div>
                    </div>

                    <p className="TandC-last-updated">Last updated: January 9, 2025</p>

                </div>
            </div>
        </>


    )
}

export default page

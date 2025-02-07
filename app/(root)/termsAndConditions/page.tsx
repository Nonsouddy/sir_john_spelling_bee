import React from 'react'
import '@assets/css/termsAndConditon.css'

function page() {
    return (
        <>
            <div className='TandC-main-section'>
                <div className=" TandC-header">
                    <h1>SIR JOHN’S SPELLING BEE TERMS AND CONDITIONS</h1>
                    <p>Please read these terms carefully before using our services</p>
                </div>

                <div className="TandC-container">
                    <div className="TandC-card">
                        <h2 className=" TandC-section-title">1.REGISTRATION AND PARTICIPATION </h2>
                        <div className=" TandC-content">
                            <p>✓ A speller or spellers MUST currently attend a public or private primary or secondary school in Nigeria and MUST be in any of the classes between Primary one (1) to SSS three (3) to participate in the competition.</p>
                            <p>✓ Spellers can register through their school or privately but must provide details of their school.
                            </p>
                            <p>✓ A speller or spellers registering for the SJS Bee MUST be between ages five (5) to seventeen (17) years. He or she MUST not be eighteen (18) years on or before August 31st of the participating year. Necessary calculations should be done before registration as this will result to automatic disqualification.
                            </p>
                            <p>✓ A speller or spellers MUST be registered according to his\her current class. That is, a pupil in Primary 3 SHOULD NOT under any circumstances be registered under Primary 2 class. Such a speller or spellers will be disqualified automatically during verification WITHOUT a refund. Each category is class-based which means, spellers must be registered into their respective categories based on their class.
                            </p>
                        </div>
                    </div>

                    <div className="TandC-card">
                        <h2 className="TandC-section-title">2. PAYMENT</h2>
                        <div className="TandC-content">
                            <p>As a user of our platform, you are responsible for:</p>
                            <ul>
                                <li>Registration is done online via the SJS Bee e-portal after payment of N10,000 (Ten Thousand Naira) per speller has been confirmed.
                                </li>
                                <li> Registration from schools on every 10 spellers are eligible for a discount. For every 10 spellers, one registration is free.
                                </li>
                                <li> All payments should be made directly to the official bank account on our website. No payments should be made to individuals claiming to represent Sir John’s Spelling Bee.
                                </li>
                                <li> Spellers should keep their proof of payments and bring it to the competition venue.
                                </li>
                                <li>Sir John’s Spelling Bee shall at no time refund money paid for registration as payment is non-refundable.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="TandC-card">
                        <h2 className="TandC-section-title">3. COMPETITION</h2>
                        <div className="TandC-content">
                            {/* <p>As a user of our platform, you are responsible for:</p> */}
                            <ul>
                                <li> SJS Bee team hold exclusive right to disqualify participant(s) during competition if they are caught cheating, all rendering assistance of any sort to aid others during the written or oral stages of the competition. Assistance from a tutor or coach to his or her speller(s) during competition shall also lead to the disqualification of such speller(s).</li>
                                <li> Unruly behaviour amongst participants during competition is punishable by automatic disqualification.</li>
                                <li>All rules guiding the conduct of the competition must be adhered to, strictly by participants, coaches and the audience</li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="TandC-card">
                        <h2 className="TandC-section-title"> 4.PRIZES:
 </h2>
                        <div className="TandC-content">
                            {/* <p>As a user of our platform, you are responsible for:</p> */}
                            <ul>
                                <li>Sir John’s Spelling Bee have exclusive right to decide the pattern to which the winners are to receive their prize money. This shall be communicated to the respective winners and their school.</li>
                                <li> SJS Bee Team hold exclusive right to withdraw the winnings of a speller or spellers if after the competition, it is discovered that such speller or spellers falsified their information leading to their participation in the competition.</li>
                               
                            </ul>
                        </div>
                    </div>

                    <div className="TandC-card">
                        <h2 className="TandC-section-title">5. Privacy Policy</h2>
                        <div className="TandC-content">
                            <p>Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your personal information.</p>
                            <div className="TandC-highlight">
                                Please note that by using our services, you consent to the collection and use of your information as described in our Privacy Policy.
                            </div>
                        </div>
                    </div>

                    {/* <div className="TandC-card">
                        <h2 className="TandC-section-title">4. Service Modifications</h2>
                        <div className="TandC-content">
                            <p>We reserve the right to modify or discontinue our services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>
                        </div>
                    </div> */}

                    <p className="TandC-last-updated">Last updated: January 13, 2025</p>

                </div>
            </div>
        </>


    )
}

export default page

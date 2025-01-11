// pages/instructions.js
"use client"
import { useState } from 'react';
import Head from 'next/head';
import '@assets/css/instructions.css';
import Link from 'next/link';

export default function Instructions() {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    // Enable button when user scrolls to bottom
    const handleScroll = (e: { target: any; }) => {
        const element = e.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            setIsButtonEnabled(true);
        }
    };

    const handleProceed = () => {
        // Add your navigation logic here
        console.log('Proceeding to next page');
    };

    return (
        <>

            <div className="inst-container">
                <main className="inst-main">
                    <h1 className="inst-title">Instructions</h1>

                    <div className="inst-contentWrapper" onScroll={handleScroll}>
                        <section className="inst-section">
                            <h2>Getting Started</h2>
                            <p>Welcome to Sir John’s Spelling Bee (SJS Bee)! Please read these instructions carefully before proceeding.</p>
                        </section>

                        <section className="inst-section">
                            <h2>GENERAL RULES & GUIDELINES</h2>
                            <p>Contestants are required to comply with the stated general rules and guidelines:</p>
                            <ul>
                                <li>1. The pronouncer, judges and other officials shall be in charge of affairs concerning the competition. Any question or complaints about the spelling of a word must be referred to the officials at the end of each round.
                                </li>
                                <li>2. This competition is open to pupils in Primary one and two (Early Speller Category), three to five (Upper Primary Category), JSS 1 to JSS 3 (Junior Secondary Category) and SSS 1 – 3 (Senior Secondary Category)
                                </li>
                                <li>3. The “Oxford Dictionary of English” is the official dictionary for the Sir John’s Spelling Bee. All issues concerning a word MUST be resolved using this dictionary.
                                </li>
                                <li>4. During the written stage, contestants MUST write their words in CAPITAL LETTERS. They must not shade, cancel or change the spellings earlier written.
                                </li>
                                <li>5. A contestant during spelling MUST pronounce the given word, spell and pronounce again to indicate the end of his\her spelling. That is, contestants MUST Pronounce – Spell – Pronounce.
                                </li>
                                <li>6. Once a contestant starts to spell a word, he\she cannot go back to change the letter(s) that he\she had already spelt, but could start spelling again using the same letters and the order in which the letters were called.
                                </li>
                                <li>7. Contestants will be allowed to ask the pronouncer to repeat a word, define it and provide alternative pronunciation(s), part of speech, sentence examples and word origin within the allotted time. Information will be provided only when requested for by a speller.
                                </li>
                                <li>8. The pronouncer may offer word information on a word if it has a homophone, homonym or sounds similar to another word.
                                </li>
                                <li>9. Upper Primary (3 – 5) and secondary category will have forty seconds to spell each word they are given. Early Spellers (1 and 2) will have one minute each to spell a word. The time begins when a speller calls out the first letter of the spelling he\she intends to spell.
                                </li>
                                <li>10. Spellers are advised to study the given words carefully with the use of a dictionary as words may not be pronounced the way they are spelt. However, there is a provision for the pronunciation of words underneath each word in the manual.
                                </li>
                                <li>11. Contestants should expect new set of words during the state level and the final\grand finale of the competition. The manual is a guide on the nature of words to expect during championship.
                                </li>
                                <li>Note: You have until the last day to your state level competition to exhaust the study manual for this competition. For an excellent performance, you need to have good mastery of the pronunciation of each word in the study manual. It is advisable to study the words and not to cram. During competition, words from the manual shall be selected randomly and in no particular order, you are therefore expected to exhaust the study list for an excellent performance.</li>
                            </ul>
                        </section>

                        <section className="inst-section">
                            <h2>FEATURES OF THE SJS BEE</h2>
                            <p>Features of the competition inculde:</p>
                            <ul>
                                <li>1. WRITTEN: Spellers at every level of the competition will be given five (5) to ten (10) words to write. The word(s) information such as part of speech, definition, origin and sentence examples will be provided to aid spellers understand the exact word(s) they are required to spell before writing.
                                </li>
                                <li>2. VOCABULARY: SJS Bee understands the importance of words in communication and as such, the spellers shall be tested on the right application and usage of words. This may include synonyms, antonyms and some special words often misused by English speakers. This feature shall involve options for spellers to pick from.
                                </li>
                                <li>3. ORAL: Here, spellers will mount the stage and be required to carefully and correctly spell their words. There are no second changes in the SJS Bee, every letter a speller articulates counts and shall stand for or against them. A speller can start over again but cannot change the letter(s) used earlier. The spellers will NOT be under duress to spell their words, hence, they are allowed time to ask for word information at this stage.
                                </li>
                            </ul>
                        </section>

                        <section className="inst-section">
                            <h2>WHY TAKE PART IN THE SIR JOHN’S SPELLING BEE?
                            </h2>
                            {/* <p>Explore our key features and functionalities:</p> */}
                            <ul>
                                <li>a) It is fun.</li>
                                <li>b) It is challenging.</li>
                                <li>c) It improves vocabulary and reading ability.</li>
                                <li>d) To develop self-confidence and poise.</li>
                                <li>e) To develop public speaking skills.</li>
                                <li>f) To get learners to the library. The Sir John’s Spelling Bee is a great way to get learners to use the library through the activities and network it creates around spelling.</li>
                            </ul>
                        </section>

                        <section className="inst-section">
                            <h2>REGISTRATION</h2>
                            {/* <p>Registration made easy by:</p> */}
                            <ul>
                                <li>Registration fee per participant is N10,000. Schools can make bulk payment for all their participants. Example, N90,000 for ten (10) participants from the same school is acceptable. That is, schools get discount of N10,000 for every ten (10) participants registered. For 20 participants, a school pays N180,000 instead of N200,000 etc.
                                    Payment should be made to:
                                    Account Name: SIR JOHN SPELLING BEE
                                    Account Number: 1229156554
                                    Bank: ZENITH BANK PLC
                                </li>
                                <li>NOTE: Once your payment is made, proceed to register your speller or spellers in their respective categories by filling out and submitting their details.</li>
                            </ul>
                        </section>
                    </div>

                   <Link href="/register" >
                    <button
                        className={`$ inst-proceedButton ${isButtonEnabled ? "inst-enabled" : ''}`}
                        onClick={handleProceed}
                        disabled={!isButtonEnabled}
                    >
                        Proceed
                    </button>
                    </Link>
                </main>
            </div>
        </>
    );
}
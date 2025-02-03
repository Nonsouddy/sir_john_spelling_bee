import React, { useState } from 'react';
import "@assets/css/fqaAccordion.css"
import Image from 'next/image';
import beeImage from '@assets/img/beeImage.png'


// Types for our FAQ items
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Sample FAQ data
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Who can participate in Sir John’s Spelling Bee?",
    answer:
      "Any pupil or student between the ages of 5 and 17 can participate. Participants are grouped into four categories: <ul><li>Early Spellers (Primary 1-2) </li><li>Upper Primary (Primary 3-5)</li><li> Junior Secondary (JSS 1-3)</li> <li>Senior Secondary (SS 1-3)</li></ul>",
  },
  {
    id: 2,
    question: "How do I register for the competition?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment gateway."
  },
  {
    id: 3,
    question: "What is the registration fee?",
    answer: "To reset your password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you instructions to create a new password."
  },
  {
    id: 4,
    question: "What do I get after registering?",
    answer: "We offer a 30-day money-back guarantee on all our products. If you're not satisfied, contact our support team, and we'll process your refund within 3-5 business days."
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-container" id='faq-container'>
      <div className="faq-content">
        <div className=''>
          <div className="faq-sidebar">
            <h2>Got Questions? We&apos;ve Got Answers!</h2>
            <p>Find answers to common questions about our services. Can&apos;t find what you&apos;re looking for? Contact our support team.</p>
          </div>
          <div className='FAQ-bee-section'>
            <div className='bee_home'>
              <Image className='' src={beeImage} alt='' />
            </div>
            <div className='faq-section-text'>
              <div> T</div>
              <span>A</span>
              <div>_</div>
              <span>I</span>
              <div>T</div>

            </div>
          </div>
        </div>

        <div className="faq-list">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`faq-item ${openId === item.id ? 'active' : ''}`}
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="faq-question">
                <span>{item.question}</span>
                <svg
                  className="arrow-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="faq-answer" dangerouslySetInnerHTML={{ __html: item.answer }}>
                {/* {! item.answer !} */}
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default FAQ;

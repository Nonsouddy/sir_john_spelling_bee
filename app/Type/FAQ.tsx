"use client"

import { useState } from 'react';
import { ArrowDown, ArrowRight, MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import beeImage from '../../public/Images/beeImage.png';


// Define the FAQ item type
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Who can participate in Sir John’s Spelling Bee?",
    answer:
      "Any pupil or student between the ages of 5 and 17 can participate. Participants are grouped into four categories: Early Spellers (Primary 1-2),Upper Primary (Primary 3-5),Junior Secondary (JSS 1-3),Senior Secondary (SS 1-3)",
  },
  {
    question: "Is The SJS Bee For Only Selected Schools Or Individuals?",
    answer:
      "No, the SJS Bee is for Primary and Secondary School Learners in Nigeria - ages 5 to 17 in both public and private schools.",
  },
  {
    question: "How Can I Participate in the SJS Bee?",
    answer:
      "You can participate in the Sir John's Spelling Bee by registering online on www.sirjohnspellingbee.com.ng as long as you meet the eligibility criteria.The Bee is open to all pupils and students in Nigeria within the criteria, both spellers registering under their schools or registered independently by parents",
  },
  {
    question: "Is There A Word-List?",
    answer:
      "Sir John's Spelling Bee provide study list for spellers in all categories. The word list is to guide and prepare them for the preliminary stages of the competition as additional word-lists will be introduced during the advanced level of the competition.",
  },
  {
    question: "What Is The Registration Cost?",
    answer:
      "Registration for the competition is #10,000 only per participant. Registration fee is to be paid at any branch of Zenith Bank PLC, Account number 1229156554 (Sir John's Spelling Bee). Payment can also be made via Mobile/Web/ATM transfer.After payment, visit the registration portal to fill in the details of the speller(s). A confirmation slip will be presented after a successful registration. Spellers are expected to submit their confirmation slips during accreditation on the competition day.",
  },
  {
    question: "How Many Students Can Register From My School?",
    answer:
      "There is no limit to the number of spellers a school can register. Every student who meets the eligibility criteria is welcome to participate in the Sir John's Spelling Bee.Schools are encouraged to give all interested learners the opportunity to compete.",
  },
  {
    question: "Are There Any Discounts?",
    answer:
      "Yes, schools registering 10 spellers and more spellers will get discounts. For every 10 spellers registered, the school get #10,000 discount.That is, XYZ school would only pay #90,000 for 10 spellers (instead of #100,000) or #180,000 for 20 spellers (instead of #200,000). Simply make a bulk payment for all the spellers, and use the same payment reference for all registration entries.",
  },
  {
    question: "What Is The Official Dictionary?",
    answer:
      "The official dictionary for the SIr John's Spelling Bee is the Oxford Dictionary Of English. This dictionary serves as the exclusive source for words and adjudication criteria used in the competition. This dictionary because of its size can only be downloaded and used online from the Google Playstore.",
  },
  {
    question: "When Is The Competition?",
    answer:
      "The competition CALENDAR will display the dates, venues, and time for each state across Nigeria.If your state is not listed under 'Upcoming' or 'Concluded', don't worry! You'll be communicated once details are confirmed. In the meantime, we implore you to register, download the word-list, and prepare your learners ahead of time.",
  },
  {
    question: "How Can My School Host The Competition?",
    answer:
      "Schools that are interested in hosting the Sir John's Spelling Bee are welcome to submit their request. Hosting the competition offers unique benefits for schools.For more information on how to become a host and benefits involved, please contact us to make your request official.",
  },
  {
    question: "How Can I Download The Study Guide?",
    answer:
      "The study guide will be available for download once your registration is completed and for the category registered only. If you encounter any issues or could not download it, please email contact@sirjohnspellingbee.com.ng Make sure to include the speller's ID in your request for prompt assistance.",
  },
  {
    question: "My Question Is Not Answered Above / I Need More Clarification",
    answer:
      "If you have additional questions or need further clarification that isn't covered above, please follow these  steps:1. WhatsApp: You can send your inquiry via WhatsApp to 08144118744.2. Text Message (SMS): Send your question along with your state to 08126492629. You will receive a prompt response.We are here to assist and ensure you have all the information you need!",
  },
];

const FQAPage: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState(5);
  const [expandedAnswers, setExpandedAnswers] = useState<{ [key: number]: boolean }>(
    {}
  );

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleAnswerLength = (index: number) => {
    setExpandedAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const loadMoreQuestions = () => {
    setVisibleItems((prev) => prev + 3);
  };

  const renderAnswer = (answer: string, index: number) => {
    const isExpanded = expandedAnswers[index];
    const shouldTruncate = answer.length > 200;

    return (
      <div className="relative">
        <p className="mt-2 text-defaultColor list-none text-base">
          {isExpanded ? answer : `${answer.slice(0, 200)}...`}
          {shouldTruncate && (
            <span
              onClick={() => toggleAnswerLength(index)}
              className="inline-block ml-2 cursor-pointer text-normalBlue hover:text-accentOrange"
            >
              <MoreHorizontal className="w-6 h-6 inline-block" />
            </span>
          )}
        </p>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-primaryYellow relative overflow-hidden"
    >

      <div className="relative z-2 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden">
        {/* Sidebar with Large Text and Background Image */}
        <div
          className="hidden lg:flex flex-col justify-center p-12 space-y-6 transform transition-all  bg-cover bg-center"
          style={{ backgroundImage: `url('/Images/cup.png')` }}
        >
          <h2 className="text-4xl font-bold mb-4 animate-pulse font-comic text-defaultColor">
            Got Questions? We&apos;ve Got Answers!
          </h2>
          <p className="text-xl opacity-80 font-comic text-defaultColor">
            Find answers to common questions about our services. Can&apos;t find what
            you&apos;re looking for? Contact our support team.
          </p>
          <div className="flex gap-6">
            <div className="pt-10">
              <Image src={beeImage} alt="Bee" />
            </div>
            <div className="text-2xl flex gap-6 pt-6">
              <div className="text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2">
                T
              </div>
              <span className="text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 mt-4">
                A
              </span>
              <div className="text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2">
                _
              </div>
              <span className="text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2 mt-4">
                I
              </span>
              <div className="text-center font-bold justify-center pt-1 w-[30px] h-[40px] bg-orange50 text-orange800 ml-2">
                T
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="p-6 lg:p-12 space-y-10 font-inter">
          {faqData.slice(0, visibleItems).map((faq, index) => (
            <div
              key={index}
              className="mb-4 border-b pb-4 last:border-b-0 group"
            >
              <div
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center cursor-pointer shrink-0"
              >
                <h2 className=" w-30 text-l font-semibold text-defaultColor transition-colors word-breake ">
                  {faq.question}
                </h2>
                {expandedIndex === index ? (
                  <ArrowDown className="w-6 h-6 sm:w-auto sm:h-auto md:w-8 md:h-8 text-black" />
                ) : (
                  <ArrowRight className="w-6 h-6 sm:w-auto sm:h-auto md:w-8 md:h-8 -mt-6 text-black" />
                )}
              </div>

              {expandedIndex === index && renderAnswer(faq.answer, index)}
            </div>
          ))}

          {visibleItems < faqData.length && (
            <div className="text-center mt-6">
              <button
                onClick={loadMoreQuestions}
                className="bg-normalBlue text-white px-6 py-2 rounded-full hover:bg-accentOrange transition-all transform hover:scale-105"
              >
                See More Questions
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FQAPage;

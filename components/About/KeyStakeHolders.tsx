'use client'
import Image from "next/image";
import { motion } from 'framer-motion';
import Teacher from '../../public/Images/Teacher.png';
import Student from '../../public/Images/Students.png';
import Parent from '../../public/Images/Parent.png';

const stakeholders = [
  {
    img: Teacher,
    title: 'Teachers',
    color: 'text-[#59C5F3]',
    description:
      'They play a vital role by serving as mentors, spelling coaches, and motivators. They create engaging learning experiences that inspire their pupils and students while also acting as school bee coordinators and judges to ensure student success.',
  },
  {
    img: Student,
    title: 'Pupils/Students',
    color: 'text-[#EB8733]',
    description:
      'They benefit from developing a competitive spirit in a supportive environment. The intellectual stimulation of the competition is as exciting as physical activities, encouraging participants to build friendships and interact with others.',
  },
  {
    img: Parent,
    title: 'Parents/Guardians',
    color: 'text-[#D0C901]',
    description:
      'They play a crucial role in supporting the overall well-being of their wards. They experience joy and fulfillment in seeing their children achieve success and grow through their participation in Sir John’s Spelling Bee.',
  },
];

export default function StakeholderSection() {
  return (
    <div className="py-12 bg-white ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center pb-[40px] pt-[40px]  font-['Comic_Sans_MS'] text-textBlack">Key Stakeholders</h2>

        <div className="gap-8  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
       
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-full h-full mb-6">
                <Image src={stakeholder.img} alt={stakeholder.title} className="" />
              </div>
              <h3 className={`text-xl font-bold font-['Comic_Sans_MS'] ${stakeholder.color} mb-8  `}>{stakeholder.title}</h3>
              <p className=" text-darkGray font-['Istok_Web']">{stakeholder.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
     
    
  );
}







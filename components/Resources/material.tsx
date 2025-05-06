"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Btn from "../../public/Svgs/downloadBtn.svg";
import bookBall from "../../public/Svgs/bookBall.svg";
import bookBall1 from "../../public/Svgs/bookBall1.svg";
import bookBall2 from "../../public/Svgs/bookBall2.svg";
import bookLeft from "../../public/Svgs/bookLeft.svg";
import bookLeft1 from "../../public/Svgs/bookLeft1.svg";
import bookSmallBall1 from "../../public/Svgs/bookSmallBall1.svg";
import bookSmallBall2 from "../../public/Svgs/bookSmallBall2.svg";
import bookSmallBall3 from "../../public/Svgs/bookSmallBall3.svg";
import crul from "../../public/Svgs/curl1.svg";
import crul2 from "../../public/Svgs/curl2.svg";
import crul3 from "../../public/Svgs/curl3.svg";

const cardsData = [
  { ball: bookBall, smallBall: bookSmallBall1, leftImg: bookLeft, crul: crul },
  { ball: bookBall1, smallBall: bookSmallBall2, leftImg: bookLeft1, crul: crul2 },
  { ball: bookBall2, smallBall: bookSmallBall3, leftImg: bookLeft, crul: crul3 },
];

function MaterialSection() {
  // Each card's input state
  const [inputs, setInputs] = useState(Array(cardsData.length).fill(""));
  // Track if component has mounted to prevent hydration errors
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  // Color arrays for different sections
  const titleColors = ["text-primaryYellow", "text-accentOrange", "text-primaryYellow"];
  const cardColors = ["bg-primaryYellow", "bg-heroBlue", "bg-accentOrange"];
  // Updated curlColors array with distinct color classes for each card
  const curlColors = ["text-heroBlue", "text-green-500", "text-accentOrange"];
  const card2Colors = ["bg-accentOrange", "bg-primaryYellow", "bg-heroBlue"];
  const spanColors = ["text-white", "text-textBlack", "text-textBlack"];
  const authorColors = ["text-white", "text-textBlack", "text-black"];

  return (
    <div className="py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-['Comic_Sans_MS']">
        {cardsData.map((card, index) => (
          <div key={index} className={`shadow-md rounded-lg relative ${cardColors[index % cardColors.length]}`}>
            <div className={`shadow-md rounded-lg p-6 ${card2Colors[index % card2Colors.length]}`}>
               {/* Book Title section */}
              <h2 className={`text-2xl font-bold ${titleColors[index % titleColors.length]}`}>
                Wild Life
                <span className={`ml-2 ${spanColors[index % spanColors.length]}`}>Africa</span>
              </h2>
              <div className={`text-sm pt-2 font-normal ${authorColors[index % authorColors.length]}`}>
                 {/* Author section */}
                <p className="mt-2">By Chimca Odinaka</p>
                {/* Book description section */}
                <p className="mt-6 w-60">
                  Names of all the wild life found on the coast of west Africa.
                  From terrestrial to aquatic.
                </p>
                <div className={`mt-10 flex justify-between items-center flex-wrap gap-4 ${authorColors[index % authorColors.length]}`}>
                  
                  <div  className=" flex items-center gap-4">
                    {/* curl image section */}
                    <Image
                      src={card.crul}
                      alt="Decor"
                      width={20}
                      height={20}
                     className={`-ml-6 fill-current ${curlColors[index % curlColors.length]}`}
                    />
                    {/* file size section */}
                    <p>PDF 3.4MB</p>

                  </div>
                    {/* Download Button Section */}
                  <div className="">
                    <Link href={inputs[index] ? "/" : "#"} onClick={(e) => !inputs[index] && e.preventDefault()}>
                      <button
                        className={`flex-shrink-0 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg  transition ${inputs[index] ? "bg-strokeColor2 hover:bg-blue800" : "cursor-not-allowed"
                          }`}
                        disabled={!inputs[index]}
                      >
                        <span>Download</span>
                        
                        <Image src={Btn} alt="Download" width={20} height={20} />
                      </button>
                    </Link>
                  </div>
                </div>


              </div>

            </div>
            {/* Decorative Images */}
           
            <Image src={card.ball} alt="Decor" width={45} height={45} className="absolute bottom-20 left-6 " />
           <Image src={card.smallBall} alt="Decor" width={12} height={12} className="absolute bottom-[97px] left-[40px]"/>
            <Image src={card.leftImg} alt="Decor" width={40} height={40} className="absolute top-2 right-0 " />
            <Image src={card.leftImg} alt="Decor" width={40} height={40} className="absolute top-10 right-0 " />

            {/* Input Section for id check*/}
            <div className="text-sm mt-2 p-6 flex flex-col sm:flex-row items-center gap-2 font-normal" >
              <input
                type="text"
                placeholder="Enter Reg. ID"
                required
                value={inputs[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                className="sm:w-48 md:w-56 p-2 border rounded-md outline-none"
              />

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaterialSection;



"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "sonner";
import Btn from "../../public/Svgs/downloadBtn.svg";
import bookBall from "../../public/Svgs/bookBall.svg";
import bookBall1 from "../../public/Svgs/bookBall1.svg"
import bookBall2 from "../../public/Svgs/bookBall2.svg";
import bookLeft from "../../public/Svgs/bookLeft.svg";
import bookLeft1 from "../../public/Svgs/bookLeft1.svg";
import bookSmallBall1 from "../../public/Svgs/bookSmallBall1.svg";
import bookSmallBall2 from "../../public/Svgs/bookSmallBall2.svg";
import bookSmallBall3 from "../../public/Svgs/bookSmallBall3.svg";
import crul from "../../public/Svgs/curl1.svg";
import crul2 from "../../public/Svgs/curl2.svg";
import crul3 from "../../public/Svgs/curl3.svg";
import checkPayment from "../../actions/server/checkPayment";
import getMaterials, { Material } from "../../actions/fetch/getMaterials";

function MaterialSection() {
  const [mounted, setMounted] = useState(false);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [expandedCards, setExpandedCards] = useState<boolean[]>([]);
  
  // Using separate state arrays for each card to prevent cross-influence
  const [cardStates, setCardStates] = useState<{
    input: string;
    loading: boolean;
    message: { type: string; text: string };
  }[]>([]);

  const titleColors = ["text-primaryYellow", "text-accentOrange", "text-primaryYellow"];
  const cardColors = ["bg-primaryYellow", "bg-heroBlue", "bg-accentOrange"];
  const curlColors = ["text-heroBlue", "text-green-500", "text-accentOrange"];
  const card2Colors = ["bg-accentOrange", "bg-primaryYellow", "bg-heroBlue"];
  const spanColors = ["text-white", "text-textBlack", "text-textBlack"];
  const authorColors = ["text-white", "text-textBlack", "text-black"];

  const decorData = [
    { ball: bookBall, smallBall: bookSmallBall1, leftImg: bookLeft, crul: crul },
    { ball: bookBall1, smallBall: bookSmallBall2, leftImg: bookLeft1, crul: crul2 },
    { ball: bookBall2, smallBall: bookSmallBall3, leftImg: bookLeft, crul: crul3 },
  ];

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const data = await getMaterials();
        setMaterials(data);
        setExpandedCards(Array(data.length).fill(false));
        
        // Initialize card state for each material
        setCardStates(data.map(() => ({
          input: "",
          loading: false,
          message: { type: "", text: "" }
        })));
      } catch (error) {
        console.error("Error fetching materials:", error);
      } finally {
        setMounted(true);
      }
    };

    fetchMaterials();
  }, []);

  if (!mounted) return null;

  const handleChange = (index: number, value: string) => {
    setCardStates(prev => {
      const newStates = [...prev];
      newStates[index] = {
        ...newStates[index],
        input: value,
        message: { type: "", text: "" }
      };
      return newStates;
    });
  };

  const handleDownload = async (index: number, downloadLink: string) => {
    // Set loading state for this specific card
    setCardStates(prev => {
      const newStates = [...prev];
      newStates[index] = {
        ...newStates[index],
        loading: true
      };
      return newStates;
    });

    // Toggle expansion animation for this card
    setExpandedCards(prev => {
      const newExpanded = [...prev];
      newExpanded[index] = true;
      return newExpanded;
    });

    try {
      const result = await checkPayment(cardStates[index].input);
      
      setCardStates(prev => {
        const newStates = [...prev];
        newStates[index] = {
          ...newStates[index],
          loading: false,
          message: { 
            type: result.success ? "success" : "error", 
            text: result.message 
          }
        };
        return newStates;
      });
      
      if (result.success) {
        window.open(downloadLink, "_blank");
      }
    } catch (error) {
      console.error("Error checking payment:", error);
      
      setCardStates(prev => {
        const newStates = [...prev];
        newStates[index] = {
          ...newStates[index],
          loading: false,
          message: { 
            type: "error", 
            text: "An error occurred. Please try again." 
          }
        };
        return newStates;
      });
    } finally {
      // Keep expanded state for a short time to show animation, then revert
      setTimeout(() => {
        setExpandedCards(prev => {
          const newExpanded = [...prev];
          newExpanded[index] = false;
          return newExpanded;
        });
      }, 300);
    }
  };

  const formatFileSize = (sizeInBytes: number): string => {
    if (sizeInBytes < 1024) return `File size: ${sizeInBytes} B`;
    if (sizeInBytes < 1024 * 1024) return `File size: ${(sizeInBytes / 1024).toFixed(1)} KB`;
    return `File size: ${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-['Comic_Sans_MS']">
        {materials.map((material, index) => {
          const decorIndex = index % decorData.length;
          const decor = decorData[decorIndex];
          
          const titleParts = material.title.split(' ');
          const mainTitle = titleParts.length > 1 ? titleParts.slice(0, -1).join(' ') : material.title;
          const highlightedWord = titleParts.length > 1 ? titleParts.slice(-1)[0] : '';
          
          const cardState = cardStates[index] || { input: "", loading: false, message: { type: "", text: "" } };
          
          return (
            <div 
              key={material.id} 
              className={`shadow-md rounded-lg relative overflow-hidden ${cardColors[index % cardColors.length]} transform transition-all duration-300 ${expandedCards[index] ? 'scale-y-105' : ''} min-h-[400px] flex flex-col`}
              style={{ transformOrigin: 'top' }}
            >
              {/* Decorative Elements - Fixed positions */}
              <div className="absolute -bottom-4 -left-4 z-10 pointer-events-none">
                <div className="relative">
                  <Image src={decor.ball} alt="Decor" width={45} height={45} />
                  <div className="absolute top-0 left-8">
                    <Image src={decor.smallBall} alt="Decor" width={12} height={12} />
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 right-0 z-10 flex flex-col pointer-events-none">
                <Image src={decor.leftImg} alt="Decor" width={40} height={40} className="mb-1" />
                <Image src={decor.leftImg} alt="Decor" width={40} height={40} />
              </div>

              <div className={`shadow-md rounded-lg p-6 relative z-0 ${card2Colors[index % card2Colors.length]} flex-grow`}>
                <h2 className={`text-2xl font-bold ${titleColors[index % titleColors.length]}`}>
                  {mainTitle}
                  {highlightedWord && (
                    <span className={`ml-2 ${spanColors[index % spanColors.length]}`}>
                      {highlightedWord}
                    </span>
                  )}
                </h2>
                <div className={`text-sm pt-2 font-normal ${authorColors[index % authorColors.length]}`}>
                  <p className="mt-2">By {material.author || 'Unknown Author'}</p>
                  <p className="mt-6 md:w-full line-clamp-3">{material.body || 'No description available.'}</p>
                  
                  {/* File info and download button in a proper flex container */}
                  <div className={`mt-10 flex justify-between items-center w-full ${authorColors[index % authorColors.length]}`}>
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5 flex-shrink-0">
                        <Image
                          src={decor.crul}
                          alt="Decor"
                          layout="fill"
                          objectFit="contain"
                          className={`fill-current ${curlColors[index % curlColors.length]}`}
                        />
                      </div>
                      <p className="text-sm whitespace-nowrap">{formatFileSize(material.size)}</p>
                    </div>
                    
                    <button
                      onClick={() => handleDownload(index, material.downloadLink)}
                      className={`flex-shrink-0 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                        ${cardState.input ? "bg-strokeColor2 hover:bg-blue800 transform hover:-translate-y-1" : "cursor-not-allowed opacity-50"}
                        ${cardState.loading ? "opacity-75 animate-pulse" : ""}`}
                      disabled={!cardState.input || cardState.loading}
                    >
                      <span className="whitespace-nowrap">{cardState.loading ? "Checking..." : "Download"}</span>
                      <Image src={Btn} alt="Download" width={20} height={20} className={`transition-transform duration-300 ${expandedCards[index] ? 'translate-y-1' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Input Section */}
              <div className={`text-sm p-6 flex flex-col items-center gap-2 font-normal relative z-0 bg-white transition-all duration-300 ease-in-out ${expandedCards[index] ? 'max-h-40' : 'max-h-24'}`}>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Enter Reg. ID"
                    required
                    value={cardState.input}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-full p-2 border rounded-md outline-none focus:border-blue-500 transition-colors"
                  />
                  <div className={`mt-2 text-sm transition-all duration-300 ${cardState.message.text ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'}`}>
                    <p className={`${cardState.message.type === "error" ? "text-red-500" : "text-green-500"}`}>
                      {cardState.message.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MaterialSection;
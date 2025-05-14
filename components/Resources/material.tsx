"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "sonner";
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
import checkPayment from "../../actions/server/checkPayment";
import getMaterials, { Material } from "../../actions/fetch/getMaterials";

function MaterialSection() {
  const [mounted, setMounted] = useState(false);
  const [materials, setMaterials] = useState<Material[]>([]);
  
  // Using an object to store states with material IDs as keys
  const [cardStates, setCardStates] = useState<Record<string, {
    input: string;
    loading: boolean;
    expanded: boolean;
  }>>({});

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
        
        // Initialize state for each material using their IDs
        const initialStates = data.reduce((acc, material) => {
          acc[material.id] = {
            input: "",
            loading: false,
            expanded: false
          };
          return acc;
        }, {} as Record<string, any>);
        
        setCardStates(initialStates);
      } catch (error) {
        console.error("Error fetching materials:", error);
        toast.error("Failed to load materials");
      } finally {
        setMounted(true);
      }
    };

    fetchMaterials();
  }, []);

  if (!mounted) return null;

  const handleChange = (materialId: string, value: string) => {
    setCardStates(prev => ({
      ...prev,
      [materialId]: {
        ...prev[materialId],
        input: value
      }
    }));
  };

  const handleDownload = async (materialId: string, downloadLink: string) => {
    const currentInput = cardStates[materialId]?.input || "";
    
    if (!currentInput) {
      toast.warning("Please enter your registration ID");
      return;
    }

    // Set loading state for this specific card
    setCardStates(prev => ({
      ...prev,
      [materialId]: {
        ...prev[materialId],
        loading: true,
        expanded: true
      }
    }));

    try {
      const result = await checkPayment(currentInput);
      
      if (result.success) {
        toast.success(result.message);
        window.open(downloadLink, "_blank");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error checking payment:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      // Reset states after operation
      setCardStates(prev => ({
        ...prev,
        [materialId]: {
          ...prev[materialId],
          loading: false,
          expanded: false
        }
      }));
    }
  };

  const formatFileSize = (sizeInBytes: number): string => {
    if (sizeInBytes < 1024) return `${sizeInBytes} B`;
    if (sizeInBytes < 1024 * 1024) return `${(sizeInBytes / 1024).toFixed(1)} KB`;
    return `${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-['Comic_Sans_MS']">
        {materials.map((material, index) => {
          const decorIndex = index % decorData.length;
          const decor = decorData[decorIndex];
          
          const titleParts = material.title.split(' ');
          const mainTitle = titleParts.length > 1 ? titleParts.slice(0, -1).join(' ') : material.title;
          const highlightedWord = titleParts.length > 1 ? titleParts.slice(-1)[0] : '';
          
          const currentState = cardStates[material.id] || {
            input: "",
            loading: false,
            expanded: false
          };
          
          return (
            <div 
              key={material.id} 
              className={`shadow-md rounded-lg relative overflow-hidden min-h-[400px] flex flex-col ${cardColors[index % cardColors.length]}`}
            >
              {/* Decorative Elements */}
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

              {/* Main Card Content */}
              <div className={`flex-grow p-6 relative z-0 ${card2Colors[index % card2Colors.length]}`}>
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
                  <p className="mt-6">{material.body || 'No description available.'}</p>
                  
                  {/* File info and download button */}
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
                      <p className="text-sm whitespace-nowrap">{material.type} {formatFileSize(material.size)}</p>
                    </div>
                    
                    <button
                      onClick={() => handleDownload(material.id, material.downloadLink)}
                      className={`flex-shrink-0 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all
                        ${currentState.input ? "bg-strokeColor2 hover:bg-blue800" : "cursor-not-allowed opacity-50"}
                        ${currentState.loading ? "opacity-75" : ""}`}
                      disabled={!currentState.input || currentState.loading}
                    >
                      <span>{currentState.loading ? "Checking..." : "Download"}</span>
                      <Image 
                        src={Btn} 
                        alt="Download" 
                        width={20} 
                        height={20} 
                      />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Input Section - Fixed height to prevent layout shift */}
              <div className="p-6 bg-white">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Enter Reg. ID"
                    required
                    value={currentState.input}
                    onChange={(e) => handleChange(material.id, e.target.value)}
                    className="w-full p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  />
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
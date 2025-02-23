import Image from 'next/image';
import book from "../../public/Images/book.png"
import tropy from "../../public/Images/tropy.png"
import star from "../../public/Images/star.png"



const HomeStardom = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between w-full p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8">
            {/* Big Text Section */}
           
            <div className="  font-['Comic_Sans_MS'] flex-1 p-8 flex flex-col items-center justify-center text-start h-auto md:h-[400px] max-w-lg mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-darkGray">
                    Your Path to Spelling Stardom!
                </h2>
                <p className="mt-4 text-lg text-darkGray">
                    Sir John’s Spelling Bee offers more than just competition—it’s a platform to grow, excel, and thrive.
                </p>
            </div>

            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 w-full max-w-4xl">
                {/* Card 1 */}
                <div className="bg-primaryYellow p-6 rounded-lg shadow-md flex flex-col items-start  text-start  h-auto w-full">
                    <Image src={star} alt="Star Icon" className="w-16 h-16" />
                    <h3 className="text-xl font-bold text-darkGray mt-4  font-['Comic_Sans_MS']">Build Your Confidence</h3>
                    <p className="text-base text-darkGray mt-2 max-w-xs">
                        Gain poise and self-assurance through public speaking and performing on a national stage.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-accentOrange p-6 rounded-lg shadow-md flex flex-col items-start  text-start  h-auto w-full">
                    <Image src={book} alt="Book Icon" className="w-16 h-16" />
                    <h3 className="text-xl font-bold text-textBlack mt-4  font-['Comic_Sans_MS']">Expand Your Knowledge</h3>
                    <p className="text-base text-textBlack  mt-2 max-w-xs">
                        Improve your vocabulary, spelling accuracy, and understanding of word usage for lifelong benefits.
                    </p>
                </div>

                {/* Card 3 */} 
                <div className="bg-heroBlue p-6 rounded-lg shadow-md flex flex-col items-start  text-start  h-auto w-full">
                    <Image src={tropy} alt="Trophy Icon" className="w-16 h-16" />
                    <h3 className="text-xl font-bold text-darkGray mt-  font-['Comic_Sans_MS']">Earn Amazing Rewards</h3>
                    <p className="text-base text-darkGray mt-2 max-w-xs  font-['Istok_Web">
                        Compete for incredible prizes, from cash awards to recognition for you, your school, and your teachers.
                    </p>
                </div>

                
            </div>
        </section>
    );
};



export default HomeStardom;


import Image from 'next/image';
import strike from '../../public/Svgs/vector 5.svg'
import vector from '../../public/Svgs/vector_12.svg'


function WhySirJohnsSection() {
  return (
    <>
    <section className='bg-paleYellow '><div className="flex flex-col lg:flex-row gap-8 p-8 max-w-7xl mx-auto w-full">
          {/* Left Column */}
          <div className="lg:w-1/2 font-['Comic_Sans_MS'] lg:mt-[100px]">
              <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-4 text-paleLemon">Why Sir John's</h2>
                  <div className="mb-4 flex gap-3">
                      <span className="text-3xl font-bold block text-accentOrange">Spelling</span>
                      <div className="text-3xl font-bold text-heroBlue">Bee</div>
                  </div>
              </div>
              <p className="text-darkGray leading-normal w-80">
                  Words are powerful—they are the building blocks of language and key to expressing ourselves.
                  At Sir John's Spelling Bee, we create a fair and inclusive platform where learners can grow
                  their confidence, showcase their abilities, and embrace the challenge of effective communication.
                  Through words, we empower participants to connect, share, and explore their world.
              </p>
          </div>

          {/* Right Column - Grid of Boxes */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 font-['Comic_Sans_MS']">
              {/* Box 1 */}
              <div className="bg-paleYellow p-6 rounded-lg shadow-md lg:text-center ">
                  <h2 className="text-xl font-bold mb-3">
                      <div className="mb-1">
                          <span className="text-white border bg-accentOrange pl-4 rounded-l-2xl ">Excit</span>ing and
                      </div>
                      <div>Chall<span className="text-white  border bg-heroBlue pr-4 rounded-r-2xl ">enging</span></div>
                  </h2>
                  <p className="text-darkGray  font-['Istok_Web']">Experience the thrill of a fun and competitive environment.</p>
              </div>

              {/* Box 2 */}
              <div className="bg-paleYellow p-6 rounded-lg shadow-md lg:text-center">
                  <div className="mb-3 ">
                      <h2 className="text-xl font-bold">
                          Build<span className="">Skills</span>
                          {/* <Image className=' hidden lg:-mt-8 ml-[115px] md: -mt-8 ml-[116px] lg:block md:block ' src={vector} alt='' /> */}
                      </h2>
                  </div>
                  <p className="text-darkGray  font-['Istok_Web']">
                      Improve vocabulary,
                      reading ability, and
                      public speaking.
                  </p>
              </div>

              {/* Box 3 */}
              <div className="bg-paleYellow p-6 rounded-lg shadow-md  lg:text-center">
                  <h2 className="text-xl font-bold mb-3">Boost <div>Confidence</div> 
                  {/* <Image className=" lg:ml-[60px] md:ml-[60px] sm:-ml-6" src={strike} alt='' />  */}
                  </h2>
                  <p className="text-darkGray  font-['Istok_Web']">
                      Develop self-assurance and poise through engaging activities.
                  </p>
              </div>

              {/* Box 4 */}
              <div className="bg-paleYellow p-6 rounded-lg shadow-md  lg:text-center">
                  <h2 className="text-xl font-bold mb-3">
                      En<span className="text-white border bg-paleLemon rounded-2xl ">courage</span>
                      <div>Learning</div>
                  </h2>
                  <p className="text-darkGray  font-['Istok_Web']">
                      Foster a love for libraries and knowledge through interactive experiences.
                  </p>
              </div>
          </div>
      </div>
      </section>
      </>
  )
};

export default WhySirJohnsSection;
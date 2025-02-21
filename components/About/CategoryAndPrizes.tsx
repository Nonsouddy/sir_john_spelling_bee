'use client'


function CategoryPrizesSection()  {
  const prizeTitle = [
    { letter: 'P', color: 'text-[#FEF506]' },
    { letter: 'r', color: 'text-[#EB8733]' },
    { letter: 'i', color: 'text-[#FFFFFA]' },
    { letter: 'z', color: 'text-[#FEF506]' },
    { letter: 'e', color: 'text-[#EB8733]' },
    { letter: 's', color: 'text-[#1C1B17]' }
  ];

  return (
    <div className="w-full bg-heroBlue py-12 px-4 sm:px-6 lg:px-8 md:overflow-hidden sm:overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12 font-['Comic_Sans_MS']">
          <h2 className="text-3xl md:text-4xl font-bold">Category</h2>
          <span className="text-3xl md:text-4xl font-bold">&</span>
          <div className="flex gap-4">
            {prizeTitle.map((item, index) => (
              <span
                key={index}
                className={`text-3xl md:text-4xl font-bold ${item.color}`}
              >
                {item.letter}
              </span>
            ))}
          </div>
        </div>

        {/* Categories and Prizes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Competition Categories */}
          <div className="bg-primaryYellow rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-extrabold mb-6 font-['Comic_Sans_MS']">
              Competition Categories
            </h3>
            <ul className="space-y-3 font-bold text-[#032230] font-['Istok_Web']">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Early Spellers (Primary 1–2)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Upper Primary (Primary 3–5)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Junior Secondary (JSS 1–3)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Senior Secondary (SS 1–3)</span>
              </li>
            </ul>
          </div>

          {/* Winners Prizes */}
          <div className="bg-primaryYellow rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-extrabold mb-6 font-['Comic_Sans_MS']">
              For Winners (Each Category)
            </h3>
            <ul className="space-y-3 font-bold text-[#032230] font-['Istok_Web']">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>1st: ₦1,000,000</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>2nd: ₦500,000</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>3rd: ₦300,000</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>4th: ₦150,000</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>5th: ₦100,000</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Consolation prizes for 6th-10th place winners.</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className=" pt-1">Trophies, medals, plaques and recognition for winners schools.</span>
              </li>
            </ul>
          </div>

          {/* Coaches Prizes */}
          <div className="bg-primaryYellow rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl md:text-2xl font-extrabold mb-6 font-['Comic_Sans_MS']">
              For Coaches (Each Category)
            </h3>
            <ul className="space-y-3 font-bold text-[#032230] font-['Istok_Web']">
              <li className="flex items-center space-x-2 ">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>1st: ₦100,000</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>2nd: ₦50,000</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>3rd: ₦30,000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPrizesSection;
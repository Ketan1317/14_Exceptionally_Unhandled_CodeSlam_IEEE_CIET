import img1 from "/rest1.png";
import img2 from "/rest2.png";

import pizzaBg from "/okok.png"
import pastaBg from "/okok2.png"; 


const AfterHero = () => {
  return (
    <div className="flex relative z-20 justify-center">
      <div className="w-full max-w-6xl -mt-24 mx-4 md:mx-8 bg-white  rounded-3xl shadow-2xl overflow-hidden border border-white/10 animate-fade-in">

        <div className="relative w-full h-72 md:h-112">
          <img src={img1} alt="banner" className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-12">

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-full md:w-48 h-44 rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <img src={img1} alt="reservation" className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Reservations</h2>
              <p className="text-gray-600 leading-relaxed">
                Call us to book your table. For peak hours, advance booking is recommended.
                Enjoy authentic Italian cuisine and curated wines.
              </p>
              <button className="px-6 py-2.5 bg-linear-to-r from-amber-400 to-amber-500 text-white font-semibold rounded-full shadow-lg hover:from-amber-500 hover:to-amber-600 active:scale-95 transition-transform">
                Book a Table
              </button>
            </div>
          </div>

          {/* About section */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-full md:w-48 h-44 rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5">
              <img src={img2} alt="about" className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">About</h2>
              <p className="text-gray-600 leading-relaxed">
                FAICCO'S blends classic Italian recipes with modern touches — offering a warm, cozy atmosphere inspired by authentic regional traditions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AfterHero;

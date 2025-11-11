import HeroVideo from "/main_Video.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-[114vh] overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={HeroVideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/40"></div>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full px-10 py-6 text-white z-20">
        <div className="flex items-center justify-between w-full">

          {/* Left Title */}
          <div>
            <h2 className="text-4xl  font-bold tracking-wide">Vino & Velvet</h2>
            <p className="text-sm tracking-wider opacity-85">
              Fine Italian vibes paired with elegance
            </p>
          </div>

          {/* Nav Items */}
          <div className="flex items-center gap-6 text-sm">
            {["SHOPS", "RECIPES", "NEWS", "ABOUT FAICCO'S", "CONTACT"].map(
              (item, index) => (
                <div key={index} className="flex items-center">
                  <h3 className="cursor-pointer hover:opacity-70 transition">
                    {item}
                  </h3>
                  {index < 4 && <span className="mx-3 opacity-60">•</span>}
                </div>
              )
            )}

            {/* Dropdown */}
            <select className="px-5 py-2 rounded-md outline-none cursor-pointer  text-white">
              <option value="EN">EN</option>
              <option value="HIN">HIN</option>
              <option value="PB">PB</option>
            </select>
          </div>
        </div>
      </div>

      {/* Hero Center Section */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 text-white">
        
        <h1 className="text-6xl font-bold drop-shadow-xl">
          Vino & Velvet
        </h1>

        <p className="mt-6 text-lg max-w-2xl opacity-90 leading-relaxed">
          Where refined flavors, rich textures, and timeless Italian charm come 
          together to create unforgettable experiences.
        </p>

        {/* Buttons Group */}
        <div className="mt-10 flex gap-6">
          <button className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
            Order Now
          </button>

          <button className="px-6 py-3 bg-transparent border border-white font-medium rounded-full hover:bg-white/10 transition">
            Learn More
          </button>
        </div>

      </div>

    </div>
  );
};

export default Hero;

import rest1 from "/rest1.png";

const MenuOverlay = () => {
  return (
    <div>
      <div
        className="relative -z-20 -mt-28 w-full h-[90vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${rest1})` }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            OUR MENU
          </h1>
          <p className="text-lg absolute text-white mt-24 italic max-w-3xl mx-auto font-light">
            Explore a variety of dishes, each crafted to delight your taste
            buds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;

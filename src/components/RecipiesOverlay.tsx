import headImg from "/rest5.jpeg";

const RecipiesOverlay = () => {
  return (
    <div
      className="relative -mt-28 w-full h-[90vh] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${headImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Centered text */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          RECIPIES
        </h1>
        <p className="text-lg absolute text-white mt-24 italic max-w-3xl mx-auto font-light">
          Crafted with passion, served with tradition — every plate tells a story.
        </p>
      </div>
    </div>
  );
};

export default RecipiesOverlay;

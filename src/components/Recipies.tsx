import sushi from "/sushi.png";
import pasta from "/pasta.png";
import expresso from "/expresso.png";
import Ossobuco from "/Ossobuco.jpeg";
import Latte from "/Latte Machito.jpeg";
import Pollo_alla from "/Pollo alla.jpeg";
import Cotolette from "/Cotoletta alla Milanese.jpeg";
import maroce_soup from "/maroce soup.jpeg";

// All original names, premium descriptions
const recipesData = [
  {
    title: "Sushi",
    img: sushi,
    desc: "Delicate rolls of fresh salmon, avocado, and sushi rice, served with wasabi and pickled ginger.",
    price: "€22",
  },
  
  {
    title: "Pasta",
    img: pasta,
    desc: "Silky tagliatelle in a velvety Alfredo sauce with Parmigiano-Reggiano and cracked black pepper.",
    price: "€20",
  },
  {
    title: "Expresso",
    img: expresso,
    desc: "Intense single-origin espresso, extracted to perfection — bold, aromatic, unforgettable.",
    price: "€5",
  },
  {
    title: "Ossobuco",
    img: Ossobuco,
    desc: "Slow-braised veal shank in white wine and aromatics, served with saffron risotto.",
    price: "€42",
  },
  {
    title: "Latte Machito",
    img: Latte,
    desc: "Artfully layered macchiato with microfoam and a perfect espresso heart.",
    price: "€7",
  },
  {
    title: "Pollo alla",
    img: Pollo_alla,
    desc: "Herb-marinated chicken breast, grilled and finished with lemon-caper butter.",
    price: "€28",
  },
  {
    title: "Cotoletta alla Milanese",
    img: Cotolette,
    desc: "Golden-crusted veal cutlet, pan-fried in clarified butter, served with lemon wedge.",
    price: "€36",
  },
  {
    title: "Maroce Soup",
    img: maroce_soup,
    desc: "Hearty Tuscan vegetable and bean soup, finished with extra virgin olive oil.",
    price: "€14",
  },
];
const Recipies = () => {
  return (
    <section className="bg-cream py-20 px-6 md:px-12 lg:px-20">
      {/* Premium Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {recipesData.map((recipe, index) => (
          <div
            key={recipe.title}
            className={`group flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Container with fixed width & height */}
            <div className="relative lg:w-80 lg:h-80 w-full h-64 overflow-hidden">
              <img
                src={recipe.img}
                alt={recipe.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
                FEATURED
              </div>
            </div>

            {/* Text Content - make it same height as image */}
            <div className="p-8 lg:p-10 flex-1 flex flex-col justify-center lg:h-80">
              <h2 className="text-3xl font-serif font-medium text-burgundy mb-3">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed text-base">
                {recipe.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gold">{recipe.price}</span>
                <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                  House Specialty
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Recipies;
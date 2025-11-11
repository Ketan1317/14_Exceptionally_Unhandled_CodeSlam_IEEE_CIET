import pizzaBg from "/okok.png"
import pastaBg from "/okok2.png"; 

const foodAperitives = [
  {
    name: "Pizza Mexicana",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    price: "$17",
  },
  {
    name: "Pizza Quatro Stagioni",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    price: "$17",
  },
  {
    name: "Pizza Quatro Formagi",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    price: "$17",
  },
  {
    name: "Pizza Carnivora",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    price: "$17",
  },
  {
    name: "Lasagna",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    price: "$17",
  },
  {
    name: "Lasagna Napolitana",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    price: "$17",
  },
  {
    name: "Other Lasagna",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    price: "$17",
  },
];

const desserts = [
  {
    name: "Tiramisu",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    price: "$17",
  },
  {
    name: "Pizzelles",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    price: "$17",
  },
  {
    name: "Sicilian Ricotta",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    price: "$17",
  },
  {
    name: "Cannoli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    price: "$17",
  },
  {
    name: "Double Choco Biscotti",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    price: "$17",
  },
];

const Menu = () => {
  return (
    <div className="relative  min-h-screen bg-white overflow-hidden py-16 px-6 md:px-12 lg:px-20">
      <div className="absolute top-10 left-0 w-64 md:w-96 -translate-x-1/3 opacity-80">
        <img
          src={pizzaBg}
          alt="Pizza"
          className="w-full object-contain drop-shadow-2xl"
        />
      </div>
      <div className="absolute bottom-10 right-0 w-64 md:w-80 translate-x-1/4 opacity-80">
        <img
          src={pastaBg}
          alt="Pasta"
          className="w-full object-contain drop-shadow-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-center text-sm md:text-2xl uppercase tracking-widest text-gray-500 font-semibold mb-12">
            Food & Aperitives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
            {foodAperitives.map((item, index) => (
              <div key={index} className="flex items-start justify-between">
                <div className="flex-1 pr-6">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="relative text-center">
                  <span className="text-2xl flex items-center justify-center font-handwritten text-gold whitespace-nowrap">
                    {item.price}
                  </span>
                  <div className="absolute -top-1 -left-1 w-12 h-12 rounded-full border-2 border-gold opacity-30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-center text-sm md:text-2xl uppercase tracking-widest text-gray-500 font-semibold mb-12">
            Desserts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
            {desserts.map((item, index) => (
              <div key={index} className="flex items-start justify-between">
                <div className="flex-1 pr-6">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="relative">
                  <span className="text-2xl font-handwritten text-gold whitespace-nowrap">
                    {item.price}
                  </span>
                  <div className="absolute -top-1 -left-1 w-12 h-12 rounded-full border-2 border-gold opacity-30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

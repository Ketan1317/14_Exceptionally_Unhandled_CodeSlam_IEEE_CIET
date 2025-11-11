import sushi from "/sushi.png";
import pasta from "/pasta.png";
import pizza from "/pizza.png";
import expresso from "/expresso.png";
import Ossobuco from "/Ossobuco.jpeg";
import Latte from "/Latte Machito.jpeg";
import Pollo_alla from "/Pollo alla.jpeg";
import Cotolette from "/Cotoletta alla Milanese.jpeg";
import maroce_soup from "/maroce soup.jpeg";

const galleryImages = [
  sushi,
  pasta,
  pizza,
  expresso,
  Ossobuco,
  Latte,
  Pollo_alla,
  Cotolette,
  maroce_soup,
];

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 md:h-40 opacity-20 pointer-events-none">
        <div className="flex animate-scroll gap-8 h-full items-center">
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-20 md:h-28 w-auto object-contain filter drop-shadow-lg"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 pt-24 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
          <div className="md:col-span-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-3">
              Vino & Velvet
            </h2>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              Authentic Italian cuisine crafted with passion, tradition, and the finest ingredients.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-5 font-medium">
              Explore
            </h3>
            <ul className="space-y-3">
              {["Menu", "Reservations", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm font-light"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-5 font-medium">
              Visit Us
            </h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Square 1 Chitkara University<br />
              Italy 20121
            </p>
            <p className="mt-4 text-sm">
              <a href="tel:+39021234567" className="text-gray-300 hover:text-gold transition-colors">
                +39 02 123 4567
              </a>
            </p>
            <p className="text-sm">
              <a href="mailto:info@ladolcevita.it" className="text-gray-300 hover:text-gold transition-colors">
                info@Vino&Velvet.it
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-5 font-medium">
              Hours
            </h3>
            <p className="text-sm text-gray-300 font-light">
              Mon-Thu: 12 PM - 11 PM<br />
              Fri-Sun: 12 PM - 1 AM
            </p>
            <div className="flex space-x-4 mt-6">
              {["facebook", "instagram", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-gray-500 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
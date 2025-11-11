import { motion } from "framer-motion";
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
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-sm bg-black/40" />
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full px-10 py-6 text-white z-20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold tracking-wide">Vino & Velvet</h2>
            <p className="text-sm tracking-wider opacity-85">
              Fine Italian vibes paired with elegance
            </p>
          </motion.div>

          <div className="flex items-center gap-6 text-sm">
            {["SHOPS", "RECIPES", "NEWS", "ABOUT FAICCO'S", "CONTACT"].map(
              (item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <h3 className="cursor-pointer hover:opacity-70 transition">
                    {item}
                  </h3>
                  {index < 4 && <span className="mx-3 opacity-60">•</span>}
                </motion.div>
              )
            )}

            <motion.select
              className="px-5 py-2 rounded-md outline-none cursor-pointer text-white backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              <option value="EN">EN</option>
              <option value="HIN">HIN</option>
              <option value="PB">PB</option>
            </motion.select>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-2xl"
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1], 
          }}
        >
          Vino & Velvet
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl max-w-2xl opacity-90 leading-relaxed font-light"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 0.9 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Where refined flavors, rich textures, and timeless Italian charm come
          together to create unforgettable experiences.
        </motion.p>

        <motion.div
          className="mt-10 flex gap-6"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7, staggerChildren: 0.2 }}
        >
          <motion.button
            className="px-6 py-3 bg-white cursor-pointer text-black font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            Order Now
          </motion.button>

          <motion.button
            className="px-6 py-3 bg-transparent border  cursor-pointer border-white font-medium rounded-full hover:bg-white/10 backdrop-blur-sm transition"
            whileHover={{ scale: 1.05, borderColor: "#fff" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
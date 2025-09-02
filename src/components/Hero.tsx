import { motion } from "framer-motion";
import TextType from "../../reactBits/TextType/TextType";
const Hero = () => {
  return (
    <>
      <section className="relative text-white h-screen flex items-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Right Column (optional image/graphic) */}
          <div className="hidden md:flex items-center justify-center">
            {/* Placeholder for illustration or animation */}
            {/* <img src="https://tec.edu.pk/pk/wp-content/uploads/2025/02/events1.png" alt="" className="rounded-3xl"/> */}
          </div>
          {/* Left Content */}
           <div className="flex flex-col items-start justify-center ml-5 md:ml-10 bg-black/30 p-5 rounded-lg md:bg-transparent md:p-0">
          {/*  <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
              className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg"
            >
              Exploring Beyond Horizons
            </motion.h1> */}
            <TextType 
  text={["Tec - The Tec Eduction Consultancy", "for your children", "Develope Your Child!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
  className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg"
/>

<TextType 
  text={["Discover the cutting-edge innovations in satellite technology. Unlock the mysteries of distant galaxies and celestial bodies.Empowering communication and navigation worldwide. Pioneering thefuture of space exploration and discovery."]}
  typingSpeed={10}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
  className="text-base md:text-lg mt-5 max-w-xl drop-shadow-md"
/>
            {/* <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
              className="text-base md:text-lg mt-5 max-w-xl drop-shadow-md"
            >
              Discover the cutting-edge innovations in satellite technology.
              Unlock the mysteries of distant galaxies and celestial bodies.
              Empowering communication and navigation worldwide. Pioneering the
              future of space exploration and discovery.
            </motion.p> */}

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
              className="flex gap-4"
            >
              <button className="py-3 px-6 rounded-md mt-5 font-medium text-md bg-blue-600 hover:bg-blue-500 transition-all duration-300 hover:scale-105 shadow-lg">
                Learn More
              </button>
              <button className="py-3 px-6 rounded-md mt-5 font-medium text-md bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg">
                Contact Us
              </button>
            </motion.div>
          </div>

          
        </div>
      </section>

      {/* Bottom Gradient for Smooth Transition */}
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent to-black h-[80px] md:h-[100px]" />
    </>
  );
};

export default Hero;

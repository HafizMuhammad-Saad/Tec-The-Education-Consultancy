import { motion } from "framer-motion";
import TextType from "../../reactBits/TextType/TextType";
const Hero = () => {
  return (
    <>
      <section className="relative text-white h-screen flex items-center pt-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Right Column (optional image/graphic) */}
          <div className="hidden md:flex items-center justify-center">
            {/* Placeholder for illustration or animation */}
          </div>
          {/* Left Content */}
           <div className="flex flex-col items-start justify-center ml-5 md:ml-10 bg-black/30 p-5 rounded-lg md:bg-transparent md:p-0">
          
            <TextType 
  text={["Tec - The Eduction Consultancy", "for your children", "Develope Your Child!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
  className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg font-TimesNewRoman"
/>

<TextType 
  text={["Tec is a dynamic resource center and educational support organization committed to elevating the educational landscape by providing comprehensive solutions for teachers, students, and school management teams. Embracing the ethos of continual learning, our goal is to facilitate academic excellence by offering a diverse range of services and resources."]}
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
             <div className="hidden md:flex items-center mt-3">
        <button className="relative px-6 py-2 font-semibold text-gray-100 rounded-md border-2 border-cyan-400 
                           overflow-hidden transition-all duration-300 hover:text-black group">
          <span className="absolute inset-0 bg-cyan-400 translate-y-[150%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10">Know More</span>
        </button>
      </div>
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

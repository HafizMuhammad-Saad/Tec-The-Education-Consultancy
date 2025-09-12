// import { useState } from "react";
import { motion } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   EffectFade,
//   EffectFlip,
//   EffectCoverflow,
//   EffectCards,
//   EffectCreative,
//   Autoplay,
//   Pagination,
// } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/effect-flip";
// import "swiper/css/effect-coverflow";
// import "swiper/css/effect-cards";
// import "swiper/css/pagination";
        import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


const images = [
  "https://tec.edu.pk/pk/wp-content/uploads/2025/02/AKBER-2-1024x581-1.jpg",
  "https://tec.edu.pk/pk/wp-content/uploads/2025/02/DSC_0296-Copy-1024x681-1.jpg",
  "https://tec.edu.pk/pk/wp-content/uploads/2025/02/DSC_0348-1024x681-1.jpg",
  "https://tec.edu.pk/pk/wp-content/uploads/2025/02/IMG-20161220-WA0004-1024x614-1.jpg",
  "https://tec.edu.pk/pk/wp-content/uploads/2025/02/IMG-20170214-WA0032-1024x614-1.jpg",
  "https://tec.edu.pk/pk/wp-content/uploads/2025/02/IMG-20181030-WA0026.jpg",
  "https://tec.edu.pk/pk/wp-content/uploads/2025/02/IMG-20181030-WA0054.jpg",
  "https://tec.edu.pk/pk/wp-content/uploads/2025/02/IMG-20181106-WA0005.jpg",
];

const Carousel = () => {

//     const NextArrow = ({ onClick }: any) => (
//   <button
//     onClick={onClick}
//     className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-50 bg-blue-300/50 p-3 rounded-full text-white hover:bg-black/80 transition"
//   >
//     <FaChevronRight />
//   </button>
// );

// const PrevArrow = ({ onClick }: any) => (
//   <button
//     onClick={onClick}
//     className="absolute top-1/2 -left-3 transform -translate-y-1/2 z-50 bg-blue-300/50 p-3 rounded-full text-white hover:bg-black/80 transition"
//   >
//     <FaChevronLeft />
//   </button>
// );
  //     const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   fade: true,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 1500,
  //   autoplaySpeed: 1500,
  //   cssEase: "ease",
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 1024, // tablets
  //       settings: { slidesToShow: 2 },
  //     },
  //     {
  //       breakpoint: 640, // mobile
  //       settings: { slidesToShow: 1 },
  //     },
  //   ],
  // };



const effects = [
  "fade", 
  "flip", 
  "zoom", 
  "pageTurn", 
  "blast", 
  "rotate", 
  "slideUp", 
  "bricks", 
  "tilted", 
];
  const [index, setIndex] = useState(0);

  const [effect, setEffect] = useState("zoom");

  useEffect(() => {
    const interval = setInterval(() => {
      setEffect(effects[Math.floor(Math.random() * effects.length)]);
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

    // 🔹 Standard single-image variants
  const variants: any = {
    fade: { opacity: 0 },
    flip: { rotateY: 90, opacity: 0 },
    zoom: { scale: 0, opacity: 0 },
    pageTurn: { x: "100%", rotateY: -90, opacity: 0 },
    blast: { scale: 2, opacity: 0, rotate: 180 },
    rotate: { rotate: 360, opacity: 0 },
    slideUp: { y: 200, opacity: 0 },
    tilted: { 
  x: 200, 
  y: -100, 
  rotate: -15, 
  opacity: 0 
},


  };
const target = { opacity: 1, scale: 1, rotate: 0, rotateY: 0, x: 0, y: 0 };

  


  return (
    <section
      id="gallery"
      className="relative w-full py-16 bg-black flex items-center justify-center overflow-hidden" 
    >
      <div className="w-[90%] md:w-[80%] overflow-hidden relative">
        <motion.h2
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  style={{
    // position: 'relative',
    fontSize: '2.5rem',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '3rem',
    // fontFamily: `'Playfair Display', serif`,
    textTransform: 'uppercase',
    background: 'linear-gradient(to bottom, #e0e0e0 0%, #b0b0b0 35%, #a0a0a0 50%, #dcdcdc 70%, #8a8a8a 100%)',
    backgroundPosition: '0 1vw',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: '#fff',
    // display: 'inline-block',
  }}
>
  Our Gallery
  <span
    aria-hidden="true"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      display: 'block',
      color: '#b3b3b3',
      textShadow: `
        -1px 0 1px #b3b3b3,
        0 1px 1px #b3b3b3,
        5px 5px 10px rgba(0, 0, 0, 0.4),
        -5px -5px 10px rgba(0, 0, 0, 0.4)
      `,
      fontSize: '2.5rem',
      fontWeight: 400,
      fontFamily: `'Playfair Display', serif`,
      textTransform: 'uppercase',
      pointerEvents: 'none',
    }}
  >
    Our Gallery
  </span>
</motion.h2>


       
            {/* <div className="slider-container">
                <Slider {...settings}>
          {images.map((img, index) => (
<div key={index} className="px-2">
              <div className="rounded-xl overflow-hidden shadow-lg group">
                <img
                  src={img}
                  alt={`slide-${index}`}
                  className="object-cover w-full h-[90vh] transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
       
      
        ))}
        </Slider>
        </div> */}


    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={variants[effect]}
          animate={target}
          exit={variants[effect]}
          transition={{ duration: 1 }}
          className="absolute w-full h-full inset-0 object-contain md:object-cover rounded-lg shadow-lg"
        />
      </AnimatePresence>
    </div>

       
      </div>
    </section>
  );
};

export default Carousel;

// import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

    const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-50 bg-blue-300/50 p-3 rounded-full text-white hover:bg-black/80 transition"
  >
    <FaChevronRight />
  </button>
);

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 -left-3 transform -translate-y-1/2 z-50 bg-blue-300/50 p-3 rounded-full text-white hover:bg-black/80 transition"
  >
    <FaChevronLeft />
  </button>
);
      const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    fade: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "ease",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  


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
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Tec <span className="text-blue-400">Media</span>
        </motion.h2>
       
            <div className="slider-container">
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
        </div>

         {/* <Swiper
          modules={[EffectFade, EffectFlip, EffectCoverflow, Pagination]}
          effect="fade"
          pagination={{ clickable: true }}
         onSlideChange={(swiper) => {
    const effects = ["fade", "flip", "coverflow"];
    swiper.params.effect = effects[swiper.realIndex % effects.length];
    swiper.init(); // re-init to apply
  }}
          className="w-full h-[500px]"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img src={img} alt={`slide-${index}`} className="rounded-lg shadow-lg" />
            </SwiperSlide>
          ))}
        </Swiper> */}
       
      </div>
    </section>
  );
};

export default Carousel;

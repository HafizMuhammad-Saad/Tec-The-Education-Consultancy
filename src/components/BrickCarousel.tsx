import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import gsap from "gsap";
import { useRef } from "react";
import type { Swiper as SwiperClass } from "swiper";

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

export default function BrickCarousel() {
  const swiperRef = useRef<SwiperClass | null>(null);

  function runEffect(img: HTMLImageElement, index: number) {
    const effects = [brickEffect, blastEffect, zoomEffect, pageEffect];
    const effect = effects[index % effects.length];
    effect(img);
  }

  function brickEffect(img: HTMLImageElement) {
    const rect = img.getBoundingClientRect();
    const rows = 5, cols = 8;
    const pieces: HTMLImageElement[] = [];
    const overlay = document.getElementById("effect-overlay");

    if (!overlay) return;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const piece = img.cloneNode() as HTMLImageElement;
        piece.style.position = "absolute";
        piece.style.width = rect.width / cols + "px";
        piece.style.height = rect.height / rows + "px";
        piece.style.left = rect.left + c * (rect.width / cols) + "px";
        piece.style.top = rect.top + r * (rect.height / rows) + "px";
        piece.style.clipPath = `inset(${r * (100 / rows)}% ${(cols - c - 1) *
          (100 / cols)}% ${(rows - r - 1) * (100 / rows)}% ${c *
          (100 / cols)}%)`;
        piece.style.objectFit = "cover";
        overlay.appendChild(piece);
        pieces.push(piece);
      }
    }

    img.style.opacity = "0";

    gsap.to(pieces, {
      opacity: 0,
      x: () => gsap.utils.random(-200, 200),
      y: () => gsap.utils.random(-200, 200),
      rotation: () => gsap.utils.random(-90, 90),
      duration: 1.2,
      ease: "power3.in",
      stagger: { amount: 0.6, grid: [rows, cols] },
      onComplete: () => pieces.forEach((p) => p.remove()),
    });
  }

  function blastEffect(img: HTMLImageElement) {
    const rect = img.getBoundingClientRect();
    const pieces: HTMLImageElement[] = [];
    const overlay = document.getElementById("effect-overlay");
    if (!overlay) return;

    for (let i = 0; i < 30; i++) {
      const piece = img.cloneNode() as HTMLImageElement;
      piece.style.position = "absolute";
      piece.style.width = rect.width / 5 + "px";
      piece.style.height = rect.height / 6 + "px";
      piece.style.left = rect.left + Math.random() * rect.width + "px";
      piece.style.top = rect.top + Math.random() * rect.height + "px";
      piece.style.clipPath = "circle(20% at 50% 50%)";
      overlay.appendChild(piece);
      pieces.push(piece);
    }

    img.style.opacity = "0";

    gsap.to(pieces, {
      opacity: 0,
      scale: () => gsap.utils.random(0.5, 2),
      x: () => gsap.utils.random(-300, 300),
      y: () => gsap.utils.random(-300, 300),
      rotation: () => gsap.utils.random(-360, 360),
      duration: 1.2,
      ease: "power2.out",
      onComplete: () => pieces.forEach((p) => p.remove()),
    });
  }

  function zoomEffect(img: HTMLImageElement) {
    gsap.fromTo(
      img,
      { scale: 1.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }

  function pageEffect(img: HTMLImageElement) {
    gsap.fromTo(
      img,
      { rotationY: 90, opacity: 0, transformOrigin: "left center" },
      { rotationY: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
    );
  }

  return (
    <section className="relative w-full py-16 bg-black">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        TEC <span className="text-cyan-400">Media</span>
      </h2>

      {/* Effect overlay */}
      <div
        id="effect-overlay"
        className="fixed inset-0 pointer-events-none z-[9999]"
      ></div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChangeTransitionStart={(swiper) => {
          const currentImg = swiper.slides[swiper.previousIndex]?.querySelector(
            "img"
          ) as HTMLImageElement;
          if (currentImg) runEffect(currentImg, swiper.realIndex);
        }}
        className="w-[90%] md:w-[70%] h-[500px] rounded-xl overflow-hidden shadow-2xl"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

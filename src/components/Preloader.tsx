import  { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const logoRef = useRef(null);

useEffect(() => {
  gsap.fromTo(
    logoRef.current,
    { scale: 0.5, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out" }
  );

  // Animate gradient background
  gsap.to("#preloader", {
  y: "-100%",
  duration: 1.5,
  ease: "power4.inOut",
  delay: 2,
});
  gsap.fromTo(
  "#tagline",
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 }
);
}, []);




  return (
  <div
  id="preloader"
  className="fixed inset-0 z-[9999] flex items-center justify-center 
             bg-[linear-gradient(270deg,#0f172a,#00f7ff,#0f172a)] bg-[length:200%_200%]
             backdrop-blur-md"
>
  <img
    ref={logoRef}
    src="/image.png"
    alt="TEC Logo"
    className="w-72 md:w-80 drop-shadow-[0_0_35px_rgba(0,247,255,1)]"
  />

  {/* <p id="tagline" className="mt-6 text-xl font-semibold text-cyan-300 tracking-wider">
  Shaping Futures with TEC
</p> */}
</div>
  );
};

export default Preloader;

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

const logos = [
    "/Tec_Clients_Logo/Artboard 1.png",
    "/Tec_Clients_Logo/Artboard 2.png",
    "/Tec_Clients_Logo/Artboard 3.png",
    "/Tec_Clients_Logo/Artboard 4.png",
    "/Tec_Clients_Logo/Artboard 5.png",
    "/Tec_Clients_Logo/Artboard 6.png",
    "/Tec_Clients_Logo/Artboard 7.png",
    "/Tec_Clients_Logo/Artboard 8.png",
    "/Tec_Clients_Logo/Artboard 9.png",
    "/Tec_Clients_Logo/Artboard 10.png",
    "/Tec_Clients_Logo/Artboard 11.png",
    "/Tec_Clients_Logo/Artboard 12.png",
    "/Tec_Clients_Logo/Artboard 13.png",
];

export default function LogoSlider() {
    const x = useMotionValue(0); // motion value for horizontal position
    const [paused, setPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Animation loop
    useAnimationFrame((_, delta) => {
        if (!paused) {
            const moveBy = (delta / 1000) * 100; // speed (100px per second)
            let current = x.get();
            x.set(current - moveBy); // move left

            // Reset when half of logos width is passed
            const containerWidth = containerRef.current?.scrollWidth || 0;
            if (Math.abs(current) >= containerWidth / 2) {
                x.set(0);
            }
        }
    });

    // Duplicate logos for seamless loop
    const loopedLogos = [...logos, ...logos];

    return (


        <div className="overflow-hidden bg-black relative">
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]" /> */}

            {/* <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent to-black h-[80px] md:h-[100px]" /> */}

            <motion.h2
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  style={{
    fontSize: '2.5rem', // Adjust if needed for responsiveness
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#ccc',
    textShadow: `
      1px 1px 0 #999,
      2px 2px 1px #666,
      3px 3px 2px #333
    `
  }}
>
  <span
    style={{
      background: 'linear-gradient(135deg, #d9d9d9, #aaaaaa, #f1f1f1, #888888)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    }}
  >
    Our Clients
  </span>
</motion.h2>
            <motion.div ref={containerRef} className="inline-flex gap-4" onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)} style={{ x }}>
                {loopedLogos.map((logo, i) => {
                    //   console.log("Rendering logo:", logo);
                    return (
                        <div
                            key={i}
                            className="h-44 w-44 flex items-center justify-center 
             bg-white border border-black rounded-xl shadow-sm 
             hover:shadow-lg transition-all duration-300 cursor-pointer"
                        >
                            <img
                                src={logo}
                                alt={`logo-${i}`}
                                className="max-h-full max-w-full object-contain transition-all duration-500"
                            />
                        </div>

                    );
                })}
            </motion.div>
        </div>

    );
}
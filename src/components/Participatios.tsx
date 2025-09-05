import { motion } from 'motion/react'
import LogoLoop from '../../reactBits/LogoLoop/LogoLoop'

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/src/assets/abt-img2.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/src/assets/abt-img2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/src/assets/abt-img2.png", alt: "Company 3", href: "https://company3.com" },
];

const Participatios = () => {
  return (
    <div className="pt-4 pb-10 p-8 text-white bg-black relative z-50">
      {/* <div className="min-h-[400px]"> */}
         <motion.h2
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-center mb-12"
                >
                  Our <span className="text-blue-400">Participations</span>
                </motion.h2>
        <div style={{ height: '100px', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={500}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
      {/* </div> */}
    </div>
  )
}

export default Participatios

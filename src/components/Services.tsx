// import { FaBroadcastTower, FaGlobe, FaRegMoon, FaRocket } from "react-icons/fa";
// import { GiSatelliteCommunication } from "react-icons/gi";
// import { MdSatellite } from "react-icons/md";
import { Link } from "react-router-dom";
import wave2 from "../assets/wave2.gif";
import { motion } from "framer-motion";
import FlipCard from "./FlipCard";
  
// import TiltedCard from "../TiltedCard";
export interface SERVICE {
  title: string;
  link: string;
  description: string;
  // icon: JSX.Element;
  aosDelay: string;
  image: string;


}

const ServiceData: SERVICE[] = [
  {
    title: "Tec Browser",
    link: "/tecbrowser",
    description: "Used for observations, capturing stunning images of the universe.",
    // icon: <FaRocket />,
    image: "/assets/browser.gif",
    aosDelay: "300",
  },
  {
    title: "Learning Management System",
    link: "/lmspage",
    description: "Orbits Earth to provide constant communication and weather monitoring.",
    // icon: <MdSatellite />,
        image: "/assets/AnimatedDashboards.gif",

    aosDelay: "400",
  },
  {
    title: "Computer Based Testing System",
    link: "/cbtpage",
    description: "Enables GPS technology for accurate positioning and navigation worldwide.",

    image: "/assets/dashboard.gif",
    // icon: <FaGlobe />,
    aosDelay: "500",
  },
  {
    title: "School Management System",
    link: "/smspage",

    image: "/assets/Marketinganalytics.gif",
    description: "Facilitates television, internet, and radio broadcasting across the globe.",
    // icon: <FaBroadcastTower />,
    aosDelay: "600",
  },
  {
    title: "Publications",
    link: "/publications",

    image: "/assets/publications.gif",
    description: "Monitors the lunar surface and assists with space exploration efforts.",
    // icon: <FaRegMoon />,
    aosDelay: "700",
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   show: { opacity: 1, y: 0 },
// };


const Services = () => {

  return (
    <div className="pt-4 pb-10 p-8 text-white bg-black relative z-50">
      <div className="min-h-[400px]">
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
    Our Services
  </span>
</motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 relative mt-10 z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {ServiceData.map((services, index) => (
            <Link to={services.link} key={index} target="_blank" rel="noopener noreferrer">
              <FlipCard
       image={services.image}
       title={services.title}
       description={services.description}
     />

            </Link>


          ))}

          
        </motion.div>

        <img
          src={wave2}
          alt="wave"
          className="hidden md:flex md:h-[300px] w-full object-cover mix-blend-screen translate-y-3 relative z-[0]"
        />
       
      </div>

    </div>
  );
};

export default Services;

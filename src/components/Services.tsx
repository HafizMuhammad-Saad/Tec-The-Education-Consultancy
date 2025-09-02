// import { FaBroadcastTower, FaGlobe, FaRegMoon, FaRocket } from "react-icons/fa";
// import { GiSatelliteCommunication } from "react-icons/gi";
// import { MdSatellite } from "react-icons/md";
import { Link } from "react-router-dom";
import wave2 from "../assets/wave2.gif";
import { motion } from "framer-motion";

export interface SERVICE {
  title: string;
  link: string;
  description: string;
  // icon: JSX.Element;
  aosDelay: string;
  image?: string;
}

const ServiceData: SERVICE[] = [
  {
    title: "Tec Browser",
    link: "/",
    description: "Used for observations, capturing stunning images of the universe.",
    // icon: <FaRocket />,
    image: "https://tec.edu.pk/pk/wp-content/uploads/2025/02/tecbrowser3.png",
    aosDelay: "300",
  },
  {
    title: "Learning Management System",
    link: "35,786km",
    description: "Orbits Earth to provide constant communication and weather monitoring.",
    // icon: <MdSatellite />,
        image: "https://tec.edu.pk/pk/wp-content/uploads/2025/02/lms1.png",

    aosDelay: "400",
  },
  {
    title: "Computer Based Testing System",
    link: "20,200km",
    description: "Enables GPS technology for accurate positioning and navigation worldwide.",

    image: "https://tec.edu.pk/pk/wp-content/uploads/2025/02/Computer-Based-Testing2.png",
    // icon: <FaGlobe />,
    aosDelay: "500",
  },
  {
    title: "School Management System",
    link: "8,000-36,000km",

    image: "https://tec.edu.pk/pk/wp-content/uploads/2025/02/sms2.png",
    description: "Facilitates television, internet, and radio broadcasting across the globe.",
    // icon: <FaBroadcastTower />,
    aosDelay: "600",
  },
  {
    title: "Publications",
    link: "384,400km",

    image: "https://tec.edu.pk/pk/wp-content/uploads/2025/02/pub.png",
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

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <div className="pt-4 pb-10 p-8 text-white bg-black relative z-50">
      <div className="min-h-[400px]">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-7 relative mt-10 z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {ServiceData.map((services, index) => (
           <motion.div
  key={index}
  variants={itemVariants}
  className="flex flex-col items-center gap-4 bg-sky-900/60 p-6 rounded-md w-full hover:shadow-lg hover:shadow-sky-500/20 transition duration-300"
>
  <Link
    to={services.link}
    className="flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300 w-full"
  >
    {/* Bigger, consistent image */}
    <img
      src={services.image}
      alt={services.title}
      className="w-40 h-40 md:w-52 md:h-52 object-contain"
    />

    {/* Title */}
    <h1 className="text-lg md:text-xl font-semibold text-center">
      {services.title}
    </h1>

    {/* Description */}
    {/* <p className="text-sm text-center text-gray-300 leading-relaxed">
      {services.description}
    </p> */}
  </Link>
</motion.div>

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

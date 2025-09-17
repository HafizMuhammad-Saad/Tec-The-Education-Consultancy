import { motion } from "framer-motion";
import {
  FaRocket,
  FaGraduationCap,
  FaLaptopCode,
  FaBook,
  FaRobot,
} from "react-icons/fa";

// Timeline data
const journey = [
  {
    year: "2012",
    title: "TEC Browser",
    desc: "Launch of our first learning browser tailored for education.",
    icon: <FaRocket className="text-cyan-400 text-4xl" />,
  },
  {
    year: "2014",
    title: "Learning Management System",
    desc: "Introduction of LMS for online classes, courses, and e-learning support.",
    icon: <FaGraduationCap className="text-cyan-400 text-4xl" />,
  },
  {
    year: "2016",
    title: "School Management System (SMS)",
    desc: "Developed SMS to manage schools, teachers, and student records.",
    icon: <FaLaptopCode className="text-cyan-400 text-4xl" />,
  },
  {
    year: "2020",
    title: "Customized Content",
    desc: "Launched personalized learning resources & publications.",
    icon: <FaBook className="text-cyan-400 text-4xl" />,
  },
  {
    year: "2023",
    title: "CBTS - Computer Based Testing System",
    desc: "Digital assessment tools for teachers and students.",
    icon: <FaGraduationCap className="text-cyan-400 text-4xl" />,
  },
  {
    year: "2024",
    title: "STEAM & Robotics",
    desc: "Introducing hands-on robotics and STEAM education.",
    icon: <FaRobot className="text-cyan-400 text-4xl" />,
  },
  {
    year: "2025",
    title: "E-Academy & Core Academics",
    desc: "Comprehensive online academy and core academics expansion.",
    icon: <FaGraduationCap className="text-cyan-400 text-4xl" />,
  },
];

const OurJourney = () => {
  return (
    <div className="pt-40 pb-20 bg-black text-gray-200 overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 lg:px-28">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-20"
        >
          Our <span className="text-cyan-400">Journey</span>
        </motion.h1>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Animated path */}
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              stroke="#22d3ee"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </svg>

          {/* Milestones */}
          <div className="flex flex-col space-y-24">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
               
<div
  className={`relative max-w-md p-8 rounded-2xl
              bg-gradient-to-br from-slate-900/70 to-slate-800/70
              border border-cyan-400/30 backdrop-blur-xl
              shadow-[0_0_20px_rgba(34,211,238,0.25)]
              hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]
              transition-all duration-500 hover:scale-105
              ${i % 2 === 0 ? "mr-20" : "ml-20"}`}
>
  <span className="absolute -top-4 left-6 px-4 py-1 
                   bg-cyan-400 text-black font-bold rounded-full 
                   text-sm shadow-md">
    {item.year}
  </span>

  <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
    {item.title}
  </h3>

  <p className="mt-2 text-gray-300 leading-relaxed">
    {item.desc}
  </p>
</div>


                <span
                  className={`absolute left-1/2 transform -translate-x-1/2 w-20 h-20 
                              flex items-center justify-center rounded-full bg-slate-900 
                              border-4 border-cyan-400 shadow-lg`}
                >
                  {item.icon}
                </span>
              </motion.div>
            ))}
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default OurJourney;

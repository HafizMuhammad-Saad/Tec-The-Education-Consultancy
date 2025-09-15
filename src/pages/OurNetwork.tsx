import { motion } from "framer-motion";
import { FaRocket, FaGraduationCap, FaLaptopCode, FaBook, FaRobot } from "react-icons/fa";

// Timeline data
const journey = [
  {
    year: "2012",
    title: "TEC Browser",
    desc: "Launch of our first learning browser tailored for education.",
    icon: <FaRocket className="text-cyan-400 text-3xl" />,
  },
  {
    year: "2014",
    title: "Learning Management System",
    desc: "Introduction of LMS for online classes, courses, and e-learning support.",
    icon: <FaGraduationCap className="text-cyan-400 text-3xl" />,
  },
  {
    year: "2016",
    title: "School Management System (SMS)",
    desc: "Developed SMS to manage schools, teachers, and student records.",
    icon: <FaLaptopCode className="text-cyan-400 text-3xl" />,
  },
  {
    year: "2020",
    title: "Customized Content",
    desc: "Launched personalized learning resources & publications.",
    icon: <FaBook className="text-cyan-400 text-3xl" />,
  },
  {
    year: "2023",
    title: "CBTS - Computer Based Testing System",
    desc: "Digital assessment tools for teachers and students.",
    icon: <FaGraduationCap className="text-cyan-400 text-3xl" />,
  },
  {
    year: "2024",
    title: "STEAM & Robotics",
    desc: "Introducing hands-on robotics and STEAM education.",
    icon: <FaRobot className="text-cyan-400 text-3xl" />,
  },
  {
    year: "2025",
    title: "E-Academy & Core Academics",
    desc: "Comprehensive online academy and core academics expansion.",
    icon: <FaGraduationCap className="text-cyan-400 text-3xl" />,
  },
];

const OurNetwork = () => {
  return (
    <div className="pt-40 pb-20 bg-black text-gray-200">
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

        {/* Timeline */}
        <div className="relative border-l-4 border-cyan-400/60 ml-6">
          {journey.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-16 ml-6 relative"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[38px] flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border-4 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                {item.icon}
              </span>

              {/* Card */}
              <div className="bg-gradient-to-b from-slate-900 to-slate-800 p-6 rounded-lg shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition duration-500">
                <h3 className="text-2xl font-semibold text-cyan-400">
                  {item.year} – {item.title}
                </h3>
                <p className="mt-2 text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurNetwork;

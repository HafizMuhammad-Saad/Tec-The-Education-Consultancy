import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaNetworkWired,
  FaRobot,
  FaBook,
  FaSchool,
} from "react-icons/fa";

// Services data
const services = [
  {
    title: "LMS - Learning Management System",
    desc: "A complete e-learning platform to manage courses, classes, students, and assessments efficiently.",
    icon: <FaLaptopCode className="text-[#f5c2c3] text-5xl" />,
  },
  {
    title: "CBTS - Computer Based Testing System",
    desc: "An advanced system for digital assessments, quizzes, and performance tracking.",
    icon: <FaChalkboardTeacher className="text-[#f5c2c3] text-5xl" />,
  },
  {
    title: "SMS - School Management System",
    desc: "Powerful tools for managing school operations, administration, and communication.",
    icon: <FaSchool className="text-[#f5c2c3] text-5xl" />,
  },
  {
    title: "Tec Browser",
    desc: "Customized browser for secure online learning on Android and Windows platforms.",
    icon: <FaNetworkWired className="text-[#f5c2c3] text-5xl" />,
  },
  {
    title: "STEAM & Robotics",
    desc: "Engaging programs in Robotics, Coding, and STEAM to prepare students for the future.",
    icon: <FaRobot className="text-[#f5c2c3] text-5xl" />,
  },
  {
    title: "Publications & E-Learning",
    desc: "Digital Montessori Apps, Online Courses, and Customized Content for teachers & students.",
    icon: <FaBook className="text-[#f5c2c3] text-5xl" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const OurServices = () => {
  return (
    <div className="pt-40 pb-20 bg-black text-gray-200">
      <div className="container mx-auto px-6 md:px-16 lg:px-28">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-16"
        >
          Our <span className="text-[#b91f24] border-b-2 border-[#b91f24] border-dashed">Services</span>
        </motion.h1>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-gradient-to-br from-[#b91f24] via-rose-600 to-[#ff0000]
 p-8 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-500 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#fcc4c6] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-100">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;

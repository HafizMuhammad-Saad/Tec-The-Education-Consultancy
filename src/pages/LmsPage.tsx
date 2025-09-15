import { motion } from "framer-motion";
import {
  FaBolt,
  FaQuestionCircle,
  FaBookReader,
  FaEdit,
  FaPlayCircle,
  FaFilm,
} from "react-icons/fa";

const features = [
  {
    title: "Power-Up the Learning Journey",
    desc: "Dive into an immersive world of knowledge with interactive PowerPoint presentations that bring lessons to life.",
    icon: <FaBolt className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Quiz Quest",
    desc: "Engaging quizzes tailored to your learning objectives for mastery and assessment.",
    icon: <FaQuestionCircle className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Study Smart Packs",
    desc: "Comprehensive study packs designed to supercharge your learning potential.",
    icon: <FaBookReader className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Worksheet Wonderland",
    desc: "Interactive worksheets that transform learning into a fun and engaging adventure.",
    icon: <FaEdit className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Topical Animation Adventure",
    desc: "Immersive animated concepts that make learning captivating and memorable.",
    icon: <FaPlayCircle className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Video Voyages",
    desc: "Educational videos covering a wide range of topics for deeper understanding.",
    icon: <FaFilm className="text-cyan-400 text-3xl" />,
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

const LMSPage = () => {
  return (
    <div className="pt-40 pb-20 bg-black text-gray-200">
      <div className="container mx-auto px-6 md:px-16 lg:px-28">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-12"
        >
          Learning <span className="text-cyan-400">Management System</span>
        </motion.h1>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <img
            src="https://tec.edu.pk/pk/wp-content/uploads/2025/02/lms.jpg"
            alt="LMS"
            className="rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.5)] max-w-3xl w-full"
          />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-gradient-to-b from-slate-900 to-slate-800 p-8 rounded-xl shadow-lg 
                         hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-slate-900 to-slate-800 p-10 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">
            Elevate <span className="text-cyan-400">Learning Experiences</span>
          </h3>
          <p className="text-gray-400 mb-6">
            With LMS, education becomes interactive, engaging, and future-ready. 
            Transform how students learn and teachers teach with powerful digital tools.
          </p>
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition">
            Explore LMS
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LMSPage;

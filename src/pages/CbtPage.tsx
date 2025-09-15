import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaTrophy,
  FaChartLine,
  FaCogs,
  FaCompass,
  FaRocket,
  FaClipboardCheck,
} from "react-icons/fa";

const features = [
  {
    title: "Elevate Your Testing Experience",
    desc: "Step into the future of assessments with our cutting-edge CBTS system, where interaction meets innovation.",
    icon: <FaRocket className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Engage, Test, Excel",
    desc: "Engage students in a dynamic testing environment that challenges knowledge and empowers success.",
    icon: <FaTrophy className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Interactive Mastery",
    desc: "Master concepts interactively through an intuitive CBTS platform, where every question is a step toward understanding.",
    icon: <FaLaptopCode className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Navigate Your Success",
    desc: "User-friendly interface designed to enhance comprehension and streamline the testing process.",
    icon: <FaCompass className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Experience the Evolution",
    desc: "Transform traditional exams into interactive learning experiences.",
    icon: <FaCogs className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Unlock Your Potential",
    desc: "Personalized feedback and insights that guide your learning journey towards excellence.",
    icon: <FaChartLine className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Interactive Insights, Instant Results",
    desc: "Gain instant performance insights with interactive reports highlighting strengths and areas for improvement.",
    icon: <FaClipboardCheck className="text-cyan-400 text-3xl" />,
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

const CBTSPage = () => {
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
          Computer-Based <span className="text-cyan-400">Testing System</span>
        </motion.h1>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <img
            src="https://tec.edu.pk/pk/wp-content/uploads/2025/02/cbts.jpg"
            alt="CBTS"
            className="rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.5)] max-w-4xl w-full"
          />
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-20"
        >
          Embrace the future of assessments with our interactive CBTS platform, where 
          <span className="text-cyan-400"> learning meets innovation </span> 
          for unparalleled success. Join us on an educational journey where interactivity 
          unlocks true potential!
        </motion.p>

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
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  {feature.title}
                </h3>
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
            Transform Your <span className="text-cyan-400">Exams</span>
          </h3>
          <p className="text-gray-400 mb-6">
            Move beyond traditional exams. CBTS redefines testing with innovation, 
            interactivity, and instant results.
          </p>
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition">
            Try CBTS
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CBTSPage;

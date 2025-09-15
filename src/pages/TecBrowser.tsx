import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Engagement of students creates more focus in studies",
  "Collaborative Learning Model",
  "Improved retention of knowledge",
  "Enhanced critical thinking for problem solving",
  "Dynamic and stimulating classroom environment",
];

const TecBrowser = () => {
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
          Tec <span className="text-cyan-400">Browser</span>
        </motion.h1>

        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Revolutionizing <span className="text-cyan-400">Teaching</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              If you are still using the same old & obsolete teaching techniques in this era of 
              technology & innovation, your teaching standards will remain impactless. 
              Tec Browser is designed to empower teachers with interactive teaching strategies 
              that promote deeper learning, collaboration, and critical thinking.
            </p>

            {/* Feature List */}
            <ul className="space-y-4">
              {features.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-cyan-400 text-xl mt-1" />
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://tec.edu.pk/pk/wp-content/uploads/2025/02/tec-browser.jpg"
              alt="Tec Browser"
              className="rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.5)] max-w-md w-full"
            />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-slate-900 to-slate-800 p-10 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">
            Upgrade Your <span className="text-cyan-400">Classroom</span>
          </h3>
          <p className="text-gray-400 mb-6">
            Incorporate Tec Browser today and create an engaging, collaborative, and future-ready
            learning environment.
          </p>
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition">
            Request Demo
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TecBrowser;

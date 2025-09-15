import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};


const About = () => {
  return (
     <div className="pt-40 pb-20 bg-black text-gray-200">
      <div className="container mx-auto px-6 md:px-16 lg:px-28">
        
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-32"
        >
          <motion.img
            src="https://tec.edu.pk/pk/wp-content/uploads/2025/02/technical-education-for-com.jpg"
            alt="TEC Intro"
            className="rounded-xl shadow-[0_0_25px_rgba(0,255,255,0.3)] w-full filter invert"
            variants={fadeInUp}
            custom={1}
          />
          <motion.div variants={fadeInUp} custom={2}>
            <h2 className="text-5xl font-extrabold mb-6 leading-snug">
              Welcome to <span className="text-cyan-400">TEC</span>
            </h2>
            <p className="leading-relaxed text-lg text-gray-300">
              Tec is a dynamic resource center and educational support
              organization committed to elevating the educational landscape by
              providing comprehensive solutions for teachers, students, and
              school management teams.
            </p>
          </motion.div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-32"
        >
          <motion.div variants={fadeInUp} custom={1}>
            <h2 className="text-5xl font-extrabold mb-6 leading-snug">
              Our <span className="text-cyan-400">Mission</span>
            </h2>
            <p className="leading-relaxed text-lg text-gray-300">
              We strive to be at the forefront of educational innovation,
              delivering tailored, reliable, and integrated solutions under one
              roof. Our focus is on advancing academic standards and fostering a
              culture of continuous improvement in the education sector.
            </p>
          </motion.div>
          <motion.img
            src="https://tec.edu.pk/pk/wp-content/uploads/2025/02/tec-mission.png"
            alt="Mission"
            className="rounded-xl shadow-[0_0_25px_rgba(0,255,255,0.3)] w-full"
            variants={fadeInUp}
            custom={2}
          />
        </motion.div>

        {/* CEO Message */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-5xl font-extrabold mb-8"
          >
            CEO’s <span className="text-cyan-400">Message</span>
          </motion.h2>
          <motion.img
            src="https://tec.edu.pk/pk/wp-content/uploads/2025/02/ce0-message.jpg"
            alt="CEO Message"
            className="rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.4)] mx-auto w-full max-w-4xl"
            variants={fadeInUp}
            custom={2}
          />
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-5xl font-extrabold mb-8"
          >
            Meet Our <span className="text-cyan-400">Team</span>
          </motion.h2>
          <motion.img
            src="https://tec.edu.pk/pk/wp-content/uploads/2025/08/our-team.jpg"
            alt="Our Team"
            className="rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.4)] mx-auto w-full max-w-3xl"
            variants={fadeInUp}
            custom={2}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;

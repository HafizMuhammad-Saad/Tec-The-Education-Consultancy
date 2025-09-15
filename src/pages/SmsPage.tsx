import { motion } from "framer-motion";
import {
  FaSchool,
  FaChalkboardTeacher,
  FaUsers,
  FaClipboardList,
  FaUserFriends,
  FaChartBar,
  FaInfinity,
} from "react-icons/fa";

const features = [
  {
    title: "Revolutionize School Management",
    desc: "Enter the era of seamless school administration with our interactive SMS, where efficiency meets innovation.",
    icon: <FaSchool className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Empower Educators, Engage Students",
    desc: "Empower teachers to focus on teaching while our SMS fosters student engagement and success.",
    icon: <FaChalkboardTeacher className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Interactive Collaboration Hub",
    desc: "Transform operations into a hub where admins, teachers, students, and parents collaborate seamlessly.",
    icon: <FaUsers className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Effortless Efficiency",
    desc: "Say goodbye to paperwork with our intuitive SMS — from attendance to grade management and beyond.",
    icon: <FaClipboardList className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Parental Participation, Instant Insights",
    desc: "Enable parents with real-time updates and communication for a supportive learning environment.",
    icon: <FaUserFriends className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Data-Driven Decisions, Dynamic Results",
    desc: "Leverage powerful analytics to improve performance, allocate resources, and plan strategically.",
    icon: <FaChartBar className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Seamless Integration, Endless Possibilities",
    desc: "Integrate our SMS easily into your ecosystem to optimize operations and enhance learning.",
    icon: <FaInfinity className="text-cyan-400 text-3xl" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const SMSPage = () => {
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
          School Management <span className="text-cyan-400">System</span>
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
            src="https://tec.edu.pk/pk/wp-content/uploads/2025/02/sms.jpg"
            alt="School Management System"
            className="rounded-xl shadow-[0_0_30px_rgba(34,211,238,0.5)] max-w-3xl w-full"
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
          Experience the future of school management with our interactive SMS — 
          where <span className="text-cyan-400">efficiency</span>,{" "}
          <span className="text-cyan-400">engagement</span>, and{" "}
          <span className="text-cyan-400">innovation</span> converge for educational excellence.
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
            Manage Schools with <span className="text-cyan-400">Ease</span>
          </h3>
          <p className="text-gray-400 mb-6">
            Streamline administration, empower educators, and enhance collaboration — all in one powerful system.
          </p>
          <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition">
            Explore SMS
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SMSPage;

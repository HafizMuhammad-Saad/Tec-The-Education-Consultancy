// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaAtom,
//   FaCalculator,
//   FaBookOpen,
//   FaLaptopCode,
//   FaGlobe,
//   FaChild,
// } from "react-icons/fa";

// // Subjects & Programs
// const academics = [
//   { title: "Physics", icon: <FaAtom className="text-cyan-400 text-5xl" /> },
//   { title: "Chemistry", icon: <FaAtom className="text-cyan-400 text-5xl" /> },
//   { title: "Mathematics", icon: <FaCalculator className="text-cyan-400 text-5xl" /> },
//   { title: "Biology", icon: <FaBookOpen className="text-cyan-400 text-5xl" /> },
//   { title: "English", icon: <FaGlobe className="text-cyan-400 text-5xl" /> },
//   { title: "Urdu", icon: <FaGlobe className="text-cyan-400 text-5xl" /> },
//   { title: "Islamiat", icon: <FaBookOpen className="text-cyan-400 text-5xl" /> },
//   { title: "Computer Science", icon: <FaLaptopCode className="text-cyan-400 text-5xl" /> },
//   { title: "Coding & Programming", icon: <FaLaptopCode className="text-cyan-400 text-5xl" /> },
// ];

// // Animation settings
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };
// const item = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const Contact = () => {
//   return (
//     <div className="pt-32 pb-20 bg-black text-gray-200">
//       <div className="container mx-auto px-6 md:px-16 lg:px-28">
        
//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: -40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-5xl font-extrabold text-center mb-16"
//         >
//           Core <span className="text-cyan-400">Academics</span>
//         </motion.h1>

//         {/* Intro */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-20"
//         >
//           At TEC, we provide <span className="text-cyan-400">comprehensive academic programs</span>
//           from Nursery to Matric, ensuring strong foundations across sciences, languages,
//           and technology. Our <span className="text-cyan-400">E-Academy Coaching</span> supplements 
//           traditional learning with modern digital tools.
//         </motion.p>

//         {/* Subjects Grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24"
//         >
//           {academics.map((subject, i) => (
//             <motion.div
//               key={i}
//               variants={item}
//               className="bg-gradient-to-b from-slate-900 to-slate-800 p-8 rounded-xl shadow-lg 
//                          hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-500 group"
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
//                   {subject.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-cyan-400">
//                   {subject.title}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Programs */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <h2 className="text-3xl font-bold mb-6 text-cyan-400">
//             Our Programs
//           </h2>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
//             🎓 <span className="font-semibold">TEC E-School System:</span> Nursery to Matric <br />
//             🏫 <span className="font-semibold">TEC E-Academy:</span> Coaching classes & extra support
//           </p>
//           <FaChild className="text-cyan-400 text-6xl mx-auto mt-6" />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
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
          Contact <span className="text-cyan-400">Us</span>
        </motion.h1>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-10 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-slate-900 to-slate-800 p-8 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition"
          >
            <FaPhoneAlt className="text-cyan-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-400 mt-2">021-36681927</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-slate-900 to-slate-800 p-8 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition"
          >
            <FaEnvelope className="text-cyan-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-400 mt-2">info@tec.edu.pk</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-slate-900 to-slate-800 p-8 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition"
          >
            <FaMapMarkerAlt className="text-cyan-400 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-gray-400 mt-2">Karachi, Pakistan</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-slate-900 to-slate-800 p-8 rounded-xl shadow-lg max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="Your Name"
              className="p-4 rounded-lg bg-black/40 border border-cyan-400/40 focus:border-cyan-400 outline-none text-white" />
            <input type="email" placeholder="Your Email"
              className="p-4 rounded-lg bg-black/40 border border-cyan-400/40 focus:border-cyan-400 outline-none text-white" />
          </div>
          <textarea rows={5} placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-black/40 border border-cyan-400/40 focus:border-cyan-400 outline-none text-white mb-6" />
          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;


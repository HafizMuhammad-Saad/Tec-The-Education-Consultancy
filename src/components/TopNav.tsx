import { motion } from "framer-motion";
import { FaBullhorn } from "react-icons/fa";

const TopNav = () => {
  return (
        <>
        {/* <img src="/unnamed.jpg" alt="" /> */}
    <div className="w-full text-gray-50 py-2 px-4 fixed top-0 left-0 z-[60] shadow-md overflow-hidden bg-gradient-to-r from-[#0fff]/70 to-[#1e3a8a]/70 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <FaBullhorn className="text-lg md:text-xl flex-shrink-0" />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
          className="whitespace-nowrap text-sm md:text-base font-medium"
        >
          🎉 Admissions Open — Enroll your child today and unlock the future! |  
          🚀 New Courses Available for 2025 |  
          🌟 Join our Global Network Today!
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default TopNav;

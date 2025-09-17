import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
import { FaBullhorn } from "react-icons/fa";
const TopNav = () => {
  // const [announcement, setAnnouncement] = useState("");
  // useEffect(() => {
  //   fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRrd2Q8ZzJ0cW8v3VSgnO968NI-fqNMW2Fll5tw2KQlG0-1BO5yu55gjnDEkiM4p0lDmuTomS8Lnmau/pub?gid=0&single=true&output=csv')
  //     .then(response => response.text()) // <-- CSV is text, not JSON
  //     .then(csv => {
  //       console.log('CSV Data:', csv);
  //       setAnnouncement(csv);
  //       // You can parse CSV -> JSON with Papaparse or manual split
  //     })
  //     .catch(error => {
  //       console.error('Error fetching sheet:', error);
  //     });
  // }, []);
  return (
        <>
        {/* <img src="/unnamed.jpg" alt="" /> */}
    <div className="w-full text-gray-50 py-2 px-4 fixed top-0 left-0 z-[60] shadow-md overflow-hidden bg-gradient-to-r from-slate-900/70 to-gray-900/70 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <FaBullhorn className="text-lg md:text-xl flex-shrink-0" />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="whitespace-nowrap text-sm md:text-base font-medium"
        >
          {"🎉 Admissions Open — Enroll your child today and unlock the future! | 🚀 New Courses Available for 2025 | 🌟 Join our Global Network Today!"}

        </motion.div>
      </div>
    </div>
    </>
  );
};

export default TopNav;

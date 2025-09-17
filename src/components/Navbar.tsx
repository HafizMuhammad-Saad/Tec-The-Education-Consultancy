import { useState } from "react";
import logo from "/image.png";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "About Us", href: "/about" },
    { label: "Our Journey", href: "/ourjourney" },
    // { label: "Gallery", href: "/gallery" },
    { label: "Our Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
    { label: "Publications", href: "/publications" },
  ];


   return (
    <>
      <motion.nav
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
        className="absolute top-10 left-0 w-full z-50 flex items-center justify-between
bg-[#800000]
             backdrop-blur-xl py-2 md:py-4 px-4 sm:px-6 md:px-10 lg:px-20 rounded-lg shadow-lg md:overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
    >
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center bg-gradient-to-br from-white via-gray-200 to-gray-300

 rounded-full px-10 py-2 cursor-pointer shadow-md">
        <Link to="/">

        <img src={logo} alt="TEC Logo" className="w-36 drop-shadow-lg filter brightness-100" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-center text-gray-200 font-medium text-lg tracking-wide">
        <ul className="flex gap-x-3 lg:gap-x-10">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative group"
            >
<motion.a
  href={item.href}
  target="_blank"
  className="relative whitespace-nowrap px-2 md:px-3 lg:px-4 py-2 rounded-md border border-transparent transition-all duration-500 ease-in-out"
  whileHover={{
    borderColor: "#22d3ee",
    boxShadow: "0px 0px 8px rgba(34,211,238,0.7)",
    color: "#22d3ee",

  }}
>
  {item.label}
</motion.a>
  {/* <span className="absolute left-0 -bottom-1 h-[3px] w-0 
                   bg-gradient-to-r from-cyan-400 to-blue-500 
                   transition-all duration-500 group-hover:w-full rounded-full shadow-[0_0_8px_#22d3ee]"></span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span> */}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex ml-2 items-center">
        <button className="relative px-6 py-2 font-semibold text-gray-100 rounded-md border-2 border-cyan-400 
                           overflow-hidden transition-all duration-300 hover:text-black group">
          <span className="absolute inset-0 bg-cyan-400 translate-y-[150%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10">Know More</span>
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex md:hidden items-center">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="text-gray-200 text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute top-20 right-4 w-[80%] bg-gradient-to-br from-[#0f172a]/95 to-[#1e3a8a]/95
                     text-white flex flex-col items-center gap-y-6 py-8 rounded-xl shadow-xl backdrop-blur-xl md:hidden"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium tracking-wide hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="px-6 py-2 text-white border-2 border-cyan-400 rounded-md transition hover:bg-cyan-400 hover:text-black">
            Know More
          </button>
        </motion.div>
      )}
    </motion.nav>
      </>
  );
};

export default Navbar;

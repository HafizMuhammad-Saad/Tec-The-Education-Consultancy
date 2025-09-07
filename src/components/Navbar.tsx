import { useState } from "react";
import logo from "/image.png";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "About Us", href: "#aboutus" },
    { label: "Our Network", href: "#ournetwork" },
    { label: "Gallery", href: "#gallery" },
    { label: "Home Schooling", href: "#homeschooling" },
    { label: "Contact Us", href: "#contactUs" },
  ];

   return (
    <motion.nav
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
        className="absolute top-10 left-0 w-full z-50 flex items-center justify-between
             bg-gradient-to-r from-[#a78bfa]/70 to-[#1e3a8a]/70
             backdrop-blur-xl py-2 md:py-4 px-6 md:px-20 rounded-lg shadow-lg"
    >
      {/* Logo */}
      <div className="flex items-center cursor-pointer">
        <img src={logo} alt="TEC Logo" className="w-36 drop-shadow-lg filter brightness-100" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex text-gray-200 font-medium text-lg tracking-wide">
        <ul className="flex gap-x-10">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative group"
            >
             <motion.a
  href={item.href}
  whileHover={{ y: -3, color: "#22d3ee" }}
  transition={{ type: "spring", stiffness: 300 }}
  className="transition-colors"
>
  {item.label}
</motion.a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center">
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
  );
};

export default Navbar;

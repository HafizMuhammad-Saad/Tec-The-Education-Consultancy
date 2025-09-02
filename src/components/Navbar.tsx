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
      transition={{ duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between bg-white/80 backdrop-blur-md py-3 md:py-4 shadow-md"
    >
      {/* Logo */}
      <div className="flex items-center ml-6 md:ml-20 cursor-pointer">
        <img src={logo} alt="Company Logo" className="w-24" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex text-gray-800 font-semibold text-lg">
        <ul className="flex gap-x-10">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-500 hover:after:w-full"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center justify-center mr-6 md:mr-20">
        <button className="text-gray-800 border-2 px-5 py-2 rounded-md transition hover:bg-gray-800 hover:text-white">
          Know More
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex md:hidden items-center mr-6">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="text-gray-800 text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute top-16 right-4 w-[75%] bg-black/90 text-white flex flex-col items-center gap-y-6 py-6 md:hidden rounded-lg shadow-lg backdrop-blur-md"
        >
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <button className="text-white border-2 px-5 py-2 rounded-md transition hover:bg-white hover:text-black">
            Know More
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

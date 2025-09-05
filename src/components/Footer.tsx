import {
  LiaInstagram,
  LiaTwitter,
  LiaYoutube,
} from "react-icons/lia";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-300">
      {/* Top Section */}
      <section className="max-w-[1200px] mx-auto py-12 px-6 md:px-12 grid md:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Address </h3>
          <p className="text-sm">
           Tec Schooling System – Campus I
III-H-I/13, Nazimabad # 3,
Karachi – 74600, Pakistan
          </p>
          <p className="text-sm mt-2">Phone: (123) 456-7890</p>
          <p className="text-sm mt-1">Email: 8Tm0V@example.com</p>
        </motion.div>
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex gap-16"
        >
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Important Links
            </h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">More</h3>
            <ul className="space-y-3">
              {["Blog", "Careers", "FAQ", "Support"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start md:items-center"
        >
          <h3 className="text-lg font-semibold text-white mb-6">Follow Us</h3>
          <div className="flex gap-8 text-7xl">
            {[ LiaInstagram, LiaTwitter, LiaYoutube].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.3, color: "#22d3ee" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="hover:drop-shadow-[0_0_10px_#22d3ee]"
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* Bottom Section */}
      <div className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-cyan-400 font-semibold">TEC</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

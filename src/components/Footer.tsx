import {
  LiaFacebook,

  LiaTwitter,
  LiaYoutube,
} from "react-icons/lia";
import { motion } from "framer-motion";
import { BiMap } from "react-icons/bi";

const menuItems = [
    { label: "About Us", href: "#aboutus" },
    { label: "Our Network", href: "#ournetwork" },
    { label: "Gallery", href: "#gallery" },
    { label: "Home Schooling", href: "#homeschooling" },
    { label: "Contact Us", href: "#contactUs" },
  ];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-300">
  <section className="max-w-[1200px] mx-auto py-12 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700">
    
    {/* Column 1: Logo/Heading + Address + Copyright */}
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-TimesNewRoman font-bold text-white">Tec - The Education Consultancy</h2>
      <div>
        {/* map icon */}
        <div className="flex items-center gap-3">
          <BiMap className="text-2xl text-cyan-400" />
        <p className="text-sm">3H 1/13 Nazimabad # 03, Karachi</p>
        </div>
          
      </div>

      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold font-TimesNewRoman">Tec</span>. All Rights Reserved.
      </p>
    </div>

    {/* Column 2: Links + Phone + Email */}
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">Important Links</h3>
        <ul className="space-y-2">
          {menuItems.map((link) => (
            <li key={link.label} className="inline-block  mr-4">
              <a
                href={`#${link}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.label}{' |'}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-sm">Phone: <span className="text-cyan-400">021-36681927</span></p>
        <p className="text-sm mt-1">Email: <span className="text-cyan-400">info@tec.edu.pk</span></p>
      </div>
    </div>

    {/* Column 3: Map + Socials */}
    <div className="flex flex-col gap-6">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.5915525862165!2d67.0222441744599!3d24.911910177895752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fbf17f5129d%3A0x2a555816ee39225b!2sTec%20schooling%20system!5e0!3m2!1sen!2s!4v1757081777198!5m2!1sen!2s" width="100%" height="160" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div>
        <div className="flex gap-6 text-3xl">
          {[LiaFacebook, LiaTwitter, LiaYoutube].map((Icon, i) => (
            <motion.a
              key={i}
              href={[
                "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwim0I3G68GPAxWHTf4FHYK_ANEQFnoECA8QAQ&url=https%3A%2F%2Fwww.facebook.com%2Ftec.theeducationconsultancy%2F&usg=AOvVaw3vOPXOnx1uGAHT5RttNaMI&opi=89978449/",
                "https://twitter.com/tecschoolingsystem",
                "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjyyofg68GPAxXmzgIHHYJdBUIQFnoECBsQAQ&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCzodfdZPWjHSRRHBJ4sjQMg&usg=AOvVaw2CB-R2umTJpvJioPrxK-bB&opi=89978449",
              ][i]}
              whileHover={{ scale: 1.3, color: "#22d3ee" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="hover:drop-shadow-[0_0_10px_#22d3ee]"
              target="_blank"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </section>
</footer>

  );
};

export default Footer;

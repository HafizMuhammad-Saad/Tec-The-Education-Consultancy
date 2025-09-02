import {
  LiaInstagram,
  LiaLinkedinIn,
  LiaTwitter,
  LiaYoutube,
} from "react-icons/lia";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-black/90">
      <section className="max-w-[1200px] mx-auto text-white py-5">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="p-8 flex-1 min-w-[300px] max-w-[400px]"
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h1 className="text-4xl">Want To Upgrade Yourself</h1>
            <p className="text-sm font-thin mt-2">
              Get exclusive best updates straight into your inbox
            </p>
            <motion.div
              className="mt-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <label
                htmlFor="input-group-1"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-2 rounded-md duration-200"
              >
                Get Subscribe
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-row flex-wrap justify-center gap-14 flex-1 min-w-[300px] max-w-[600px]"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="flex flex-col gap-y-5">
              <h1>Important Links</h1>
              <a href="#Home" className="font-thin">
                Home
              </a>
              <a href="#About" className="font-thin">
                About
              </a>
              <a href="#Services" className="font-thin">
                Services
              </a>
              <a href="#Contact" className="font-thin">
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-y-5">
              <h1>More Links</h1>
              <a href="#Blog" className="font-thin">
                Blog
              </a>
              <a href="#Careers" className="font-thin">
                Careers
              </a>
              <a href="#FAQ" className="font-thin">
                FAQ
              </a>
              <a href="#Support" className="font-thin">
                Support
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex flex-col gap-y-5">
              <h1 className="hidden md:flex">Socials</h1>
              <motion.div className="flex md:flex-row gap-x-10 md:gap-x-5">
                <a href="#LinkedinIn" className="font-thin text-2xl">
                  <LiaLinkedinIn />
                </a>
                <a href="#Instagram" className="font-thin text-2xl">
                  <LiaInstagram />
                </a>
                <a href="#Twitter" className="font-thin text-2xl">
                  <LiaTwitter />
                </a>
                <a href="#Youtube" className="font-thin text-2xl">
                  <LiaYoutube />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Footer;

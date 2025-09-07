// import sateliteImg from "../assets/satellite.jpg";
// import videoA from "../assets/footage.mp4"
// import aboutImg from "../assets/abt-img2.png"
import { motion } from "framer-motion";

interface DATA {
  video: string;
  subTitle: string;
  title: string;
  description: string;
}

const data: DATA[] = [
  {
    // image: sateliteImg,
    video: 'https://youtu.be/RzVQ7UP8ZFs',
    subTitle: "Our Mission",
    title: "Interactive & Animated Conceptual Learning for All Grades",
    description:
      "Welcome to Tec The Education Consultancy, where learning comes to life! We offer *interactive and animated conceptual education* from **Pre-Primary to Higher Secondary**, designed to ignite curiosity and foster a deeper understanding of subjects. Our courses cover a wide range of topics, including **Science, Mathematics, English, Urdu, Islamiyat, and more**.Our *engaging videos* make complex concepts easy to understand and fun to learn! Whether you're a teacher looking for innovative classroom tools or a student seeking extra support, Tec provides the resources to succeed.",
  },
];


const Banner = () => {
  return (
    <section className="bg-black text-white py-16">
      <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About <span className="text-blue-400">Section</span>
        </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        className="container"
      >
        {data.map((items, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center"
          >
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* <img
                src={items.image}
                alt={items.title}
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl shadow-lg"
              /> */}
              <iframe width="100%" height="360" src="https://www.youtube.com/embed/jm338XvZres" title="Tec The Education Consultancy | Interactive &amp; Animated Conceptual Learning for All Grades" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    {/* <iframe src="https://www.youtube.com/watch?v=jm338XvZres" className="w-full sm:w-[80%] mx-auto max-h-[350px] h-40 object-cover rounded-xl shadow-lg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
            </motion.div>

            {/* TEXT */}
            <div className="space-y-6 xl:pr-36 p-4 border-r-2 border-b-2 border-sky-800/60 rounded-lg">
              {/* <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sky-400 tracking-widest uppercase text-lg rotate-90 origin-center"
              >
                {items.subTitle}
              </motion.p> */}

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="uppercase text-3xl sm:text-4xl lg:text-4xl"
              >
                {items.title}
              </motion.h1>

              {/* <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="text-gray-300 leading-relaxed max-w-prose"
              >
                {items.description}
              </motion.p> */}

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300">
                  View All
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Banner;

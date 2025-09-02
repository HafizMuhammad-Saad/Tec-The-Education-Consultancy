import sateliteImg from "../assets/satellite.jpg";
import videoA from "../assets/footage.mp4"
import aboutImg from "../assets/abt-img2.png"
import { motion } from "framer-motion";

interface DATA {
  image: string;
  subTitle: string;
  title: string;
  description: string;
}

const data: DATA[] = [
  {
    // image: sateliteImg,
    image: aboutImg,
    subTitle: "Our Mission",
    title: "About Tec",
    description:
      "Tec is a dynamic resource center and educational support organization committed to elevating the educational landscape by providing comprehensive solutions for teachers, students, and school management teams. Embracing the ethos of continual learning, our goal is to facilitate academic excellence by offering a diverse range of services and resources. Education is ever learning process and we are still learning, our motto is to strive for academic excellence in the field of education so, Tec team is working hard to cater all the needs or requirements of our education system.",
  },
];


const Banner = () => {
  return (
    <section className="bg-black text-white py-16">
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
              <img
                src={items.image}
                alt={items.title}
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-xl shadow-lg"
              />
              {/* add video instead of image */}
              <video
      autoPlay
      loop
      muted
      className="fixed h-[100%] w-screen left-0 top-0 object-cover -z-10"
    >
      <source src={videoA} type="video/mp4" />
    </video>
            </motion.div>

            {/* TEXT */}
            <div className="space-y-6 xl:pr-36 p-4 border-r-2 border-b-2 border-sky-800/60 rounded-lg">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sky-400 uppercase tracking-wider"
              >
                {items.subTitle}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="uppercase text-3xl sm:text-4xl lg:text-5xl font-bold"
              >
                {items.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="text-gray-300 leading-relaxed max-w-prose"
              >
                {items.description}
              </motion.p>

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

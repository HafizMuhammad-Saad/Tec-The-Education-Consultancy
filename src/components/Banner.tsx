// import sateliteImg from "../assets/satellite.jpg";
// import videoA from "../assets/footage.mp4"
// import aboutImg from "../assets/abt-img2.png"
import { motion } from "framer-motion";
import TextType from "../../reactBits/TextType/TextType";

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
    <section className="bg-black text-white py-16" >
      <motion.h2
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  style={{
    // position: 'relative',
    fontSize: '2.5rem',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '3rem',
    // fontFamily: `'Playfair Display', serif`,
    textTransform: 'uppercase',
background: 'linear-gradient(to bottom, #e0e0e0 0%, #b0b0b0 35%, #a0a0a0 50%, #dcdcdc 70%, #8a8a8a 100%)',
    backgroundPosition: '0 1vw',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: '#fff',
    // display: 'inline-block',
  }}
>
  About Us
  <span
    aria-hidden="true"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      display: 'block',
      color: '#b3b3b3',
      textShadow: `
        -1px 0 1px #b3b3b3,
        0 1px 1px #b3b3b3,
        5px 5px 10px rgba(0, 0, 0, 0.4),
        -5px -5px 10px rgba(0, 0, 0, 0.4)
      `,
      fontSize: '2.5rem',
      fontWeight: 400,
      fontFamily: `'Playfair Display', serif`,
      textTransform: 'uppercase',
      pointerEvents: 'none',
    }}
  >
    About Us
  </span>
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
                <TextType
  text={[items.title]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
  className="font-bold leading-tight drop-shadow-lg"
/>
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

import TextType from "../../reactBits/TextType/TextType";
import sateliteImg from "../assets/satellite3.jpg";
import { motion } from "framer-motion";

interface DATA {
  image: string;
  subTitle: string;
  title: string;
  description: string;
}

const data: DATA[] = [
  {
    image: sateliteImg,
    subTitle: "Tec Solutions",
    title: "Tec - The Education Consultancy ",
    description:
      "Tec The Education Consultancy is a Resources Organization for teachers and students offering services of E-Learning, LMS (Learning Management System), CBTS, Animated Tutorials, Online Classes, Academic Coordination for students & educational organizations",
  },
];

const Banner2 = () => {
  return (
    <section className="bg-black text-white pb-12 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="container"
      >
        {data.map((items, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 pl-10"
            >
              {/* <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-sky-800 uppercase"
              >
                {items.subTitle}
              </motion.p> */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="uppercase text-3xl sm:text-4xl lg:text-4xl"
              >
                 <TextType 
  text={[items.title]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
  className=""
/>
              </motion.h1>
              {/* <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {items.description}
              </motion.p> */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">
                  View All
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* <img
                src={items.image}
                alt={items.title}
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-lg"
              /> */}
<iframe width="100%" height="300" src="https://www.youtube.com/embed/Wip04wNC27s" title="Tec The Education Consultancy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Banner2;

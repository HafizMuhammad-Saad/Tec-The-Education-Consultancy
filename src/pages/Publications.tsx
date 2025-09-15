import { motion } from "framer-motion";

const sampleBooks = [
  {
    title: "Mathematics for Young Minds",
    img: "/math_3.jpg",
  },
  {
    title: "Exploring Science",
    img: "/brainy_builder_1.jpg",
  },
  {
    title: "English Learning Companion",
    img: "/english_3.jpg",
  },
];

const PublicationsPage = () => {
  return (
    <div className="pt-40 pb-20 bg-black text-gray-200">
      <div className="container mx-auto px-6 md:px-16 lg:px-28">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-6"
        >
          TEC <span className="text-cyan-400">Publications</span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16"
        >
          High-quality, curriculum-aligned resources designed to empower students,
          educators, and institutions. Discover textbooks, study guides, and
          interactive learning materials for academic excellence.
        </motion.p>

        {/* Featured Books */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
        >
          {sampleBooks.map((book, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="bg-gradient-to-b from-slate-900 to-slate-800 p-6 rounded-xl shadow-lg
                         hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-500"
            >
              <img
                src={book.img}
                alt={book.title}
                className="rounded mb-6 w-full h-96 object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-center text-cyan-400">
                {book.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-slate-900 to-slate-800 p-10 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">
            Explore Our Full <span className="text-cyan-400">Publication Store</span>
          </h3>
          <p className="text-gray-400 mb-6">
            Browse hundreds of titles across multiple subjects and levels,
            designed to support learning everywhere.
          </p>
          <a
            href="https://tecpublisher.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition">
              Visit Publication Store
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default PublicationsPage;

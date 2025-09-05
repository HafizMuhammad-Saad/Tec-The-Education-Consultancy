import { motion } from "framer-motion";

const newsData = [
  {
    date: "Sep 10, 2025",
    title: "Admissions Open for Fall 2025",
    description:
      "We are excited to announce that admissions for Fall 2025 are now open. Apply early to secure your spot!",
  },
  {
    date: "Aug 20, 2025",
    title: "Annual Teachers' Workshop",
    description:
      "A successful workshop was conducted for teachers focusing on modern learning methods and technology.",
  },
  {
    date: "July 15, 2025",
    title: "New Satellite Learning Center Launched",
    description:
      "Tec inaugurated a new learning center equipped with modern facilities for enhanced student experiences.",
  },
];

const NewsEvents = () => {
  return (
    <section
      id="news"
      className="relative w-full py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Latest <span className="text-blue-400">News & Events</span>
        </motion.h2>

        {/* Grid of Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-gray-800/60 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition group"
            >
              {/* Date */}
              <p className="text-sm text-blue-400 font-semibold mb-2">
                {item.date}
              </p>
              {/* Title */}
              <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {item.description}
              </p>
              {/* Read More */}
              <button className="mt-5 text-blue-400 font-medium hover:underline">
                Read More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

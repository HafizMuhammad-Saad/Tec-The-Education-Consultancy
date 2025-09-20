import { motion } from "framer-motion";

const newsData = [
  {
    date: "Jan 10, 2025",
    title: "Global Education Summit 2025",
    description:
      "TEC participated in the Global Summit where we showcased our innovative solutions for digital learning.",
    image: "https://tec.edu.pk/pk/wp-content/uploads/2025/02/feature3.png",
  },
  {
    date: "Feb 05, 2025",
    title: "Launch of Tec Browser 7.0",
    description:
      "Our interactive teaching platform Tec Browser 2.0 was officially launched with new AI-powered features.",
    image: "https://tec.edu.pk/pk/wp-content/uploads/2025/02/events2.png",
  },
  {
    date: "Mar 01, 2025",
    title: "Partnership with Global Schools",
    description:
      "TEC signed a collaboration agreement with international schools to enhance e-learning opportunities.",
    image: "https://tec.edu.pk/pk/wp-content/uploads/2025/02/events3.png",
  },
];

const NewsEvents = () => {
  return (
    <section
      id="news"
      className="relative w-full py-20 bg-gradient-to-br from-black via-slate-900 to-black text-white"
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
       <motion.h2
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  style={{
    fontSize: '2.5rem', // Adjust if needed for responsiveness
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#ccc',
    textShadow: `
      1px 1px 0 #999,
      2px 2px 1px #666,
      3px 3px 2px #333
    `
  }}
>
  <span
    style={{
      background: 'linear-gradient(135deg, #d9d9d9, #aaaaaa, #f1f1f1, #888888)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block'
    }}
  >
    Latest News & Events
  </span>
</motion.h2>

        {/* Grid of Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative bg-gray-900/70 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg 
                         border border-gray-700 hover:border-cyan-400 
                         transition-all duration-500 group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-cyan-400 font-semibold mb-2">
                  {item.date}
                </p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
                <button className="px-4 py-2 text-sm font-medium rounded-md 
                                   bg-gradient-to-r from-cyan-500 to-blue-600 
                                   text-black hover:shadow-[0_0_15px_#22d3ee] transition">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;

import React from 'react'
import { motion } from 'framer-motion'
import { FaAddressCard, FaAndroid,  FaBroadcastTower, FaGlobe, FaGraduationCap, FaLaptop, FaPen, FaRobot } from 'react-icons/fa'
import './OurJourney.css'

  const data = [
  {
    year: 2012,
    title: ' Browser',
    event: "Launched our first education-focused browser, built to support safe and guided learning.",
    icon: <FaGlobe />
  },
  {
    year: 2014,
    title: 'LMS',
    event: "Introduced the Learning Management System for online classes, courses, and e-learning.",
    icon: <FaGraduationCap />
  },
  {
    year: 2016,
    title: 'CBT',
    event: "Rolled out the Computer Based Testing System, enabling secure and modern digital exams.",
    icon: <FaLaptop />
  },
  {
    year: 2020,
    title: 'SMS',
    event: "Released the School Management System and upgraded our browser to manage learning tools.",
    icon: <FaBroadcastTower />
  },
  {
    year: 2021,
    title: 'Digital App',
    event: "Released the School Management System and upgraded our browser to manage learning tools.",
    icon: <FaAndroid />
  },
  {
    year: 2024,
    title: 'Robotics',
    event: "Began offering engaging STEAM and Robotics programs, giving students hands-on learning.",
    icon: <FaRobot />
  },
  {
    year: 2023,
    title: 'Publishers',
    event: "Published our first collection of digital materials and apps to empower active learners.",
    icon: <FaPen />
  },
  {
    year: 2025,
    title: 'E-Academy',
    event: "Published our first collection of digital materials and apps to empower active learners.",
    icon: <FaAddressCard />
  },
]



const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4, // delay between each item
      delayChildren: 0.3,   // first item delay
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing for smoothness
    },
  },
}
const gradients = [
  { start: "#800000", end: "#ff6b6b" }, // red shades
  { start: "#3b82f6", end: "#06b6d4" }, // blue-cyan
  { start: "#16a34a", end: "#4ade80" }, // green shades
  { start: "#9333ea", end: "#c084fc" }, // purple
  { start: "#f59e0b", end: "#facc15" }, // amber-yellow
  { start: "#db2777", end: "#f472b6" }, // pink
]

const OurJourney = () => {
  return (
    <div className='journey-wrapper'>
<motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-center mb-16 mt-12"
        >
          Our <span className="text-[#b91f24] border-b-2 border-[#b91f24] border-dashed">Journey</span>
        </motion.h1>      <motion.div
        className="infographic text-gray-900"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="steps-container"></div>
        {
          data.map((itemData, index) => (
            <motion.div
              className="infographic-item"
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -6 }}
            >
              <div
                className="item-step"
                style={{
                   ['--color-start' as any]: gradients[index % gradients.length].start,
    ['--color-end' as any]: gradients[index % gradients.length].end,
                } as React.CSSProperties}
              >
                <div className="item-step-body">
                  <span className="item-step-label">
                    {itemData.title}
                  </span>
                  <span className="item-step-icon">
                    {itemData.icon}
                  </span>
                  <span className="item-year">{itemData.year}</span>

                </div>
              </div>
              <div className="item-text">
                <p>{itemData.event}</p>
              </div>
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  )
}

export default OurJourney

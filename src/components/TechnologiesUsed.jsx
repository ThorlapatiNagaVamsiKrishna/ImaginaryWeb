"use client";

import { motion } from "framer-motion";

const logos = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  "https://nestjs.com/img/logo-small.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
];

export default function TechLogosSlider() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-6
                   text-purple-600
                   tracking-tight drop-shadow-lg"
      >
        Technologies We Use
      </motion.h2>

      {/* Paragraph */}
   <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  viewport={{ once: true }}
  className="max-w-2xl mx-auto text-center text-gray-600 text-base md:text-lg mb-16"
>
  Our stack blends modern frameworks and robust tools to deliver fast, secure, 
  and scalable applications.
</motion.p>



      {/* Scrolling Logos Row 1 */}
      <motion.div
        className="flex gap-14 mb-10"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[140px]"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: 3 }}
              className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center 
                         rounded-2xl shadow-lg 
                         bg-white/30 backdrop-blur-xl border border-white/20
                         transition-all duration-300 hover:shadow-purple-400/50"
            >
              <img
                src={logo}
                alt="Tech Logo"
                className="w-16 h-16 object-contain drop-shadow-md"
              />
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Scrolling Logos Row 2 (reverse direction) */}
      <motion.div
        className="flex gap-14"
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 35,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[140px]"
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: -3 }}
              className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center 
                         rounded-2xl shadow-lg 
                         bg-gradient-to-br from-white/40 to-white/20 
                         backdrop-blur-xl border border-white/30
                         transition-all duration-300 hover:shadow-pink-400/50"
            >
              <img
                src={logo}
                alt="Tech Logo"
                className="w-16 h-16 object-contain drop-shadow-md"
              />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

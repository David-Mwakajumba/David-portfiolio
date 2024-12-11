import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import WavePattern from "./background/WavePattern";
import GlowingLines from "./background/GlowingLines";
import ShiningStars from "./background/ShiningStars";
import david from "../../public/David-image.jpg";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 overflow-hidden transition-all duration-700">
      <WavePattern />
      <GlowingLines />
      <ShiningStars />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="mb-8"
          >
            {/* <div className="relative w-40 h-40 mx-auto">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 blur-lg"
              />
              <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-white/20 dark:ring-black/20">
                <img src={david} className="w-full h-full object-cover" />{" "}
              </div>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_auto] sm:text-7xl md:text-8xl tracking-tight"
            >
              David Mwakajumba
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <motion.span
              animate={{
                boxShadow: [
                  "0 0 0 rgba(99, 102, 241, 0.4)",
                  "0 0 20px rgba(99, 102, 241, 0.4)",
                  "0 0 0 rgba(99, 102, 241, 0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
            >
              Software Developer
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 max-w-2xl mx-auto text-xl text-gray-600/90 dark:text-gray-300/90 leading-relaxed"
          >
            Passionate about creating elegant solutions through clean code and
            innovative thinking
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex justify-center space-x-8"
          >
            {[
              {
                href: "https://github.com/David-Mwakajumba/",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/david-mwakajumba-a9a119257",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:contact@example.com",
                icon: Mail,
                label: "Email",
              },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                whileHover={{
                  scale: 1.2,
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                href={href}
                className="group relative p-4 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 hover:border-indigo-500/50 dark:hover:border-indigo-400/50"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-all duration-300"
                  whileHover={{ scale: 1.4, opacity: 0.3 }}
                />
                <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="p-3 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 hover:border-indigo-500/50"
            >
              <ChevronDown className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

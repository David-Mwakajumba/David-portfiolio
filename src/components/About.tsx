import React from "react";
import { motion } from "framer-motion";
import AboutCard from "./about/AboutCard";
import AboutStats from "./about/AboutStats";
import { aboutData } from "../data/aboutData";

export default function About() {
  return (
    <section className="bg-white dark:bg-gray-800 py-24 transition-colors duration-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/5 to-transparent dark:via-indigo-900/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AboutCard />
          <AboutStats />
        </div>
      </div>
    </section>
  );
}

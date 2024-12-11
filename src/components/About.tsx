import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-white dark:bg-gray-800 py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">About Me</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            I'm a software developer with expertise in building modern web applications. I specialize in React, Node.js, and cloud technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
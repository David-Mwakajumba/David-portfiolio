import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "../../data/aboutData";

export default function AboutStats() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {aboutData.stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20">
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-1"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

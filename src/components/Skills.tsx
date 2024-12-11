import React from "react";
import { motion } from "framer-motion";
import SkillCategory from "./skills/SkillCategory";
import { skillsData } from "../data/skillsData";

export default function Skills() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-gray-900 dark:text-white mb-12"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillsData.map((category, index) => (
              <SkillCategory
                key={category.name}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

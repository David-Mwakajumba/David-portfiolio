import React from "react";
import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
import { SkillCategory as SkillCategoryType } from "../../types/skills";

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

export default function SkillCategory({ category, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-6">
        <span className="text-3xl mr-4">{category.icon}</span>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {category.name}
        </h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar key={skill.name} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
}

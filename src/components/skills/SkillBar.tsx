import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../types/skills";

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{
            duration: 1,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

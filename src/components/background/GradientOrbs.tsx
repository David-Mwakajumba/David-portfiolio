import React from 'react';
import { motion } from 'framer-motion';

const orbs = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  size: Math.random() * 600 + 400,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 40 + 30,
  delay: i * 2
}));

export default function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-15">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-purple-300 to-pink-200 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 blur-[100px]"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
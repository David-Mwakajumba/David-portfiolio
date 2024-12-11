import React from 'react';
import { motion } from 'framer-motion';

export default function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.15] dark:opacity-10">
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgb(var(--grid-color)) 0.5px, transparent 0.5px),
            linear-gradient(to right, rgb(var(--grid-color)) 0.5px, transparent 0.5px),
            linear-gradient(to bottom, rgb(var(--grid-color)) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '40px 40px, 20px 20px, 20px 20px',
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
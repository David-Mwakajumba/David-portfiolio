import React from 'react';
import { motion } from 'framer-motion';

const lines = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  length: Math.random() * 40 + 60,
  angle: (i * 360) / 8,
  delay: i * 0.2,
}));

export default function GlowingLines() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {lines.map((line) => (
          <motion.div
            key={line.id}
            className="absolute h-0.5 origin-left bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-transparent"
            style={{
              width: `${line.length}%`,
              rotate: line.angle,
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: line.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
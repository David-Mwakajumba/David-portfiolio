import React from 'react';
import { motion } from 'framer-motion';

const boxes = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: Math.random() * 60 + 40,
  x: Math.random() * 100,
  y: Math.random() * 100,
  rotation: Math.random() * 360,
  duration: Math.random() * 15 + 20
}));

export default function AnimatedBoxes() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {boxes.map((box) => (
        <motion.div
          key={box.id}
          className="absolute border-2 border-blue-200/30 dark:border-blue-500/20 backdrop-blur-sm"
          style={{
            width: box.size,
            height: box.size,
            left: `${box.x}%`,
            top: `${box.y}%`,
            rotate: box.rotation,
          }}
          animate={{
            rotate: [box.rotation, box.rotation + 360],
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: box.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
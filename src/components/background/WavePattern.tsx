import React from 'react';
import { motion } from 'framer-motion';

const waves = Array.from({ length: 3 }, (_, i) => ({
  id: i,
  delay: i * 0.2,
  duration: 20 + i * 5,
  opacity: 0.03 - i * 0.01
}));

export default function WavePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {waves.map((wave) => (
        <motion.div
          key={wave.id}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(50% 50% at 50% 50%, rgb(var(--grid-color)) 0%, transparent 100%)`,
            opacity: wave.opacity
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [wave.opacity, wave.opacity * 2, wave.opacity],
          }}
          transition={{
            duration: wave.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: wave.delay,
          }}
        />
      ))}
    </div>
  );
}
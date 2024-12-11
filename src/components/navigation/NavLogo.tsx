import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function NavLogo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-2 cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className="p-1.5 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Code className="w-6 h-6 text-white" />
      </div>
      <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        David.dev
      </span>
    </motion.div>
  );
}

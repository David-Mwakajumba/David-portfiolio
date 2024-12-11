import React from "react";
import { motion } from "framer-motion";

interface NavLinkProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  isMobile?: boolean;
}

export default function NavLink({
  id,
  label,
  isActive,
  onClick,
  isMobile = false,
}: NavLinkProps) {
  if (isMobile) {
    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`w-full px-4 py-3 text-left rounded-lg transition-colors ${
          isActive
            ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
      >
        {label}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      onClick={onClick}
      className={`relative px-1 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "text-indigo-600 dark:text-indigo-400"
          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      }`}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="activeSection"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.button>
  );
}

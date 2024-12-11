import React from "react";
import { motion } from "framer-motion";
import { navigationLinks } from "../../data/navigationData";
import { useNavigation } from "../../hooks/useNavigation";

export default function NavLinks() {
  const { activeSection, scrollToSection } = useNavigation();

  return (
    <div className="flex space-x-8">
      {navigationLinks.map((link) => (
        <motion.button
          key={link.id}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          onClick={() => scrollToSection(link.id)}
          className={`relative px-1 py-2 text-sm font-medium transition-colors ${
            activeSection === link.id
              ? "text-indigo-600 dark:text-indigo-400"
              : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          }`}
        >
          {link.label}
          {activeSection === link.id && (
            <motion.div
              layoutId="activeSection"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}

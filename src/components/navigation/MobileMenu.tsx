import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { navigationLinks } from "../../data/navigationData";
import { useNavigation } from "../../hooks/useNavigation";

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const { activeSection, scrollToSection } = useNavigation();

  const handleNavigation = (id: string) => {
    scrollToSection(id);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="absolute right-0 top-0 bottom-0 w-64 bg-white dark:bg-gray-900 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="px-2 py-4">
          {navigationLinks.map((link) => (
            <motion.button
              key={link.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation(link.id)}
              className={`w-full px-4 py-3 text-left rounded-lg transition-colors ${
                activeSection === link.id
                  ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {link.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

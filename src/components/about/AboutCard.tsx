import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { aboutData } from "../../data/aboutData";

export default function AboutCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {aboutData.description}
        </p>

        <div className="space-y-4">
          {[
            {
              icon: Calendar,
              label: "Experience",
              value: aboutData.experience,
            },
            { icon: MapPin, label: "Location", value: aboutData.location },
            {
              icon: Briefcase,
              label: "Current Role",
              value: aboutData.currentRole,
            },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-center text-gray-600 dark:text-gray-300"
            >
              <Icon className="w-5 h-5 mr-3 text-indigo-500" />
              <span className="font-medium mr-2">{label}:</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

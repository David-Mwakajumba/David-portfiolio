import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer bg-white dark:bg-gray-800 transition-colors duration-200"
      onClick={onClick}
    >
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={project.imageUrl} alt="" />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{project.description}</p>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a 
              href={project.github} 
              className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          <div className="ml-3">
            <a 
              href={project.demo} 
              className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
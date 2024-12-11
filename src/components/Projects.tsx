import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from '../types/project';

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with features like product catalog, shopping cart, user authentication, and payment integration.',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    github: 'https://github.com/example/ecommerce',
    demo: 'https://example.com/ecommerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux']
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking capabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
    github: 'https://github.com/example/task-manager',
    demo: 'https://example.com/task-manager',
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript']
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current conditions and forecasts using data from multiple weather APIs.',
    imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b',
    github: 'https://github.com/example/weather-dashboard',
    demo: 'https://example.com/weather',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS']
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="bg-white dark:bg-gray-800 py-16 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-gray-900 dark:text-white"
          >
            Projects
          </motion.h2>
          <div className="mt-10 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
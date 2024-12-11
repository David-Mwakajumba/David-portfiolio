import { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, secure payments, and a responsive design. Implements modern authentication and authorization patterns.",
    imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc",
    github: "https://github.com/example/ecommerce",
    demo: "https://example.com/ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application featuring real-time updates, task assignments, and progress tracking. Includes team collaboration tools and analytics dashboard.",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    github: "https://github.com/example/task-manager",
    demo: "https://example.com/task-manager",
    technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
  },
  {
    title: "Weather Dashboard",
    description:
      "An elegant weather dashboard that provides detailed weather information and forecasts using multiple weather APIs. Features interactive maps and severe weather alerts.",
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    github: "https://github.com/example/weather-dashboard",
    demo: "https://example.com/weather",
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
  },
];

import { SkillCategory } from "../types/skills";

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Next.js", level: 80 },
    ],
  },
  {
    name: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 85 },
    ],
  },
];

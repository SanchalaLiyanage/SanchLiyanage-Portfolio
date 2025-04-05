"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface ResumeSkillsProps {
  creative?: boolean
}

export function ResumeSkills({ creative = false }: ResumeSkillsProps) {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Go", "SQL", "HTML/CSS"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "Redux", "Tailwind CSS", "SASS", "Webpack", "Vite"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Django", "GraphQL", "REST API", "WebSockets"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Prisma", "Sequelize"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform", "Serverless"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Jira", "Figma", "Jest", "Cypress", "Storybook", "Agile/Scrum"],
    },
  ]

  if (creative) {
    return (
      <div className="space-y-4">
        {skillCategories.slice(0, 3).map((category, index) => (
          <div key={index} className="mb-3">
            <h3 className="text-sm font-medium text-gray-400 mb-2">{category.category}</h3>
            <div className="flex flex-wrap gap-1">
              {category.skills.map((skill) => (
                <Badge key={skill} className="bg-cyan-950/20 border border-cyan-800/30 text-cyan-400 text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="print:!opacity-100 print:!transform-none"
          >
            <h3 className="font-bold mb-2">{category.category}</h3>
            <div className="flex flex-wrap gap-2 print:hidden">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="bg-gray-900/50 border-gray-700">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="hidden print:block print:text-gray-600">{category.skills.join(", ")}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


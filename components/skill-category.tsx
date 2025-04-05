"use client"

import { motion } from "framer-motion"

interface SkillCategoryProps {
  title: string
  skills: {
    name: string
    level: number
  }[]
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold font-heading">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


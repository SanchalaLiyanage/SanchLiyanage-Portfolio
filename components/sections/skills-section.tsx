"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SkillCategory } from "@/components/skill-category"

export function SkillsSection() {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "C", level: 80 },
        { name: "C#", level: 75 },
        { name: "PHP", level: 75 },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "Laravel", level: 75 },
        { name: "Vite.js", level: 80 },
      ],
    },
    {
      category: "Database Systems",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 85 },
        { name: "Oracle", level: 80 },
        { name: "PL/SQL", level: 75 },
        { name: "SQLite", level: 80 },
      ],
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Postman", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "IntelliJ IDEA", level: 85 },
        { name: "Eclipse", level: 80 },
      ],
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "Flutter", level: 80 },
        { name: "Kotlin", level: 75 },
      ],
    },
    {
      category: "DevOps",
      skills: [
        { name: "GitHub Actions", level: 85 },
        { name: "Docker", level: 80 },
      ],
    },
  ]

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "IntelliJ IDEA",
    "Eclipse",
    "Postman",
    "Docker",
    "Jupyter Notebooks",
    "Linux/Unix",
    "Arduino",
  ]

  const methodologies = [
    "Agile/Scrum",
    "Kanban",
    "Test-Driven Development",
    "Continuous Integration",
    "Project Management",
    "Collaborative Development",
    "Detail-Oriented Development",
    "Critical Thinking & Problem-Solving",
  ]

  return (
    <section ref={contentRef} className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 font-heading">Technical Skills</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My technical expertise and proficiency in various technologies and tools
        </p>
      </motion.div>

      <Tabs defaultValue="technical" className="w-full">
        <div className="flex justify-center mb-12">
          <TabsList className="bg-black border border-gray-800">
            <TabsTrigger
              value="technical"
              className="data-[state=active]:bg-cyan-950/20 data-[state=active]:text-cyan-400"
            >
              Technical Skills
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:bg-purple-950/20 data-[state=active]:text-purple-400"
            >
              Tools
            </TabsTrigger>
            <TabsTrigger
              value="methodologies"
              className="data-[state=active]:bg-emerald-950/20 data-[state=active]:text-emerald-400"
            >
              Methodologies
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="technical">
          <div className="grid gap-16 md:grid-cols-2">
            {technicalSkills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCategory title={category.category} skills={category.skills} />
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tools">
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Badge className="px-4 py-2 text-base bg-purple-950/30 hover:bg-purple-900/40 border border-purple-800/30 hover:border-purple-700">
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>

        <TabsContent value="methodologies">
          <motion.div
            className="flex flex-wrap gap-3 justify-center"
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {methodologies.map((methodology, index) => (
              <motion.div
                key={methodology}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Badge className="px-4 py-2 text-base bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-800/30 hover:border-emerald-700">
                  {methodology}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  )
}


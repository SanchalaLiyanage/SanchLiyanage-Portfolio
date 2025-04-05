"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function SkillsPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: "Frontend Development",
      items: ["JavaScript/TypeScript", "React", "Next.js", "HTML/CSS", "Tailwind CSS", "Responsive Design"],
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express", "GraphQL", "REST API Design", "Authentication", "Database Design"],
    },
    {
      category: "Tools & Technologies",
      items: ["Git/GitHub", "Docker", "AWS", "CI/CD", "Testing", "Performance Optimization"],
    },
  ]

  return (
    <section ref={ref} className="w-full py-24 bg-gray-50">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="grid gap-8 md:grid-cols-2">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                  className={groupIndex === 2 ? "md:col-span-2" : ""}
                >
                  <h3 className="text-lg font-bold mb-4 font-playfair text-gray-900">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-900"></div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/skills">
                <Button variant="outline" className="group border-gray-300 text-gray-900 hover:bg-gray-100">
                  <span>View All Skills</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Skills & Expertise</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 font-playfair text-gray-900">Technical Proficiency</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                With a strong foundation in both frontend and backend technologies, I bring a comprehensive skill set to
                every project. My expertise spans across modern JavaScript frameworks, server-side technologies, cloud
                platforms, and DevOps practices.
              </p>
              <p>
                I'm constantly learning and exploring new technologies to stay at the cutting edge of the industry. My
                approach combines technical excellence with a focus on user experience and business objectives.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


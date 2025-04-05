"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, BookOpen, Users } from "lucide-react"

export function AchievementsSection() {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      title: "Professional Certifications",
      icon: <Award className="h-10 w-10 text-cyan-400" />,
      items: [
        "Become a Full-Stack Web Developer - LinkedIn Learning",
        "Docker Foundations Professional Certificate - Docker",
        "Atlassian Agile Project Management Professional Certificate - Atlassian",
        "Career Essentials in GitHub Professional Certificate - GitHub",
        "JavaScript Foundations Professional Certificate by Mozilla",
        "Postman API Fundamentals Student Expert Certification",
        "Database Programming with PL/SQL",
        "CS50: Introduction to Computer Science - Harvard University (Ongoing)",
        "Java Foundations Professional Certificate by JetBrains (Ongoing)",
      ],
    },
    {
      title: "Academic Excellence",
      icon: <BookOpen className="h-10 w-10 text-purple-400" />,
      items: [
        "Outstanding GPA of 3.95/4.00 in Diploma in Software Engineering",
        "5As, 3Bs & 1C in GCE Ordinary Level",
        "2Ss in GCE Advanced Level (Bio Stream)",
      ],
    },
    {
      title: "Volunteering Experience",
      icon: <Users className="h-10 w-10 text-emerald-400" />,
      items: [
        "Registration Manager for API and GenAI Tour Sri Lanka 2025",
        "Organizing Committee Member for Maze Master 2.0 tech competition at NIBM",
        "Volunteering Member at Unawatuna Leo Diamonds Club",
      ],
    },
  ]

  return (
    <section ref={contentRef} className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 font-heading">Achievements & Certifications</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Recognition, certifications, and contributions that highlight my commitment to excellence
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
          >
            <div className="flex flex-col items-center text-center mb-6">
              <div className="mb-4 p-3 rounded-full bg-gray-800/50">{achievement.icon}</div>
              <h3 className="text-xl font-bold">{achievement.title}</h3>
            </div>
            <ul className="space-y-3">
              {achievement.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


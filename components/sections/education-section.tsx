"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Timeline } from "@/components/timeline"

export function EducationSection() {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      title: "Higher National Diploma in Software Engineering",
      institution: "School of Computing, National Institute of Business Management",
      period: "April 2024 - present",
      description:
        "Currently pursuing advanced studies in software engineering, focusing on modern development practices and technologies.",
    },
    {
      title: "Diploma in Software Engineering",
      institution: "School of Computing, National Institute of Business Management",
      period: "April 2023 - April 2024",
      description:
        "Completed with an outstanding OGPA of 3.95/4.00. Focused on programming fundamentals, web development, and software design principles.",
    },
    {
      title: "Diploma in English Language and Literature",
      institution: "Department of English, Aquinas College of Higher Studies",
      period: "October 2022 - June 2023",
      description: "Enhanced communication skills and gained proficiency in English language and literature.",
    },
    {
      title: "GCE Advanced Level (Bio Stream)",
      institution: "Janadhipathi Balika College, Galle",
      period: "2007-2022",
      description:
        "Completed secondary education with 2Ss in Advanced Level (Bio Stream) and 5As, 3Bs & 1C in Ordinary Level.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section
      ref={contentRef}
      className="container py-12 md:py-24 bg-gradient-radial from-gray-900/50 via-black to-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 font-heading">Education</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and qualifications that have shaped my knowledge and skills
          </p>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={contentInView ? "show" : "hidden"}>
          <Timeline items={education} accentColor="purple" />
        </motion.div>
      </div>
    </section>
  )
}


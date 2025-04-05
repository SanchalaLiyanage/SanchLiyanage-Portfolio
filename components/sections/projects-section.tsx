"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ProjectsSection() {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: "IoT-Based Parking Booking Management System",
      description:
        "A smart parking solution using MERN stack, React Native, and IoT sensors for real-time space availability and payment functionality.",
      image: "/placeholder.svg?height=300&width=500",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "IoT", "React Native", "AWS"],
      featured: true,
      githubUrl: "https://github.com/SanchalaLiyanage",
    },
    {
      id: 2,
      title: "NIBMaestro - Project & Learning Management System",
      description:
        "A platform to manage projects and learning activities for students and lecturers, improving project submission timelines by 40%.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      featured: true,
      githubUrl: "https://github.com/SanchalaLiyanage",
    },
    {
      id: 3,
      title: "HorizonTrack - Fitness Tracking Mobile App",
      description:
        "A mobile app with personalized diet plans, BMI calculation, jogging path tracking and fitness diaries.",
      image: "/placeholder.svg?height=300&width=500",
      category: "mobile",
      technologies: ["Kotlin", "Firebase", "Google Maps API", "Android Studio"],
      featured: true,
      githubUrl: "https://github.com/SanchalaLiyanage",
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={contentRef} className="container py-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 font-heading">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of my recent work, highlighting my skills in full-stack development, mobile app development, and
          IoT
        </p>
      </motion.div>

      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        animate={contentInView ? "show" : "hidden"}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link href="/projects">
          <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 group">
            <span>View All Projects</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}


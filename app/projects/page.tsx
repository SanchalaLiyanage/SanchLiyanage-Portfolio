"use client"

import { useEffect, useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { PageHeader } from "@/components/page-header"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
    {
      id: 4,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/SanchalaLiyanage",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A real-time weather dashboard with interactive data visualizations and location-based forecasts.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
      technologies: ["React", "Chart.js", "Weather API", "Geolocation API"],
      githubUrl: "https://github.com/SanchalaLiyanage",
    },
    {
      id: 6,
      title: "Task Management System",
      description: "A collaborative task management system with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      category: "fullstack",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
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

  if (!isMounted) {
    return null
  }

  return (
    <MainLayout>
      <PageHeader title="My Projects" description="A showcase of my work, side projects, and technical explorations" />

      <section className="container py-12 md:py-24">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-thin">
            <TabsList className="bg-black border border-gray-800">
              <TabsTrigger value="all" className="data-[state=active]:bg-cyan-950/20 data-[state=active]:text-cyan-400">
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="fullstack"
                className="data-[state=active]:bg-cyan-950/20 data-[state=active]:text-cyan-400"
              >
                Full Stack
              </TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:bg-cyan-950/20 data-[state=active]:text-cyan-400">
                Web
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="data-[state=active]:bg-cyan-950/20 data-[state=active]:text-cyan-400"
              >
                Mobile
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <motion.div
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {projects.map((project) => (
                <motion.div key={project.id} variants={item}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {["fullstack", "web", "mobile"].map((category) => (
            <TabsContent key={category} value={category}>
              <motion.div
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {projects
                  .filter((project) => project.category === category)
                  .map((project) => (
                    <motion.div key={project.id} variants={item}>
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </MainLayout>
  )
}


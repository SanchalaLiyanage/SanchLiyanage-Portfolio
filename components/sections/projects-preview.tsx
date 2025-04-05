"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function ProjectsPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredProjects = [
    {
      id: 1,
      title: "Quantum Dashboard",
      description: "A real-time analytics dashboard with interactive data visualizations and AI-powered insights.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["React", "D3.js", "Node.js"],
    },
    {
      id: 2,
      title: "NexusAI Assistant",
      description:
        "An AI-powered virtual assistant that helps users manage tasks, schedule meetings, and find information.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      technologies: ["Python", "TensorFlow", "React"],
    },
    {
      id: 3,
      title: "Ethereal E-Commerce",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
    },
  ]

  return (
    <section ref={ref} className="w-full py-24 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Featured Projects</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 font-playfair text-gray-900">Selected Works</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            A curated selection of projects that showcase my expertise in software development, design thinking, and
            problem-solving.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="group h-full flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-white text-gray-900 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold font-playfair text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.id}`}>
                    <Button variant="outline" className="w-full border-gray-300 text-gray-900 hover:bg-gray-100 group">
                      <span>View Project</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/projects">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              <span>View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


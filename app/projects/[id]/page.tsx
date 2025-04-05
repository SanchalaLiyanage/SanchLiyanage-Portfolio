"use client"

import { useState, useEffect } from "react"
import { MainLayout } from "@/components/main-layout"
import { Button } from "@/components/ui/button"
import { useParams, notFound } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function ProjectPage() {
  const [isMounted, setIsMounted] = useState(false)
  const params = useParams()
  const projectId = typeof params.id === "string" ? Number.parseInt(params.id, 10) : null

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Mock project data that would normally come from API or database
  const projects = [
    {
      id: 1,
      title: "Quantum Dashboard",
      subtitle: "Real-time Analytics Platform",
      description:
        "A comprehensive real-time analytics dashboard with interactive data visualizations and AI-powered insights for business intelligence.",
      longDescription:
        "The Quantum Dashboard provides real-time analytics to help businesses make data-driven decisions. It features interactive graphs, customizable widgets, and AI-driven insights that analyze trends and make predictions. The platform integrates with multiple data sources and processes information in real-time using stream processing techniques.",
      image: "/placeholder.svg?height=600&width=1200",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      category: "web",
      technologies: ["React", "D3.js", "Node.js", "Socket.io", "TensorFlow.js", "AWS", "MongoDB"],
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
      challengeDescription:
        "The main challenge was processing and visualizing large volumes of data in real-time without affecting performance. Additionally, creating intuitive visualizations that present complex data in an accessible way required extensive user testing and iteration.",
      solutionDescription:
        "I implemented a robust data streaming architecture using Socket.io for real-time updates and optimized D3.js visualizations with React for efficient DOM updates. The dashboard utilizes web workers for heavy data processing tasks to keep the UI responsive. For the AI components, I used TensorFlow.js to run lightweight models directly in the browser.",
      outcomes: [
        "Reduced data analysis time by 65% for client teams",
        "Improved decision-making processes with real-time insights",
        "Scalable architecture handling millions of data points",
        "Intuitive interface with 95% positive user feedback",
      ],
      testimonial: {
        quote:
          "The Quantum Dashboard has transformed how we analyze and respond to market trends. Its real-time capabilities and intuitive interface have become indispensable to our operations.",
        author: "Sarah Johnson",
        position: "CTO, TechStart Inc.",
      },
    },
    {
      id: 2,
      title: "NexusAI Assistant",
      subtitle: "Intelligent Virtual Assistant",
      description:
        "An AI-powered virtual assistant that helps users manage tasks, schedule meetings, and find information through natural language processing.",
      longDescription:
        "NexusAI is an intelligent virtual assistant designed to streamline daily workflows. It uses advanced natural language processing to understand user requests, manage calendars, schedule meetings, set reminders, and retrieve information. The assistant learns from user interactions to provide increasingly personalized experiences.",
      image: "/placeholder.svg?height=600&width=1200",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      category: "ai",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "AWS", "MongoDB", "BERT"],
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
      challengeDescription:
        "Creating an AI assistant that could understand context and maintain conversational state was particularly challenging. Additionally, integrating with various external services while maintaining data privacy and security required careful architecture.",
      solutionDescription:
        "I implemented a hybrid approach using BERT for natural language understanding combined with custom intent classification models. The system maintains contextual awareness through a carefully designed state management system. For security, all sensitive data is encrypted end-to-end and processed on-premise where required.",
      outcomes: [
        "Automated scheduling reduced administrative time by 40%",
        "98% accuracy in understanding user requests",
        "Successfully integrated with 15+ third-party services",
        "Platform processes over 10,000 requests daily with sub-second response times",
      ],
      testimonial: {
        quote:
          "NexusAI has become our team's secret weapon. It handles the mundane tasks that used to eat up our day, allowing us to focus on strategic work. The natural language capabilities are impressively human-like.",
        author: "Michael Rodriguez",
        position: "Product Manager, InnovateLabs",
      },
    },
    {
      id: 3,
      title: "Ethereal E-Commerce",
      subtitle: "Modern E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and seamless payment processing.",
      longDescription:
        "Ethereal is a comprehensive e-commerce solution built with modern technologies. It features robust product management, inventory tracking, shopping cart functionality, secure checkout, and analytics. The platform is highly customizable and scalable to accommodate growing businesses.",
      image: "/placeholder.svg?height=600&width=1200",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      category: "web",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS", "Redux", "Vercel"],
      featured: true,
      demoUrl: "#",
      githubUrl: "#",
      challengeDescription:
        "Building a high-performance e-commerce platform that could handle traffic spikes during sales events while maintaining fast page loads was challenging. Additionally, implementing a secure payment system that complied with international regulations required extensive research.",
      solutionDescription:
        "I leveraged Next.js with SSR and ISR for optimal performance and SEO. The database schema was carefully designed with Prisma to ensure efficient queries even with complex product relationships. For payments, I implemented Stripe with a custom webhook system for handling payment events securely.",
      outcomes: [
        "99.9% uptime even during high-traffic sales events",
        "Average page load time under 1.5 seconds",
        "15% higher conversion rate compared to the client's previous platform",
        "Seamless integration with existing inventory management systems",
      ],
      testimonial: {
        quote:
          "Ethereal has dramatically improved our online sales performance. The interface is beautiful, checkout is frictionless, and the backend makes product management a breeze. Most importantly, our customers love using it.",
        author: "Emily Chen",
        position: "Operations Director, DataFlow",
      },
    },
  ]

  const project = projects.find((p) => p.id === projectId)

  if (!isMounted) {
    return null
  }

  if (!project) {
    return notFound()
  }

  return (
    <MainLayout>
      <div className="container py-12 md:py-16">
        <div className="mb-8">
          <Link href="/projects" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ChevronLeft className="mr-2 h-4 w-4" />
            <span>Back to all projects</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2 mb-8"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-gray-900">{project.title}</h1>
          <p className="text-xl text-gray-600">{project.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold font-playfair text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700">{project.longDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-playfair text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700">{project.challengeDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-playfair text-gray-900 mb-4">The Solution</h2>
              <p className="text-gray-700">{project.solutionDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-playfair text-gray-900 mb-4">Outcomes & Results</h2>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-900 flex-shrink-0"></span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-playfair text-gray-900 mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg border border-gray-200">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Gallery Image ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {project.testimonial && (
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <blockquote className="text-gray-700 italic mb-4">"{project.testimonial.quote}"</blockquote>
                <div>
                  <p className="font-medium text-gray-900">{project.testimonial.author}</p>
                  <p className="text-sm text-gray-600">{project.testimonial.position}</p>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold font-playfair text-gray-900 mb-4">Project Details</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Category</h4>
                  <p className="text-gray-700 capitalize">{project.category}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-white border-gray-300 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Demo
                </Button>
              </a>

              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-gray-300 text-gray-900 hover:bg-gray-100">
                  <Github className="mr-2 h-4 w-4" />
                  View Source Code
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  )
}


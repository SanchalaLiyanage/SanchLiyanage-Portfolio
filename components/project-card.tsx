"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    demoUrl?: string
    githubUrl?: string
    category?: string
    featured?: boolean
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden bg-black/50 backdrop-blur-sm border-gray-800 transition-all hover:border-cyan-800 group relative h-full flex flex-col">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg blur" />
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg?height=300&width=500"}
            alt={project.title}
            width={500}
            height={300}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {project.featured && (
            <div className="absolute top-4 right-4 px-2 py-1 bg-cyan-500/80 text-black text-xs font-medium rounded">
              Featured
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle className="group-hover:text-cyan-400 transition-colors">{project.title}</CardTitle>
          <CardDescription className="text-gray-400">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="border-gray-700 bg-black/50 backdrop-blur-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {project.githubUrl && (
            <Link href={project.githubUrl}>
              <Button variant="outline" size="sm" className="border-gray-700 hover:bg-gray-900 group">
                <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                Code
              </Button>
            </Link>
          )}
          {project.demoUrl && (
            <Link href={project.demoUrl}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 group"
              >
                <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Live Demo
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}


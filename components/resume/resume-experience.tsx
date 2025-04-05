"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface ResumeExperienceProps {
  creative?: boolean
}

export function ResumeExperience({ creative = false }: ResumeExperienceProps) {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechVision Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: [
        "Led development of cloud-native applications using React, Node.js, and AWS services, resulting in a 40% improvement in application performance",
        "Architected and implemented microservices infrastructure using Docker and Kubernetes, improving scalability and deployment efficiency",
        "Mentored junior developers and conducted code reviews, enhancing team productivity and code quality",
        "Collaborated with product and design teams to implement new features and improve user experience",
        "Implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 60%",
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes", "GraphQL"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      location: "San Francisco, CA",
      period: "2019 - 2021",
      description: [
        "Developed and maintained web applications using React, Node.js, and MongoDB",
        "Implemented responsive UI/UX designs, ensuring cross-browser compatibility and accessibility",
        "Optimized database queries and API endpoints, improving application response time by 35%",
        "Integrated third-party APIs and services, enhancing application functionality",
        "Participated in agile development processes, including sprint planning and retrospectives",
      ],
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "REST API", "Jest"],
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Solutions",
      location: "San Jose, CA",
      period: "2017 - 2019",
      description: [
        "Built interactive web interfaces using modern JavaScript frameworks",
        "Collaborated with designers to implement pixel-perfect, responsive designs",
        "Optimized website performance, achieving a 25% improvement in load times",
        "Developed and maintained component libraries and style guides",
        "Implemented analytics tracking and A/B testing frameworks",
      ],
      technologies: ["JavaScript", "HTML/CSS", "Vue.js", "Webpack", "SASS", "Git", "Figma"],
    },
  ]

  if (creative) {
    return (
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-cyan-800">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-cyan-500" />
            <div className="mb-1">
              <h3 className="text-lg font-bold">{experience.title}</h3>
              <div className="text-cyan-400">{experience.company}</div>
              <div className="text-sm text-gray-400 flex justify-between">
                <span>{experience.location}</span>
                <span>{experience.period}</span>
              </div>
            </div>
            <ul className="mt-2 space-y-1 text-sm text-gray-300">
              {experience.description.slice(0, 2).map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1 mt-2">
              {experience.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="bg-cyan-950/20 border-cyan-800/30 text-cyan-400 text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="print:!opacity-100 print:!transform-none"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-lg font-bold">{experience.title}</h3>
                <p className="text-cyan-400">
                  {experience.company} - {experience.location}
                </p>
              </div>
              <span className="text-gray-400 md:text-right">{experience.period}</span>
            </div>
            <ul className="list-disc pl-5 text-gray-300 space-y-1 mb-3">
              {experience.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 print:hidden">
              {experience.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-gray-900/50 border-gray-700">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="hidden print:block print:text-gray-600 print:text-sm">
              <strong>Technologies:</strong> {experience.technologies.join(", ")}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


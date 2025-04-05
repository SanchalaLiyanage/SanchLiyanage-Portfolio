"use client"

import { useEffect, useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { PageHeader } from "@/components/page-header"
import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CertificationsPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const certifications = [
    {
      title: "Full-Stack Web Developer",
      issuer: "LinkedIn Learning",
      date: "2023",
      credentialLink: "https://www.linkedin.com/learning/certificates/example-credential-1",
      description:
        "Comprehensive certification covering modern web development technologies including HTML, CSS, JavaScript, React, Node.js, and database management.",
    },
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "Docker",
      date: "2023",
      credentialLink: "https://www.docker.com/credentials/example-credential-2",
      description:
        "Professional certification validating expertise in containerization, Docker architecture, image creation, and container orchestration.",
    },
    {
      title: "Atlassian Agile Project Management",
      issuer: "Atlassian",
      date: "2023",
      credentialLink: "https://www.atlassian.com/credentials/example-credential-3",
      description:
        "Certification in Agile methodologies, Scrum, Kanban, and using Atlassian tools like Jira for effective project management.",
    },
    {
      title: "Career Essentials in GitHub",
      issuer: "GitHub",
      date: "2023",
      credentialLink: "https://www.github.com/credentials/example-credential-4",
      description:
        "Certification covering version control, collaboration workflows, GitHub Actions, and CI/CD implementation.",
    },
    {
      title: "JavaScript Foundations",
      issuer: "Mozilla",
      date: "2023",
      credentialLink: "https://www.mozilla.org/credentials/example-credential-5",
      description:
        "Comprehensive certification on JavaScript fundamentals, ES6+ features, asynchronous programming, and modern JavaScript practices.",
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "2023",
      credentialLink: "https://www.postman.com/credentials/example-credential-6",
      description: "Certification validating expertise in API testing, documentation, and development using Postman.",
    },
    {
      title: "Database Programming with PL/SQL",
      issuer: "Oracle",
      date: "2023",
      credentialLink: "https://www.oracle.com/credentials/example-credential-7",
      description:
        "Certification in database programming using PL/SQL, covering stored procedures, functions, triggers, and advanced database concepts.",
    },
    {
      title: "CS50: Introduction to Computer Science",
      issuer: "Harvard University",
      date: "Ongoing",
      credentialLink: "https://cs50.harvard.edu/credentials/example-credential-8",
      description:
        "Harvard's introduction to computer science covering algorithms, data structures, web development, and software engineering principles.",
    },
    {
      title: "Java Foundations Professional Certificate",
      issuer: "JetBrains",
      date: "Ongoing",
      credentialLink: "https://www.jetbrains.com/credentials/example-credential-9",
      description:
        "Comprehensive certification on Java programming fundamentals, object-oriented programming, and Java application development.",
    },
  ]

  if (!isMounted) {
    return null
  }

  return (
    <MainLayout>
      <PageHeader
        title="Professional Certifications"
        description="Credentials and certifications that validate my technical skills and knowledge"
      />

      <section className="container py-12 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-cyan-800 transition-colors group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-gray-800/50 flex-shrink-0">
                  <Award className="h-8 w-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                  <p className="text-gray-400">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{cert.description}</p>

              <Link href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/30 hover:to-blue-600/30 border border-cyan-800/50 text-cyan-400">
                  View Credential <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}


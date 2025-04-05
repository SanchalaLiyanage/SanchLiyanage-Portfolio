"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CertificationsSection() {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      title: "Full-Stack Web Developer",
      issuer: "LinkedIn Learning",
      date: "2023",
      credentialLink: "https://www.linkedin.com/learning/certificates/example-credential-1",
      icon: <Award className="h-10 w-10 text-cyan-400" />,
    },
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "Docker",
      date: "2023",
      credentialLink: "https://www.docker.com/credentials/example-credential-2",
      icon: <Award className="h-10 w-10 text-cyan-400" />,
    },
    {
      title: "Atlassian Agile Project Management",
      issuer: "Atlassian",
      date: "2023",
      credentialLink: "https://www.atlassian.com/credentials/example-credential-3",
      icon: <Award className="h-10 w-10 text-cyan-400" />,
    },
    {
      title: "Career Essentials in GitHub",
      issuer: "GitHub",
      date: "2023",
      credentialLink: "https://www.github.com/credentials/example-credential-4",
      icon: <Award className="h-10 w-10 text-cyan-400" />,
    },
    {
      title: "JavaScript Foundations",
      issuer: "Mozilla",
      date: "2023",
      credentialLink: "https://www.mozilla.org/credentials/example-credential-5",
      icon: <Award className="h-10 w-10 text-cyan-400" />,
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "2023",
      credentialLink: "https://www.postman.com/credentials/example-credential-6",
      icon: <Award className="h-10 w-10 text-cyan-400" />,
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
        <h2 className="text-3xl font-bold mb-4 font-heading">Professional Certifications</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Credentials and certifications that validate my technical skills and knowledge
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-cyan-800 transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-gray-800/50 flex-shrink-0">{cert.icon}</div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{cert.title}</h3>
                <p className="text-gray-400">
                  {cert.issuer} • {cert.date}
                </p>
                <Link href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="link"
                    className="p-0 h-auto text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    View Credential <ExternalLink className="h-3 w-3 ml-1" />
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
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link href="/certifications">
          <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500">
            View All Certifications
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}


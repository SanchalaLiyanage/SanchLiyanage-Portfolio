"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

interface ResumeCertificationsProps {
  creative?: boolean
}

export function ResumeCertifications({ creative = false }: ResumeCertificationsProps) {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      url: "#",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2021",
      url: "#",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2020",
      url: "#",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2019",
      url: "#",
    },
  ]

  if (creative) {
    return (
      <div className="space-y-3">
        {certifications.slice(0, 3).map((cert, index) => (
          <div key={index} className="flex items-center gap-2">
            <Award className="h-4 w-4 text-purple-400 flex-shrink-0" />
            <div>
              <div className="text-sm font-medium">{cert.name}</div>
              <div className="text-xs text-gray-400">
                {cert.issuer} • {cert.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center gap-3 print:!opacity-100 print:!transform-none"
          >
            <Award className="h-5 w-5 text-cyan-400 flex-shrink-0" />
            <div>
              <div className="font-medium">{cert.name}</div>
              <div className="text-sm text-gray-400">
                {cert.issuer} • {cert.date}
              </div>
            </div>
            <a
              href={cert.url}
              className="ml-auto text-cyan-400 hover:text-cyan-300 transition-colors print:hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


"use client"

import { motion } from "framer-motion"

interface ResumeEducationProps {
  creative?: boolean
}

export function ResumeEducation({ creative = false }: ResumeEducationProps) {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      location: "San Francisco, CA",
      period: "2015 - 2017",
      description:
        "Specialized in Software Engineering and Distributed Systems. Thesis on 'Optimizing Microservices Architecture for Cloud-Native Applications'.",
      achievements: [
        "GPA: 3.9/4.0",
        "Teaching Assistant for Advanced Algorithms",
        "Research Assistant in Distributed Systems Lab",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      location: "Los Angeles, CA",
      period: "2011 - 2015",
      description: "Graduated with honors. Focused on Web Development and Algorithms.",
      achievements: ["GPA: 3.8/4.0", "Dean's List all semesters", "President of Computer Science Club"],
    },
  ]

  if (creative) {
    return (
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-purple-800">
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-500" />
            <div className="mb-1">
              <h3 className="text-lg font-bold">{edu.degree}</h3>
              <div className="text-purple-400">{edu.institution}</div>
              <div className="text-sm text-gray-400 flex justify-between">
                <span>{edu.location}</span>
                <span>{edu.period}</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mt-1">{edu.description.split(".")[0]}.</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
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
                <h3 className="text-lg font-bold">{edu.degree}</h3>
                <p className="text-cyan-400">
                  {edu.institution} - {edu.location}
                </p>
              </div>
              <span className="text-gray-400 md:text-right">{edu.period}</span>
            </div>
            <p className="text-gray-300 mb-2">{edu.description}</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              {edu.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


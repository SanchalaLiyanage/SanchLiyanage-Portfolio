"use client"

import { motion } from "framer-motion"
import { Trophy } from "lucide-react"

interface ResumeAwardsProps {
  creative?: boolean
}

export function ResumeAwards({ creative = false }: ResumeAwardsProps) {
  const awards = [
    {
      name: "Innovation Award",
      organization: "TechVision Inc.",
      date: "2022",
      description:
        "Recognized for developing an AI-powered analytics dashboard that increased client engagement by 45%.",
    },
    {
      name: "Hackathon Winner",
      organization: "SF Tech Week",
      date: "2021",
      description:
        "First place in the annual hackathon for developing a real-time collaboration tool for remote teams.",
    },
    {
      name: "Outstanding Contributor",
      organization: "Open Source Community",
      date: "2020",
      description:
        "Recognized for significant contributions to several open-source projects in the JavaScript ecosystem.",
    },
  ]

  if (creative) {
    return (
      <div className="space-y-3">
        {awards.slice(0, 2).map((award, index) => (
          <div key={index} className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="text-sm font-medium">{award.name}</div>
              <div className="text-xs text-gray-400">
                {award.organization} • {award.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Awards & Recognition</h2>
      <div className="space-y-4">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="print:!opacity-100 print:!transform-none"
          >
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="h-5 w-5 text-cyan-400 flex-shrink-0" />
              <div className="font-medium">{award.name}</div>
              <div className="text-sm text-gray-400 ml-auto">{award.date}</div>
            </div>
            <div className="pl-7">
              <div className="text-sm text-cyan-400 mb-1">{award.organization}</div>
              <p className="text-sm text-gray-300">{award.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


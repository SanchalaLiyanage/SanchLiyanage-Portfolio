"use client"

import { motion } from "framer-motion"

interface TimelineItem {
  title: string
  company?: string
  institution?: string
  period: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
  accentColor?: string
}

export function Timeline({ items, accentColor = "cyan" }: TimelineProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "cyan":
        return "from-cyan-500 to-blue-500 border-cyan-800"
      case "purple":
        return "from-purple-500 to-pink-500 border-purple-800"
      case "emerald":
        return "from-emerald-500 to-green-500 border-emerald-800"
      default:
        return "from-cyan-500 to-blue-500 border-cyan-800"
    }
  }

  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative pl-8 pb-8 border-l border-gray-800 group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <motion.div
            className={`absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-to-r ${getColorClasses(accentColor)} group-hover:scale-125 transition-transform duration-300`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          />
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <div className="flex items-center text-gray-400">
              <span>{item.company || item.institution}</span>
              <span className="mx-2">•</span>
              <span>{item.period}</span>
            </div>
            <p className="text-gray-400">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}


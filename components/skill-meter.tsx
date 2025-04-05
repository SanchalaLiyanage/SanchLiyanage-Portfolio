"use client"

import { motion } from "framer-motion"

interface SkillMeterProps {
  name: string
  level: number
  color: string
}

export function SkillMeter({ name, level, color }: SkillMeterProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "cyan":
        return "from-cyan-500 to-blue-500"
      case "purple":
        return "from-purple-500 to-pink-500"
      case "emerald":
        return "from-emerald-500 to-green-500"
      case "amber":
        return "from-amber-500 to-yellow-500"
      case "pink":
        return "from-pink-500 to-rose-500"
      case "blue":
        return "from-blue-500 to-indigo-500"
      default:
        return "from-cyan-500 to-blue-500"
    }
  }

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-lg font-semibold inline-block">{name}</span>
        </div>
        <div className="text-right">
          <span className="text-lg font-semibold inline-block">{level}%</span>
        </div>
      </div>
      <div className="flex h-4 mb-4 overflow-hidden rounded-full bg-gray-800">
        <motion.div
          className={`flex flex-col justify-center overflow-hidden bg-gradient-to-r ${getColorClasses(color)}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
      </div>
    </div>
  )
}


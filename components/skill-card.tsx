"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 p-6 backdrop-blur-sm transition-all hover:border-gray-700 relative group overflow-hidden"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg blur" />
      <div className="rounded-full bg-gray-900/80 backdrop-blur-sm p-3 border border-gray-800 group-hover:border-gray-700 transition-colors duration-300 z-10">
        {icon}
      </div>
      <h3 className="text-xl font-bold z-10">{title}</h3>
      <p className="text-center text-sm text-gray-400 z-10">{description}</p>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}


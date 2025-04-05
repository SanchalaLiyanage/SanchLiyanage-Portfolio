"use client"

import { motion } from "framer-motion"

interface ScrollProgressProps {
  progress: any
}

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 z-50 origin-left"
      style={{ scaleX: progress }}
    />
  )
}


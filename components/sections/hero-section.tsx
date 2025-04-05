"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { HeroParticles } from "@/components/hero-particles"
import { ScrollIndicator } from "@/components/scroll-indicator"

export function HeroSection() {
  const words = [
    { text: "Full Stack Developer" },
    { text: "Mobile App Developer" },
    { text: "DevOps Engineer" },
    { text: "Software Engineering Student" },
  ]

  return (
    <section className="relative w-full min-h-screen flex items-center py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <HeroParticles />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider border border-cyan-800 rounded-full mb-4 bg-cyan-900/20 text-cyan-400">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Navodi Liyanage
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a <TypewriterEffect words={words} />
          </motion.div>

          <motion.p
            className="max-w-2xl mx-auto text-gray-400 md:text-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A passionate software engineer with expertise in full-stack development, mobile app development, and DevOps.
            Currently enhancing my skills in machine learning and cloud technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/projects">
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white group">
                <span>View My Projects</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}


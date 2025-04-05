"use client"

import Link from "next/link"
import { Code, Github, Linkedin, Mail, Instagram, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Footer() {
  const [footerRef, footerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer ref={footerRef} className="w-full border-t border-gray-800 bg-black py-12">
      <div className="container">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          animate={footerInView ? "show" : "hidden"}
        >
          <motion.div className="space-y-4" variants={item}>
            <Link href="/" className="flex items-center gap-2">
              <Code className="h-6 w-6 text-cyan-400" />
              <span className="text-lg font-bold text-white">Navodi Liyanage</span>
            </Link>
            <p className="text-sm text-gray-400">
              A passionate software engineer with expertise in full-stack development, mobile app development, and
              DevOps. Currently enhancing my skills in machine learning and cloud technologies.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/SanchalaLiyanage"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/navodi-sanchala-liyanage/"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/navodi_sanchala/"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="mailto:sanchliyanage.info@gmail.com"
                className="text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-sm font-medium text-white">Pages</h3>
            <nav className="flex flex-col space-y-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="/projects" className="hover:text-cyan-400 transition-colors">
                Projects
              </Link>
              <Link href="/skills" className="hover:text-cyan-400 transition-colors">
                Skills
              </Link>
              <Link href="/certifications" className="hover:text-cyan-400 transition-colors">
                Certifications
              </Link>
              <Link href="/volunteering" className="hover:text-cyan-400 transition-colors">
                Volunteering
              </Link>
              <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </nav>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-sm font-medium text-white">Projects</h3>
            <nav className="flex flex-col space-y-2 text-sm text-gray-400">
              <Link href="/projects" className="hover:text-cyan-400 transition-colors">
                IoT-Based Parking System
              </Link>
              <Link href="/projects" className="hover:text-cyan-400 transition-colors">
                NIBMaestro
              </Link>
              <Link href="/projects" className="hover:text-cyan-400 transition-colors">
                HorizonTrack
              </Link>
            </nav>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h3 className="text-sm font-medium text-white">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <p>sanchliyanage.info@gmail.com</p>
              <p>+94 76 499 1288</p>
              <div className="flex items-center gap-2 mt-4">
                <ExternalLink className="h-4 w-4 text-cyan-400" />
                <Link href="https://github.com/SanchalaLiyanage" className="hover:text-cyan-400 transition-colors">
                  github.com/SanchalaLiyanage
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-cyan-400" />
                <Link
                  href="https://www.instagram.com/navodi_sanchala/"
                  className="hover:text-cyan-400 transition-colors"
                >
                  instagram.com/navodi_sanchala
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>© {currentYear} Navodi Sanchala Liyanage. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}


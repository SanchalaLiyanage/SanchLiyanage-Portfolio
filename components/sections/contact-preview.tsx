"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function ContactPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="w-full py-24 bg-gray-50">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Get In Touch</span>
          <h2 className="text-3xl font-bold mt-2 mb-6 font-playfair text-gray-900">Let's Work Together</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you. Let's create
            something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                <span>Contact Me</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="group border-gray-300 text-gray-900 hover:bg-gray-100">
                <span>View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


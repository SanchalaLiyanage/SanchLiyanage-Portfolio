"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function AboutPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="w-full py-24 bg-gray-50">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-gray-500">About Me</span>
            <h2 className="text-3xl font-bold mt-2 mb-6 font-playfair text-gray-900">
              Crafting Digital Solutions with Precision
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                With over 6 years of experience in software development, I've built a reputation for delivering elegant,
                efficient solutions to complex problems. My approach combines technical excellence with a deep
                understanding of user needs and business objectives.
              </p>
              <p>
                I specialize in full-stack development with a focus on JavaScript/TypeScript ecosystems, including
                React, Next.js, and Node.js. I'm also experienced with cloud platforms like AWS and have a strong
                interest in DevOps practices.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/about">
                <Button variant="outline" className="group border-gray-300 text-gray-900 hover:bg-gray-100">
                  <span>Learn More About Me</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-gray-900 rounded-lg transform translate-x-4 translate-y-4"></div>
              <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Alex Chen"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                <p className="text-sm font-medium text-gray-900">6+ Years Experience</p>
                <p className="text-xs text-gray-600">Full Stack Development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


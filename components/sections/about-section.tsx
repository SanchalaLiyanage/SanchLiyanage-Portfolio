"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function AboutSection() {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="container py-12 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_500px]">
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-6 font-heading">About Me</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              I'm Navodi Sanchala Liyanage, a second-year Software Engineering student at the National Institute of
              Business Management (NIBM) with a passion for creating innovative software solutions. My journey in
              software development began during my first year at NIBM, where I discovered my love for building
              applications that solve real-world problems.
            </p>
            <p>
              I specialize in full-stack development with the MERN stack (MongoDB, Express.js, React, and Node.js),
              mobile app development, and DevOps practices. I'm experienced in integrating cloud technologies like AWS
              and Firebase into my projects, and I'm currently enhancing my expertise in machine learning by working on
              predictive models using Python.
            </p>
            <p>
              My approach to software development combines technical excellence with a focus on user experience and
              business objectives. I believe in writing clean, maintainable code and creating intuitive interfaces that
              provide real value to users.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={contentInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, type: "spring" }}
          ref={contentRef}
        >
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] perspective">
            <div className="absolute inset-0 rounded-2xl border border-cyan-500/20 glow-sm" />
            <div className="absolute inset-4 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Navodi Sanchala Liyanage"
                width={400}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
              <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-2">
                Software Engineer Intern
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border border-cyan-500/20 animate-spin-slow" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border border-purple-500/20 animate-reverse-spin" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}


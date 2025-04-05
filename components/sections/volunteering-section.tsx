"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

export function VolunteeringSection() {
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const volunteeringExperiences = [
    {
      title: "Registration Manager",
      organization: "API and GenAI Tour Sri Lanka 2025",
      date: "March 2025",
      location: "Colombo, Sri Lanka",
      description:
        "Led the registration process for 750+ attendees and coordinated with developers and Microsoft Student Ambassadors to ensure a seamless experience.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Organizing Committee Member",
      organization: "Maze Master 2.0 Tech Competition",
      date: "November 2024",
      location: "NIBM, Colombo",
      description:
        "Contributed to the successful execution of a tech competition at NIBM, optimizing event planning and facilitating 200+ participants.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Volunteering Member",
      organization: "Unawatuna Leo Diamonds Club",
      date: "2023 - Present",
      location: "Galle, Sri Lanka",
      description:
        "Actively participated in community initiatives, supporting multiple fundraising and outreach programs to help local communities.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section
      ref={contentRef}
      className="container py-12 md:py-24 bg-gradient-radial from-gray-900/50 via-black to-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 font-heading">Volunteering Experience</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Community involvement and leadership experiences that have shaped my collaborative skills
        </p>
      </motion.div>

      <div className="space-y-16">
        {volunteeringExperiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`grid gap-8 md:grid-cols-2 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
              <div className="relative overflow-hidden rounded-xl border border-gray-800 shadow-lg">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
            </div>

            <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">{experience.title}</h3>
              <h4 className="text-xl font-medium mb-4">{experience.organization}</h4>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400">
                  <Calendar className="h-4 w-4 mr-2 text-cyan-400" />
                  <span>{experience.date}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
                  <span>{experience.location}</span>
                </div>
              </div>

              <p className="text-gray-300">{experience.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


"use client"

import { useEffect, useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { PageHeader } from "@/components/page-header"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

export default function VolunteeringPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const volunteeringExperiences = [
    {
      title: "Registration Manager",
      organization: "API and GenAI Tour Sri Lanka 2025",
      date: "March 2025",
      location: "Colombo, Sri Lanka",
      description:
        "Led the registration process for 750+ attendees and coordinated with developers and Microsoft Student Ambassadors to ensure a seamless experience.",
      responsibilities: [
        "Managed the registration system and database for all attendees",
        "Coordinated with a team of 15 volunteers to handle check-in processes",
        "Collaborated with event organizers to resolve registration issues",
        "Created detailed reports on attendance and participant demographics",
      ],
      image: "/placeholder.svg?height=600&width=800",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      title: "Organizing Committee Member",
      organization: "Maze Master 2.0 Tech Competition",
      date: "November 2024",
      location: "NIBM, Colombo",
      description:
        "Contributed to the successful execution of a tech competition at NIBM, optimizing event planning and facilitating 200+ participants.",
      responsibilities: [
        "Designed competition challenges and evaluation criteria",
        "Coordinated with judges and technical support staff",
        "Managed participant communications and queries",
        "Assisted with venue setup and technical requirements",
      ],
      image: "/placeholder.svg?height=600&width=800",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      title: "Volunteering Member",
      organization: "Unawatuna Leo Diamonds Club",
      date: "2023 - Present",
      location: "Galle, Sri Lanka",
      description:
        "Actively participated in community initiatives, supporting multiple fundraising and outreach programs to help local communities.",
      responsibilities: [
        "Participated in beach cleanup initiatives in Unawatuna coastal area",
        "Assisted in organizing educational workshops for underprivileged children",
        "Contributed to fundraising events for community development projects",
        "Helped coordinate donation drives for local schools",
      ],
      image: "/placeholder.svg?height=600&width=800",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
  ]

  if (!isMounted) {
    return null
  }

  return (
    <MainLayout>
      <PageHeader
        title="Volunteering Experience"
        description="Community involvement and leadership experiences that have shaped my collaborative skills"
      />

      <section className="container py-12 md:py-24">
        {volunteeringExperiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="mb-24 last:mb-0"
          >
            <div className="grid gap-8 md:grid-cols-2 items-center mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-cyan-400">{experience.title}</h2>
                <h3 className="text-xl font-medium mb-4">{experience.organization}</h3>

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

                <p className="text-gray-300 mb-6">{experience.description}</p>

                <div>
                  <h4 className="text-lg font-medium mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-500 flex-shrink-0"></span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-gray-800 shadow-lg">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-6 text-center">Event Gallery</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {experience.gallery.map((image, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                    className="overflow-hidden rounded-lg border border-gray-800"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${experience.title} gallery image ${idx + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </MainLayout>
  )
}


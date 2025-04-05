"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

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
        <h2 className="text-3xl font-bold mb-4 font-heading">Get In Touch</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out to me directly.
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={contentInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/30 border border-gray-800 rounded-xl p-8"
        >
          <h3 className="text-xl font-bold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-cyan-950/30 p-3 border border-cyan-800/30">
                <Mail className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-400">sanchliyanage.info@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-purple-950/30 p-3 border border-purple-800/30">
                <Phone className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-400">+94 76 499 1288</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-full bg-emerald-950/30 p-3 border border-emerald-800/30">
                <MapPin className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-400">Galle, Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-medium mb-4">Connect with me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/SanchalaLiyanage"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-3 border border-gray-700 hover:border-cyan-800 hover:bg-cyan-950/20 transition-colors duration-300 group"
              >
                <Github className="h-6 w-6 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/navodi-sanchala-liyanage/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-800 p-3 border border-gray-700 hover:border-purple-800 hover:bg-purple-950/20 transition-colors duration-300 group"
              >
                <Linkedin className="h-6 w-6 group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href="mailto:sanchliyanage.info@gmail.com"
                className="rounded-full bg-gray-800 p-3 border border-gray-700 hover:border-emerald-800 hover:bg-emerald-950/20 transition-colors duration-300 group"
              >
                <Mail className="h-6 w-6 group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={contentInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-900/30 border border-gray-800 rounded-xl p-8"
        >
          <h3 className="text-xl font-bold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800/50 border-gray-700 focus:border-cyan-700"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800/50 border-gray-700 focus:border-cyan-700"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-gray-800/50 border-gray-700 focus:border-cyan-700"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-800/50 border-gray-700 focus:border-cyan-700"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 group"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span className="absolute right-4 group-hover:translate-x-1 transition-transform">→</span>
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}


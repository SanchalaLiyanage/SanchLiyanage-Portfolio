"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function NewsletterSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, threshold: 0.2 })
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail("")

      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to my newsletter.",
      })

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section ref={containerRef} className="w-full py-24 bg-gray-50">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Stay Updated</span>
          <h2 className="text-3xl font-bold mt-2 mb-6 font-playfair text-gray-900">Subscribe to My Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Get the latest articles, tutorials, and updates on my projects directly to your inbox. I send out
            newsletters once a month with valuable content – no spam, ever.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting || isSubmitted}
                className="bg-white border-gray-300 focus:border-gray-400 h-12 pl-4"
              />
              {isSubmitted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-500 rounded-full p-1"
                >
                  <Check className="h-4 w-4 text-white" />
                </motion.div>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="bg-gray-900 hover:bg-gray-800 text-white h-12"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                  Subscribing...
                </>
              ) : isSubmitted ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Subscribed!
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to receive occasional updates. You can unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}


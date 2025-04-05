"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, threshold: 0.2 })

  const testimonials = [
    {
      id: 1,
      content:
        "Working with Alex was a game-changer for our project. His technical expertise and attention to detail resulted in a product that exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, TechStart Inc.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      content:
        "Alex has a remarkable ability to translate complex requirements into elegant solutions. His collaborative approach made the development process smooth and enjoyable.",
      author: "Michael Rodriguez",
      position: "Product Manager, InnovateLabs",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      content:
        "The custom dashboard Alex built for us has transformed our operations. It's intuitive, fast, and exactly what we needed. I highly recommend his services.",
      author: "Emily Chen",
      position: "Operations Director, DataFlow",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const scrollTestimonials = (direction: "left" | "right") => {
    if (!containerRef.current) return

    const scrollAmount = 350
    const currentScroll = containerRef.current.scrollLeft

    containerRef.current.scrollTo({
      left: direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Testimonials</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 font-playfair text-gray-900">What People Say</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take my word for it. Here's what clients and colleagues have to say about working with me.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 md:block hidden">
            <Button
              onClick={() => scrollTestimonials("left")}
              size="icon"
              variant="outline"
              className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 md:block hidden">
            <Button
              onClick={() => scrollTestimonials("right")}
              size="icon"
              variant="outline"
              className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          <div
            ref={containerRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin snap-x"
            style={{ scrollbarWidth: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-[350px] snap-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-full flex flex-col">
                  <Quote className="h-12 w-12 text-gray-200 mb-4" />
                  <p className="text-gray-700 mb-6 flex-grow">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


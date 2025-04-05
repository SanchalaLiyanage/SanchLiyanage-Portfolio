"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export function BlogPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const recentPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with Next.js",
      excerpt: "Learn how to build scalable web applications using Next.js, React, and modern frontend techniques.",
      date: "June 15, 2023",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=500",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we build and maintain software.",
      date: "May 22, 2023",
      category: "Artificial Intelligence",
      image: "/placeholder.svg?height=300&width=500",
      readTime: "12 min read",
    },
  ]

  return (
    <section ref={ref} className="w-full py-24 bg-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Blog & Articles</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 font-playfair text-gray-900">Recent Insights</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Thoughts, insights, and tutorials on software development and technology
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <Link href={`/blog/${post.id}`} className="group block h-full">
                <div className="h-full flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-white text-gray-900 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold font-playfair text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/blog">
            <Button variant="outline" className="group border-gray-300 text-gray-900 hover:bg-gray-100">
              <span>View All Articles</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


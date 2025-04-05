"use client"

import { useEffect, useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { PageHeader } from "@/components/page-header"
import { motion } from "framer-motion"
import { BlogCard } from "@/components/blog-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const blogPosts = [
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
    {
      id: 3,
      title: "Optimizing Database Performance in High-Traffic Applications",
      excerpt: "Strategies and techniques for optimizing database performance in applications with high traffic.",
      date: "April 10, 2023",
      category: "Database",
      image: "/placeholder.svg?height=300&width=500",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Implementing Authentication with NextAuth.js",
      excerpt: "A comprehensive guide to implementing authentication in Next.js applications using NextAuth.js.",
      date: "March 5, 2023",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=500",
      readTime: "15 min read",
    },
    {
      id: 5,
      title: "Containerization Best Practices with Docker",
      excerpt: "Learn the best practices for containerizing your applications using Docker and Docker Compose.",
      date: "February 18, 2023",
      category: "DevOps",
      image: "/placeholder.svg?height=300&width=500",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "How to create beautiful, responsive user interfaces using Tailwind CSS and modern design principles.",
      date: "January 30, 2023",
      category: "UI/UX",
      image: "/placeholder.svg?height=300&width=500",
      readTime: "7 min read",
    },
  ]

  const categories = ["all", ...new Set(blogPosts.map((post) => post.category))]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
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

  if (!isMounted) {
    return null
  }

  return (
    <MainLayout>
      <PageHeader
        title="Blog & Articles"
        description="Thoughts, insights, and tutorials on software development and technology"
      />

      <section className="container py-12 md:py-24">
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-900/50 border-gray-800 focus:border-cyan-800"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Badge
                key={category}
                className={`px-4 py-2 text-base cursor-pointer capitalize ${
                  selectedCategory === category
                    ? "bg-cyan-950/50 hover:bg-cyan-900/60 border-cyan-800/50"
                    : "bg-gray-900/50 hover:bg-gray-800/60 border-gray-800"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <motion.div className="grid gap-8 md:grid-cols-2" variants={container} initial="hidden" animate="show">
              {filteredPosts.map((post) => (
                <motion.div key={post.id} variants={item}>
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="container py-12 md:py-24 bg-gradient-radial from-gray-900/50 via-black to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-heading">Subscribe to My Newsletter</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Stay updated with my latest articles, tutorials, and insights on software development and technology.
          </p>

          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                placeholder="Your email address"
                type="email"
                required
                className="bg-gray-900/50 border-gray-800 focus:border-cyan-800"
              />
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">I respect your privacy. Unsubscribe at any time.</p>
          </form>
        </div>
      </section>
    </MainLayout>
  )
}

function Button({ className, children, ...props }) {
  return (
    <button className={`px-4 py-2 rounded-md font-medium transition-colors ${className}`} {...props}>
      {children}
    </button>
  )
}


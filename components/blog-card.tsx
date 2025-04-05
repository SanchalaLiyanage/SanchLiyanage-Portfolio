"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

interface BlogCardProps {
  post: {
    id: number
    title: string
    excerpt: string
    date: string
    category: string
    image: string
    readTime: string
  }
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <Link href={`/blog/${post.id}`}>
        <Card className="overflow-hidden bg-black/50 backdrop-blur-sm border-gray-800 transition-all hover:border-cyan-800 group relative h-full flex flex-col">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg blur" />
          <div className="aspect-video overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={500}
              height={300}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 left-4 px-2 py-1 bg-cyan-500/80 text-black text-xs font-medium rounded">
              {post.category}
            </div>
          </div>
          <CardHeader>
            <CardTitle className="group-hover:text-cyan-400 transition-colors">{post.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-gray-400">{post.excerpt}</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              {post.readTime}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}


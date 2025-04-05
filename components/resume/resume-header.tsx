"use client"

import { Mail, MapPin, Phone, Github, Linkedin, Globe } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function ResumeHeader() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Alex Chen</h1>
          <p className="text-xl text-cyan-400">Senior Software Engineer</p>
        </div>
        <div className="flex flex-col space-y-1 text-sm text-gray-400">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span>alex.chen@example.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 print:hidden">
        <a href="#" className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors">
          <Github className="h-4 w-4 mr-1" />
          <span>github.com/alexchen</span>
        </a>
        <a href="#" className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors">
          <Linkedin className="h-4 w-4 mr-1" />
          <span>linkedin.com/in/alexchen</span>
        </a>
        <a href="#" className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors">
          <Globe className="h-4 w-4 mr-1" />
          <span>alexchen.dev</span>
        </a>
      </div>

      <div className="hidden print:flex print:flex-wrap print:gap-3 text-sm text-gray-600">
        <span className="flex items-center">
          <Github className="h-4 w-4 mr-1" />
          <span>github.com/alexchen</span>
        </span>
        <span className="flex items-center">
          <Linkedin className="h-4 w-4 mr-1" />
          <span>linkedin.com/in/alexchen</span>
        </span>
        <span className="flex items-center">
          <Globe className="h-4 w-4 mr-1" />
          <span>alexchen.dev</span>
        </span>
      </div>

      <p className="text-gray-300">
        Experienced software engineer with 6+ years of expertise in full-stack development, specializing in building
        scalable web applications and cloud-native solutions. Passionate about creating elegant solutions to complex
        problems with a focus on performance, accessibility, and user experience.
      </p>

      <Separator className="bg-gray-800" />
    </div>
  )
}


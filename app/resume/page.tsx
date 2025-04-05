"use client"

import { useEffect, useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Download, Printer, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ResumePage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handlePrint = () => {
    window.print()
  }

  if (!isMounted) {
    return null
  }

  return (
    <MainLayout>
      <PageHeader title="Resume" description="My professional experience, education, and skills" />

      <section className="container py-12 md:py-24 print:py-0">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8 print:hidden">
            <h2 className="text-2xl font-bold">Professional Resume</h2>
            <div className="flex gap-4">
              <Button variant="outline" className="group" onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" />
                Print Resume
              </Button>
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>

          <div className="print:shadow-none bg-gray-900 text-white border border-gray-800 rounded-lg overflow-hidden print:border-0">
            <div className="p-8 print:p-0 text-sm" id="resume-content">
              {/* Resume Header */}
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h1 className="text-2xl font-bold">NAVODI SANCHALA LIYANAGE</h1>
                    <p className="text-lg text-cyan-400">SOFTWARE ENGINEER INTERN</p>
                  </div>
                  <div className="flex flex-col space-y-1 text-xs text-gray-300">
                    <div className="flex items-center">
                      <Mail className="h-3 w-3 mr-2" />
                      <span>sanchliyanage.info@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-2" />
                      <span>+94 76 499 1288</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-2" />
                      <span>Galle, Sri Lanka</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 print:hidden">
                  <a
                    href="https://www.linkedin.com/in/navodi-sanchala-liyanage/"
                    className="flex items-center text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-3 w-3 mr-1" />
                    <span>linkedin.com/in/navodi-sanchala-liyanage/</span>
                  </a>
                  <a
                    href="https://github.com/SanchalaLiyanage"
                    className="flex items-center text-xs text-gray-300 hover:text-cyan-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-3 w-3 mr-1" />
                    <span>github.com/SanchalaLiyanage</span>
                  </a>
                </div>

                <div className="hidden print:flex print:flex-wrap print:gap-3 text-xs text-gray-600">
                  <span className="flex items-center">
                    <Linkedin className="h-3 w-3 mr-1" />
                    <span>linkedin.com/in/navodi-sanchala-liyanage/</span>
                  </span>
                  <span className="flex items-center">
                    <Github className="h-3 w-3 mr-1" />
                    <span>github.com/SanchalaLiyanage</span>
                  </span>
                </div>

                <div className="bg-gray-800/50 p-3 rounded-md border-l-4 border-cyan-600 text-xs">
                  <p className="text-gray-300">
                    A second-year Software Engineering student at NIBM with hands-on experience in full-stack
                    development, mobile app development, and DevOps. Built and deployed web applications with MongoDB,
                    Express.js, React, and Node.js (MERN stack), integrating cloud technologies like AWS and Firebase.
                    Currently enhancing expertise in machine learning by working on predictive models using Python.
                    Experienced in CI/CD pipelines with Docker and Jenkins, reducing deployment times by 25%. Eager to
                    apply my technical skills and collaborative approach to contribute to innovative projects and grow
                    as a software engineer.
                  </p>
                </div>

                <Separator className="bg-gray-700" />
              </div>

              {/* Resume Content */}
              <div className="mt-6 space-y-6">
                {/* Education Section */}
                <div>
                  <h2 className="text-base font-bold mb-3 text-cyan-400">EDUCATION</h2>
                  <div className="space-y-3">
                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                        <div>
                          <h3 className="text-sm font-bold">
                            School of Computing, National Institute of Business Management
                          </h3>
                          <p className="text-xs text-gray-300">Higher National Diploma in Software Engineering</p>
                        </div>
                        <span className="text-xs text-gray-400 md:text-right">April 2024 - present</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                        <div>
                          <h3 className="text-sm font-bold">
                            School of Computing, National Institute of Business Management
                          </h3>
                          <p className="text-xs text-gray-300">Diploma in Software Engineering</p>
                        </div>
                        <span className="text-xs text-gray-400 md:text-right">April 2023 - April 2024</span>
                      </div>
                      <p className="text-xs text-gray-300">OGPA: 3.95/4.00</p>
                    </div>

                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                        <div>
                          <h3 className="text-sm font-bold">
                            Department of English, Aquinas College of Higher Studies
                          </h3>
                          <p className="text-xs text-gray-300">Diploma in English Language and Literature</p>
                        </div>
                        <span className="text-xs text-gray-400 md:text-right">October 2022 - June 2023</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                        <div>
                          <h3 className="text-sm font-bold">Janadhipathi Balika College, Galle</h3>
                        </div>
                        <span className="text-xs text-gray-400 md:text-right">2007-2022</span>
                      </div>
                      <p className="text-xs text-gray-300">GCE Ordinary Level - 2018: 5As, 3Bs & 1C</p>
                      <p className="text-xs text-gray-300">GCE Advanced Level (Bio Stream) - 2021: 2Ss</p>
                    </div>
                  </div>
                </div>

                {/* Technical Skills Section */}
                <div>
                  <h2 className="text-base font-bold mb-3 text-cyan-400">TECHNICAL SKILLS</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-sm font-bold mb-2 text-gray-200">Programming Languages</h3>
                      <div className="flex flex-wrap gap-1">
                        {["C++", "Java", "JavaScript", "C", "C#", "PHP"].map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="bg-gray-800/50 border-gray-700 text-gray-300 text-xs py-0 px-2"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold mb-2 text-gray-200">Web Development</h3>
                      <div className="flex flex-wrap gap-1">
                        {[
                          "HTML",
                          "CSS",
                          "JavaScript (ES6+)",
                          "React.js",
                          "Node.js",
                          "Spring Boot",
                          "Laravel",
                          "Vite.js",
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="bg-gray-800/50 border-gray-700 text-gray-300 text-xs py-0 px-2"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold mb-2 text-gray-200">Database Systems</h3>
                      <div className="flex flex-wrap gap-1">
                        {["MySQL", "MongoDB", "Firebase", "Oracle", "PL/SQL", "SQLite"].map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="bg-gray-800/50 border-gray-700 text-gray-300 text-xs py-0 px-2"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold mb-2 text-gray-200">Development Tools</h3>
                      <div className="flex flex-wrap gap-1">
                        {["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA", "Eclipse"].map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="bg-gray-800/50 border-gray-700 text-gray-300 text-xs py-0 px-2"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold mb-2 text-gray-200">Mobile Development</h3>
                      <div className="flex flex-wrap gap-1">
                        {["Flutter", "Kotlin"].map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="bg-gray-800/50 border-gray-700 text-gray-300 text-xs py-0 px-2"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold mb-2 text-gray-200">DevOps</h3>
                      <div className="flex flex-wrap gap-1">
                        {["GitHub Actions", "Docker"].map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="bg-gray-800/50 border-gray-700 text-gray-300 text-xs py-0 px-2"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projects Section */}
                <div>
                  <h2 className="text-base font-bold mb-3 text-cyan-400">PROJECTS</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 p-3 rounded-md border-l-4 border-cyan-600">
                      <h3 className="text-sm font-bold">IoT-Based Parking Booking Management System (Ongoing)</h3>
                      <p className="text-xs text-cyan-400 mb-1">Full Stack Developer & DevOps Engineer</p>
                      <ul className="list-disc pl-5 text-xs text-gray-300 space-y-1">
                        <li>
                          Developed a smart parking solution using the MERN stack, React Native, and IoT sensors
                          (Raspberry Pi/Arduino), achieving real-time space availability and payment functionality.
                        </li>
                        <li>
                          Integrated CI/CD pipelines with Jenkins and AWS, improving deployment efficiency by 30%.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 p-3 rounded-md border-l-4 border-cyan-600">
                      <h3 className="text-sm font-bold">NIBMaestro - Project & Learning Management System (2024)</h3>
                      <p className="text-xs text-cyan-400 mb-1">Full Stack Developer</p>
                      <ul className="list-disc pl-5 text-xs text-gray-300 space-y-1">
                        <li>
                          Built a platform to manage projects and learning activities for students and lecturers,
                          leading to a 40% improvement in project submission timelines.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 p-3 rounded-md border-l-4 border-cyan-600">
                      <h3 className="text-sm font-bold">HorizonTrack - Fitness Tracking Mobile App (2024)</h3>
                      <p className="text-xs text-cyan-400 mb-1">Mobile App Developer</p>
                      <ul className="list-disc pl-5 text-xs text-gray-300 space-y-1">
                        <li>
                          Designed and implemented personalized diet plans and BMI calculation features, increasing user
                          engagement by 30%.
                        </li>
                        <li>
                          Contributed to a fitness tracking application by enhancing functionality for jogging path
                          tracking and fitness diaries, ensuring a seamless user experience.
                        </li>
                        <li>Technologies: Kotlin, Firebase, Google Maps API, Android Studio.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Certifications Section */}
                <div>
                  <h2 className="text-base font-bold mb-3 text-cyan-400">CERTIFICATIONS</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      { name: "Become a Full-Stack Web Developer - LinkedIn Learning" },
                      { name: "Docker Foundations Professional Certificate - Docker" },
                      { name: "Atlassian Agile Project Management Professional Certificate - Atlassian" },
                      { name: "Career Essentials in GitHub Professional Certificate - GitHub" },
                      { name: "JavaScript Foundations Professional Certificate by Mozilla" },
                      { name: "Postman API Fundamentals Student Expert Certification" },
                      { name: "Database Programming with PL/SQL" },
                      { name: "CS50: Introduction to Computer Science - Harvard University (Ongoing)" },
                      { name: "Java Foundations Professional Certificate by JetBrains (Ongoing)" },
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                        <span className="text-xs text-gray-300">{cert.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Volunteering Experience Section */}
                <div>
                  <h2 className="text-base font-bold mb-3 text-cyan-400">VOLUNTEERING EXPERIENCE</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      <div>
                        <span className="text-xs font-medium text-white">Registration Manager:</span>
                        <span className="text-xs text-gray-300">
                          {" "}
                          Led the API and GenAI Tour Sri Lanka 2025, managing 750+ attendee registrations and
                          coordinating with developers and Microsoft Student Ambassadors to ensure a seamless
                          experience.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      <div>
                        <span className="text-xs font-medium text-white">Organizing Committee Member:</span>
                        <span className="text-xs text-gray-300">
                          {" "}
                          Contributed to the successful execution of Maze Master 2.0, a tech competition at NIBM,
                          optimizing event planning and facilitating 200+ participants.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-1.5"></div>
                      <div>
                        <span className="text-xs font-medium text-white">Volunteering Member:</span>
                        <span className="text-xs text-gray-300">
                          {" "}
                          Actively participated in Unawatuna Leo Diamonds Club community initiatives, supporting
                          multiple fundraising and outreach programs.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Soft Skills Section */}
                <div>
                  <h2 className="text-base font-bold mb-3 text-cyan-400">SOFT SKILLS</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      "Project Management",
                      "Collaborative",
                      "Detail-Oriented Development",
                      "Communication",
                      "Adaptability",
                      "Critical Thinking & Problem-Solving",
                      "Coding Best Practices",
                      "Leadership Potential",
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                        <span className="text-xs text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}


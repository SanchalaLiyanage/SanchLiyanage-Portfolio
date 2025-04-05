"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Certifications", path: "/certifications" },
    { name: "Volunteering", path: "/volunteering" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path) => pathname === path

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-gray-800 bg-black/90 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <Code className="h-6 w-6 text-cyan-400" />
          <span className="text-lg font-bold text-white">Navodi Liyanage</span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors relative ${
                isActive(item.path) ? "text-cyan-400" : "text-gray-400 hover:text-white"
              }`}
            >
              <span>{item.name}</span>
              {isActive(item.path) && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Link href="/contact">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Contact Me</Button>
          </Link>
        </div>

        <div className="flex items-center gap-4 ml-auto md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-b border-gray-800 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className="flex flex-col space-y-4 p-4"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={item.path}
                    className={`text-sm font-medium transition-colors block py-2 ${
                      isActive(item.path) ? "text-cyan-400" : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">Contact Me</Button>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


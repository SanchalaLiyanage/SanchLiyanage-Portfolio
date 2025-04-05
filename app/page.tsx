"use client"

import { useEffect, useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { CertificationsSection } from "@/components/sections/certifications-section"
import { VolunteeringSection } from "@/components/sections/volunteering-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ScrollProgress } from "@/components/scroll-progress"
import { useScroll, useSpring } from "framer-motion"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <ScrollProgress progress={scaleX} />
      <MainLayout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <VolunteeringSection />
        <ContactSection />
      </MainLayout>
    </>
  )
}


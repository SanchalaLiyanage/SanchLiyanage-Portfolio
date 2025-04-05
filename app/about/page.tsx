"use client"

import { useEffect, useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { PageHeader } from "@/components/page-header"
import { AboutSection } from "@/components/sections/about-section"
import { EducationSection } from "@/components/sections/education-section"
import { AchievementsSection } from "@/components/sections/achievements-section"

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <MainLayout>
      <PageHeader title="About Me" description="My journey, experience, and what drives me as a developer" />
      <AboutSection />
      <EducationSection />
      <AchievementsSection />
    </MainLayout>
  )
}


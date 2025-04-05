"use client"

import { useEffect, useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { PageHeader } from "@/components/page-header"
import { SkillsSection } from "@/components/sections/skills-section"

export default function SkillsPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <MainLayout>
      <PageHeader title="Skills & Expertise" description="My technical skills, tools, and methodologies" />
      <SkillsSection />
    </MainLayout>
  )
}


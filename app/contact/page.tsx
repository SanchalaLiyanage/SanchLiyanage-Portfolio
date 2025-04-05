"use client"

import { useEffect, useState } from "react"
import { MainLayout } from "@/components/main-layout"
import { PageHeader } from "@/components/page-header"
import { ContactSection } from "@/components/sections/contact-section"

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <MainLayout>
      <PageHeader
        title="Get In Touch"
        description="Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you."
      />
      <ContactSection />
    </MainLayout>
  )
}


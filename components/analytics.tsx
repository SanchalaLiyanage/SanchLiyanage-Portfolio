"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would typically add your analytics tracking code
    // For example, Google Analytics or similar services

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // Example tracking call (replace with actual implementation)
    console.log(`Page view: ${url}`)
  }, [pathname, searchParams])

  return null
}


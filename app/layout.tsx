import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import { AnimationProvider } from "@/components/animation-provider"
import { MousePositionProvider } from "@/components/mouse-position-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Navodi Sanchala Liyanage | Software Engineer",
  description:
    "Portfolio of Navodi Sanchala Liyanage, a software engineer specializing in full-stack development, mobile app development, and DevOps.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AnimationProvider>
            <MousePositionProvider>
              {children}
              <Analytics />
            </MousePositionProvider>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
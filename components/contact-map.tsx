"use client"

import { useEffect, useRef } from "react"

export function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const mapContainer = mapRef.current

    // This is a simplified map visualization
    // In a real application, you would integrate with a mapping service like Google Maps or Mapbox
    const drawMap = () => {
      const canvas = document.createElement("canvas")
      canvas.width = mapContainer.clientWidth
      canvas.height = 200

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Draw background
      ctx.fillStyle = "#111"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = "#222"
      ctx.lineWidth = 1

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw location marker
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Outer circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, 15, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(34, 211, 238, 0.2)"
      ctx.fill()

      // Inner circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, 7, 0, Math.PI * 2)
      ctx.fillStyle = "#22d3ee"
      ctx.fill()

      // Pulse animation
      let size = 15
      let opacity = 0.2

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Redraw background
        ctx.fillStyle = "#111"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Redraw grid
        ctx.strokeStyle = "#222"

        // Horizontal lines
        for (let y = 0; y < canvas.height; y += 20) {
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(canvas.width, y)
          ctx.stroke()
        }

        // Vertical lines
        for (let x = 0; x < canvas.width; x += 20) {
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x, canvas.height)
          ctx.stroke()
        }

        // Draw pulse
        ctx.beginPath()
        ctx.arc(centerX, centerY, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${opacity})`
        ctx.fill()

        // Draw inner circle
        ctx.beginPath()
        ctx.arc(centerX, centerY, 7, 0, Math.PI * 2)
        ctx.fillStyle = "#22d3ee"
        ctx.fill()

        size += 0.3
        opacity -= 0.005

        if (size > 40) {
          size = 15
          opacity = 0.2
        }

        requestAnimationFrame(animate)
      }

      animate()

      mapContainer.innerHTML = ""
      mapContainer.appendChild(canvas)
    }

    drawMap()

    const handleResize = () => {
      drawMap()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div ref={mapRef} className="w-full h-[200px] rounded-lg overflow-hidden border border-gray-800 bg-black">
      <div className="flex items-center justify-center h-full text-gray-500">Loading map...</div>
    </div>
  )
}


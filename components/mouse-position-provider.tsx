"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface MousePositionContextType {
  x: number
  y: number
}

const MousePositionContext = createContext<MousePositionContextType>({
  x: 0,
  y: 0,
})

export const useMousePosition = () => useContext(MousePositionContext)

interface MousePositionProviderProps {
  children: ReactNode
}

export function MousePositionProvider({ children }: MousePositionProviderProps) {
  const [mousePosition, setMousePosition] = useState<MousePositionContextType>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <MousePositionContext.Provider value={mousePosition}>{children}</MousePositionContext.Provider>
}


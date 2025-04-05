"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect = ({ words, className = "", cursorClassName = "bg-cyan-400" }: TypewriterEffectProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex].text

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1))
        } else {
          setCurrentText(word.substring(0, currentText.length - 1))
        }

        if (!isDeleting && currentText === word) {
          setTimeout(() => setIsDeleting(true), 1500)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentWordIndex((currentWordIndex + 1) % words.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <motion.div
        key={currentWordIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mr-1"
      >
        <span className={words[currentWordIndex].className}>{currentText}</span>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        className={`h-8 w-[2px] ${cursorClassName}`}
      />
    </div>
  )
}


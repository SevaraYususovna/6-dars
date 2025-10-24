"use client"

import { useEffect, useState } from "react"

interface FloatingTerm {
  id: number
  text: string
  left: string
  top: string
  delay: number
  duration: number
}

export default function FloatingTerms() {
  const [terms, setTerms] = useState<FloatingTerm[]>([])

  useEffect(() => {
    const promptTerms = [
      "Chain of Thought",
      "Few-Shot Learning",
      "Zero-Shot",
      "Temperature",
      "Tokens",
      "Context Window",
      "Prompt Optimization",
      "Role Playing",
      "System Prompt",
      "Instruction Tuning",
    ]

    const floatingTerms = promptTerms.map((term, index) => ({
      id: index,
      text: term,
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 60 + 20}%`,
      delay: Math.random() * 2,
      duration: 8 + Math.random() * 4,
    }))

    setTerms(floatingTerms)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {terms.map((term) => (
        <div
          key={term.id}
          className="absolute text-sm font-semibold text-primary/40 whitespace-nowrap animate-pulse"
          style={{
            left: term.left,
            top: term.top,
            animation: `float ${term.duration}s ease-in-out ${term.delay}s infinite`,
          }}
        >
          {term.text}
        </div>
      ))}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-30px) translateX(20px);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  )
}

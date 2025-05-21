"use client"

import { useEffect, useState } from "react"

export function ConfettiAnimation() {
  const [particles, setParticles] = useState<
    Array<{
      id: number
      x: number
      y: number
      size: number
      color: string
      rotation: number
      speed: number
    }>
  >([])

  useEffect(() => {
    // Create confetti particles
    const colors = ["#276EF1", "#2FB157", "#F6B100", "#E60000", "#000000"]
    const newParticles = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -20 - Math.random() * 80, // Start above the viewport
      size: 5 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      speed: 1 + Math.random() * 3,
    }))

    setParticles(newParticles)

    // Animate particles
    const interval = setInterval(() => {
      setParticles(
        (prev) =>
          prev
            .map((particle) => ({
              ...particle,
              y: particle.y + particle.speed,
              rotation: particle.rotation + 2,
            }))
            .filter((particle) => particle.y < 120), // Remove particles that have fallen out of view
      )
    }, 50)

    // Clean up
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            opacity: Math.min(1, (120 - particle.y) / 120), // Fade out as they reach the bottom
            borderRadius: Math.random() > 0.5 ? "50%" : "0%", // Mix of circles and squares
          }}
        />
      ))}
    </div>
  )
}

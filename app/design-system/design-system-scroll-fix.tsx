"use client"

import { useEffect } from "react"

export function DesignSystemScrollFix() {
  useEffect(() => {
    // Add class to html element
    document.documentElement.classList.add("design-system-page")

    // Remove any fixed positioning from body
    document.body.style.position = "static"
    document.body.style.overflow = "auto"
    document.body.style.height = "auto"

    // Remove the class when component unmounts
    return () => {
      document.documentElement.classList.remove("design-system-page")
      // Reset body styles
      document.body.style.removeProperty("position")
      document.body.style.removeProperty("overflow")
      document.body.style.removeProperty("height")
    }
  }, [])

  return null
}

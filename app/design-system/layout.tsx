"use client"

import { DesignSystemScrollFix } from "./design-system-scroll-fix"
import type React from "react"

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="design-system-container">
      <DesignSystemScrollFix />
      {children}
      <style jsx global>{`
        /* Reset all fixed positioning and overflow for design system */
        html.design-system-page, 
        html.design-system-page body {
          position: static !important;
          overflow: auto !important;
          height: auto !important;
          min-height: 100% !important;
        }
        
        .design-system-container {
          min-height: 100vh;
          width: 100%;
          position: relative;
          overflow-y: auto;
        }

        /* Override modal styles for design system */
        html.design-system-page .mx-auto.h-\\[90vh\\].w-full.max-w-\\[365px\\] {
          height: auto !important;
          max-width: 100% !important;
          width: 100% !important;
          overflow: visible !important;
          box-shadow: none !important;
          border-radius: 0 !important;
        }
      `}</style>
    </div>
  )
}

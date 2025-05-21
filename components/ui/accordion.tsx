"use client"

import { useState, type ReactNode } from "react"

interface AccordionProps {
  title: string
  subtitle?: string
  icon?: ReactNode
  children: ReactNode
  defaultOpen?: boolean
}

export function Accordion({ title, subtitle, icon, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-uber-gray-200">
      <div
        className="w-full flex items-center py-4 px-4 cursor-pointer text-left"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(!isOpen)
            e.preventDefault()
          }
        }}
      >
        {icon && <div className="mr-4 flex-shrink-0">{icon}</div>}
        <div className="flex-1">
          <h3 className="text-base font-medium text-black font-['Uber_Move_Text']">{title}</h3>
          {subtitle && <p className="text-sm text-uber-gray-500">{subtitle}</p>}
        </div>
        <div className="flex items-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SiznqOPVVSmmARELAIV7Me47rLPLul.png"
            alt="chevron"
            className={`w-3 h-3 transition-transform duration-200 ${
              isOpen ? "transform rotate-270" : "transform rotate-90"
            }`}
          />
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-200 px-4 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}>
        {children}
      </div>
    </div>
  )
}

// These components are kept for compatibility but not used in this implementation
export function AccordionItem({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

export function AccordionTrigger({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

export function AccordionContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}

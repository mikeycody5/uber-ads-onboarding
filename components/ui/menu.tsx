"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface MenuOption {
  label: string
  value: string
  disabled?: boolean
}

interface MenuHeader {
  type: "header"
  label: string
}

interface MenuDivider {
  type: "divider"
}

type MenuItem = MenuOption | MenuHeader | MenuDivider

interface MenuProps {
  trigger: React.ReactNode
  items: MenuItem[]
  onSelect?: (value: string) => void
  className?: string
  align?: "left" | "right"
  width?: number | string
}

export function Menu({ trigger, items, onSelect, className = "", align = "left", width = 240 }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        triggerRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSelect = (option: MenuOption) => {
    if (option.disabled) return
    if (onSelect) onSelect(option.value)
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <div ref={triggerRef} onClick={toggleMenu} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute z-50 mt-2 bg-white rounded-lg shadow-lg overflow-hidden"
          style={{
            width: typeof width === "number" ? `${width}px` : width,
            [align === "left" ? "left" : "right"]: 0,
          }}
        >
          <div className="max-h-60 overflow-y-auto py-1">
            {items.map((item, index) => {
              if ("type" in item) {
                if (item.type === "header") {
                  return (
                    <div key={`header-${index}`} className="px-4 py-2 text-sm text-uber-gray-500 font-medium">
                      {item.label}
                    </div>
                  )
                }
                if (item.type === "divider") {
                  return <hr key={`divider-${index}`} className="my-1 border-uber-gray-200" />
                }
                return null
              }

              return (
                <div
                  key={`option-${item.value}`}
                  className={`px-4 py-3 text-sm cursor-pointer ${
                    item.disabled ? "text-uber-gray-400 cursor-not-allowed" : "text-uber-gray-900 hover:bg-uber-gray-50"
                  }`}
                  onClick={() => !item.disabled && handleSelect(item)}
                >
                  {item.label}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export function MenuTrigger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {children}
      <ChevronDown className="ml-2 h-4 w-4" />
    </div>
  )
}

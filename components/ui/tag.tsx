import type { ReactNode } from "react"

interface TagProps {
  children: ReactNode
  color?: "default" | "green" | "yellow" | "red" | "blue"
  size?: "small" | "medium"
  className?: string
}

export function Tag({ children, color = "default", size = "small", className = "" }: TagProps) {
  const colorClasses = {
    default: "bg-uber-gray-100 text-uber-gray-700",
    green: "bg-uber-green bg-opacity-10 text-uber-green",
    yellow: "bg-uber-yellow bg-opacity-10 text-uber-yellow",
    red: "bg-uber-red bg-opacity-10 text-uber-red",
    blue: "bg-[#276EF1] bg-opacity-10 text-[#276EF1]",
  }

  const sizeClasses = {
    small: "text-xs py-0.5 px-2",
    medium: "text-sm py-1 px-3",
  }

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium
        ${colorClasses[color]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}

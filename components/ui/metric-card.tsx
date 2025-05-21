import type { ReactNode } from "react"

interface MetricCardProps {
  title: string
  value: string | number
  icon?: ReactNode
  trend?: {
    value: string | number
    positive?: boolean
  }
  className?: string
}

export function MetricCard({ title, value, icon, trend, className = "" }: MetricCardProps) {
  return (
    <div className={`bg-white border border-uber-gray-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="uber-paragraph-3 text-uber-gray-500">{title}</h3>
        {icon && <div className="text-uber-gray-500">{icon}</div>}
      </div>
      <div className="flex items-end justify-between">
        <div className="uber-heading-3">{value}</div>
        {trend && (
          <div className={`flex items-center uber-paragraph-3 ${trend.positive ? "text-uber-green" : "text-uber-red"}`}>
            {trend.positive ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path d="M7 14l5-5 5 5H7z" fill="currentColor" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
              </svg>
            )}
            {trend.value}
          </div>
        )}
      </div>
    </div>
  )
}

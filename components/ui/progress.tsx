interface ProgressProps {
  value: number
  max?: number
  color?: "black" | "green" | "yellow" | "red" | "blue"
  size?: "small" | "medium" | "large"
  showLabel?: boolean
  label?: string
}

export function Progress({
  value,
  max = 100,
  color = "black",
  size = "medium",
  showLabel = false,
  label,
  ...props
}: ProgressProps) {
  // Calculate percentage
  const percentage = Math.round((value / max) * 100)

  // Determine height based on size
  const heightClass = size === "small" ? "h-1" : size === "large" ? "h-3" : "h-2"

  // Determine color class
  const colorClass =
    color === "green"
      ? "bg-uber-green"
      : color === "yellow"
        ? "bg-uber-yellow"
        : color === "red"
          ? "bg-uber-red"
          : color === "blue"
            ? "bg-[#276EF1]"
            : "bg-uber-black"

  return (
    <div className="w-full" {...props}>
      <div className="flex justify-between items-center mb-1">
        {label && <span className="uber-paragraph-3 text-uber-gray-700">{label}</span>}
        {showLabel && <span className="uber-paragraph-3 text-uber-gray-700">{percentage}%</span>}
      </div>
      <div className={`w-full bg-uber-gray-200 rounded-full overflow-hidden`}>
        <div
          className={`${heightClass} ${colorClass} rounded-full`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  )
}

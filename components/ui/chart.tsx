"use client"

import * as React from "react"
import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<keyof typeof THEMES, string> })
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ReactNode
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        {children}
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, config]) => config.theme || config.color)

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-tooltip">{children}</div>
}

const ChartTooltipContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-tooltip-content">{children}</div>
}

const ChartLegend = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-legend">{children}</div>
}

const ChartLegendContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="chart-legend-content">{children}</div>
}

interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    color: string
    borderWidth?: number
    tension?: number
    pointRadius?: number
    pointHoverRadius?: number
    fill?: boolean
    backgroundColor?: string
  }[]
  options?: any
}

interface ChartProps {
  data: ChartData
  type: "bar" | "line"
  height?: number
  className?: string
}

export function Chart({ data, type, height = 200, className = "" }: ChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set up high DPI canvas for better quality
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()

    canvas.width = rect.width * dpr
    canvas.height = height * dpr
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${height}px`

    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Calculate chart dimensions
    const chartWidth = rect.width - 60 // Left padding for y-axis labels
    const chartHeight = height - 40 // Bottom padding for x-axis labels
    const chartTop = 20
    const chartLeft = 50

    // Find max value for scaling
    const maxValue = Math.max(...data.datasets.flatMap((dataset) => dataset.data), 0) * 1.1 // Add 10% padding

    // Draw y-axis
    ctx.beginPath()
    ctx.moveTo(chartLeft, chartTop)
    ctx.lineTo(chartLeft, chartTop + chartHeight)
    ctx.strokeStyle = "#E2E2E2"
    ctx.stroke()

    // Draw x-axis
    ctx.beginPath()
    ctx.moveTo(chartLeft, chartTop + chartHeight)
    ctx.lineTo(chartLeft + chartWidth, chartTop + chartHeight)
    ctx.strokeStyle = "#E2E2E2"
    ctx.stroke()

    // Draw y-axis labels and grid lines
    const yAxisSteps = 5
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"
    ctx.font = "10px 'Uber Move Text', sans-serif"
    ctx.fillStyle = "#757575"

    for (let i = 0; i <= yAxisSteps; i++) {
      const y = chartTop + chartHeight - (i / yAxisSteps) * chartHeight
      const value = (i / yAxisSteps) * maxValue

      // Draw grid line
      ctx.beginPath()
      ctx.moveTo(chartLeft, y)
      ctx.lineTo(chartLeft + chartWidth, y)
      ctx.strokeStyle = "#F6F6F6"
      ctx.stroke()

      // Draw label
      ctx.fillText(Math.round(value).toString(), chartLeft - 10, y)
    }

    // Draw x-axis labels
    const barWidth = chartWidth / data.labels.length
    ctx.textAlign = "center"
    ctx.textBaseline = "top"

    data.labels.forEach((label, i) => {
      const x = chartLeft + i * barWidth + barWidth / 2
      ctx.fillText(label, x, chartTop + chartHeight + 10)
    })

    // Draw datasets
    data.datasets.forEach((dataset) => {
      if (type === "bar") {
        // Draw bars
        const barPadding = barWidth * 0.2
        const actualBarWidth = barWidth - barPadding * 2

        ctx.fillStyle = dataset.color

        dataset.data.forEach((value, i) => {
          const barHeight = (value / maxValue) * chartHeight
          const x = chartLeft + i * barWidth + barPadding
          const y = chartTop + chartHeight - barHeight

          // Draw bar with rounded top
          ctx.beginPath()
          ctx.moveTo(x, chartTop + chartHeight)
          ctx.lineTo(x, y + 3)
          ctx.quadraticCurveTo(x, y, x + 3, y)
          ctx.lineTo(x + actualBarWidth - 3, y)
          ctx.quadraticCurveTo(x + actualBarWidth, y, x + actualBarWidth, y + 3)
          ctx.lineTo(x + actualBarWidth, chartTop + chartHeight)
          ctx.closePath()
          ctx.fill()
        })
      } else if (type === "line") {
        // Create gradient for area under line if fill is true
        if (dataset.fill && dataset.backgroundColor) {
          const gradient = ctx.createLinearGradient(0, chartTop, 0, chartTop + chartHeight)
          gradient.addColorStop(0, dataset.backgroundColor)
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
          ctx.fillStyle = gradient
        }

        // Draw line with smooth curves
        ctx.beginPath()

        // Start path at the first point
        const firstX = chartLeft + barWidth / 2
        const firstY = chartTop + chartHeight - (dataset.data[0] / maxValue) * chartHeight
        ctx.moveTo(firstX, firstY)

        // For each subsequent point, create a smooth curve
        for (let i = 1; i < dataset.data.length; i++) {
          const x = chartLeft + i * barWidth + barWidth / 2
          const y = chartTop + chartHeight - (dataset.data[i] / maxValue) * chartHeight
          const prevX = chartLeft + (i - 1) * barWidth + barWidth / 2
          const prevY = chartTop + chartHeight - (dataset.data[i - 1] / maxValue) * chartHeight

          // Control points for the curve
          const cpX1 = prevX + (x - prevX) / 3
          const cpY1 = prevY
          const cpX2 = x - (x - prevX) / 3
          const cpY2 = y

          ctx.bezierCurveTo(cpX1, cpY1, cpX2, cpY2, x, y)
        }

        // If fill is enabled, complete the path to create an area
        if (dataset.fill) {
          const lastX = chartLeft + (dataset.data.length - 1) * barWidth + barWidth / 2
          ctx.lineTo(lastX, chartTop + chartHeight)
          ctx.lineTo(firstX, chartTop + chartHeight)
          ctx.closePath()
          ctx.fill()
        }

        // Draw the line
        ctx.strokeStyle = dataset.color
        ctx.lineWidth = dataset.borderWidth || 2
        ctx.lineJoin = "round"
        ctx.lineCap = "round"
        ctx.stroke()

        // Draw points
        dataset.data.forEach((value, i) => {
          const x = chartLeft + i * barWidth + barWidth / 2
          const y = chartTop + chartHeight - (value / maxValue) * chartHeight

          ctx.beginPath()
          ctx.arc(x, y, dataset.pointRadius || 4, 0, Math.PI * 2)
          ctx.fillStyle = "white"
          ctx.fill()
          ctx.strokeStyle = dataset.color
          ctx.lineWidth = 2
          ctx.stroke()
        })
      }
    })

    // Draw legend
    const legendY = 10
    let legendX = chartLeft

    data.datasets.forEach((dataset) => {
      // Draw color box
      ctx.fillStyle = dataset.color
      ctx.fillRect(legendX, legendY, 10, 10)

      // Draw label
      ctx.fillStyle = "#333333"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(dataset.label, legendX + 15, legendY + 5)

      legendX += ctx.measureText(dataset.label).width + 30
    })
  }, [data, type, height])

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="w-full" style={{ height: `${height}px` }} />
    </div>
  )
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle }

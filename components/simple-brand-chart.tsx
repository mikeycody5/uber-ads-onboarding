"use client"

import { useEffect, useRef } from "react"

interface ChartProps {
  data: Array<{
    name: string
    Pay: number
    Hours: number
    Location: number
    total: number
    logo: string
  }>
}

export default function SimpleBrandChart({ data }: ChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Get device pixel ratio
    const dpr = window.devicePixelRatio || 1

    // Set canvas dimensions accounting for device pixel ratio
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr

    // Scale all drawing operations by the device pixel ratio
    ctx.scale(dpr, dpr)

    // Set the CSS dimensions
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Chart dimensions
    const chartWidth = rect.width - 60
    const chartHeight = rect.height - 100
    const chartTop = 20
    const chartLeft = 40

    // Enable antialiasing
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(chartLeft, chartTop)
    ctx.lineTo(chartLeft, chartTop + chartHeight)
    ctx.lineTo(chartLeft + chartWidth, chartTop + chartHeight)
    ctx.strokeStyle = "#ccc"
    ctx.lineWidth = 1
    ctx.stroke()

    // Draw bars and logos
    const barWidth = chartWidth / data.length / 1.5
    const barSpacing = chartWidth / data.length

    data.forEach((item, index) => {
      const x = chartLeft + index * barSpacing + barSpacing / 2 - barWidth / 2

      // Draw stacked bar
      let currentHeight = 0

      // Pay segment
      const payHeight = (item.Pay / 100) * chartHeight
      ctx.fillStyle = "#4285F4"
      ctx.fillRect(x, chartTop + chartHeight - payHeight, barWidth, payHeight)
      currentHeight += payHeight

      // Hours segment
      const hoursHeight = (item.Hours / 100) * chartHeight
      ctx.fillStyle = "#34A853"
      ctx.fillRect(x, chartTop + chartHeight - currentHeight - hoursHeight, barWidth, hoursHeight)
      currentHeight += hoursHeight

      // Location segment
      const locationHeight = (item.Location / 100) * chartHeight
      ctx.fillStyle = "#FBBC05"
      ctx.fillRect(x, chartTop + chartHeight - currentHeight - locationHeight, barWidth, locationHeight)

      // Draw company name
      ctx.fillStyle = "#333"
      ctx.font = "12px 'Uber Move', Arial"
      ctx.textAlign = "center"
      ctx.fillText(item.name, x + barWidth / 2, chartTop + chartHeight + 20)

      // Load and draw logo
      const logo = new Image()
      logo.onload = () => {
        const logoSize = 30
        ctx.drawImage(logo, x + barWidth / 2 - logoSize / 2, chartTop + chartHeight + 30, logoSize, logoSize)
      }
      logo.src = item.logo
      logo.crossOrigin = "anonymous"
    })

    // Draw y-axis labels
    ctx.fillStyle = "#666"
    ctx.font = "10px 'Uber Move', Arial"
    ctx.textAlign = "right"

    for (let i = 0; i <= 100; i += 20) {
      const y = chartTop + chartHeight - (i / 100) * chartHeight
      ctx.fillText(i.toString(), chartLeft - 5, y + 3)
    }
  }, [data])

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" style={{ imageRendering: "high-quality" }} />
    </div>
  )
}

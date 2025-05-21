"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

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

export default function BrandMatchChart({ data }: ChartProps) {
  // Create a completely different custom tick component
  const CustomXAxisTick = ({ x, y, payload }: any) => {
    const brand = data.find((item) => item.name === payload.value)
    if (!brand) return null

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">
          {brand.name}
        </text>
        <image
          x={-16}
          y={20}
          width={32}
          height={32}
          xlinkHref={brand.logo}
          textAnchor="middle"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    )
  }

  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 70 }} barSize={40}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={<CustomXAxisTick />} height={70} />
          <YAxis axisLine={false} tickLine={false} domain={[0, 100]} />
          <Bar dataKey="Pay" stackId="a" fill="#4285F4" />
          <Bar dataKey="Hours" stackId="a" fill="#34A853" />
          <Bar dataKey="Location" stackId="a" fill="#FBBC05" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

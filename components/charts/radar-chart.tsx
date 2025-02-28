"use client"

import { ResponsiveRadar } from "@nivo/radar"

interface RadarChartProps {
  data: Array<{
    category: string
    current: number
    previous: number
  }>
}

export function RadarChart({ data }: RadarChartProps) {
  const chartData = data.map((item) => ({
    category: item.category,
    "Current Quarter": item.current,
    "Previous Quarter": item.previous,
  }))

  return (
    <div style={{ height: "400px" }}>
      <ResponsiveRadar
        data={chartData}
        keys={["Current Quarter", "Previous Quarter"]}
        indexBy="category"
        valueFormat=">-.2f"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: "color" }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        colors={{ scheme: "category10" }}
        blendMode="multiply"
        motionConfig="wobbly"
        theme={{
          background: "transparent",
          text: {
            fill: "#94a3b8",
            fontSize: 11,
          },
          axis: {
            domain: {
              line: {
                stroke: "#64748b",
                strokeWidth: 1,
              },
            },
            ticks: {
              line: {
                stroke: "#64748b",
                strokeWidth: 1,
              },
            },
          },
          grid: {
            line: {
              stroke: "#475569",
              strokeWidth: 1,
            },
          },
        }}
      />
    </div>
  )
}

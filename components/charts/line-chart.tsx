"use client"

import { ResponsiveLine } from "@nivo/line"

interface LineChartProps {
  data: Array<Record<string, number | string>>
}

export function LineChart({ data }: LineChartProps) {
  const chartData = [
    {
      id: "values",
      data: data.map((d) => ({
        x: Object.values(d)[0],
        y: Object.values(d)[1],
      })),
    },
  ]

  return (
    <div style={{ height: "400px" }}>
      <ResponsiveLine
        data={chartData}
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        theme={{
          background: "transparent",
          textColor: "#94a3b8",
          fontSize: 11,
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

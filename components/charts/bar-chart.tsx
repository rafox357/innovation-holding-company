"use client"

import { ResponsiveBar } from "@nivo/bar"

interface BarChartProps {
  data: Array<Record<string, number | string>>
}

export function BarChart({ data }: BarChartProps) {
  return (
    <div style={{ height: "400px" }}>
      <ResponsiveBar
        data={data}
        keys={Object.keys(data[0]).filter((key) => typeof data[0][key] === "number")}
        indexBy={Object.keys(data[0]).find((key) => typeof data[0][key] === "string") || ""}
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        colors={{ scheme: "category10" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
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
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
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

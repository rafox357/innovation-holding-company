'use client';

import { memo } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

type DataItem = { name: string; value: number };

interface KPIChartProps {
  data: ReadonlyArray<DataItem> | Array<DataItem>;
  type?: 'line' | 'bar';
}

// Memoize the tooltip component for better performance
const CustomTooltip = memo(({ active, payload, label }: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload?.length) return null;
  
  return (
    <div className="cosmic-card p-2 shadow-lg">
      <p className="text-sm font-medium">{label}</p>
      <p className="text-sm text-muted-foreground">
        {payload[0].value}
      </p>
    </div>
  );
});
CustomTooltip.displayName = 'CustomTooltip';

// Memoize the entire chart component
export const KPIChart = memo(function KPIChart({ data, type = 'line' }: KPIChartProps) {
  const ChartComponent = type === 'line' ? LineChart : BarChart;
  const DataComponent = type === 'line' ? Line : Bar;

  return (
    <div 
      className="h-[300px] w-full"
      role="img"
      aria-label={`${type === 'line' ? 'Line' : 'Bar'} chart showing KPI`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <ChartComponent data={[...data]}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted/20" />
          <XAxis
            dataKey="name"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <DataComponent
            type={type === 'line' ? "monotone" : undefined}
            dataKey="value"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            fill={type === 'line' ? "url(#colorValue)" : "hsl(var(--primary))"}
            fillOpacity={type === 'line' ? 0.2 : 0.8}
            dot={type === 'line' ? {
              fill: "hsl(var(--background))",
              strokeWidth: 2,
              r: 4,
            } : false}
          />
        </ChartComponent>
      </ResponsiveContainer>
      <div className="sr-only">
        <table>
          <caption>KPI Data</caption>
          <thead>
            <tr>
              <th scope="col">Period</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.name}>
                <th scope="row">{item.name}</th>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

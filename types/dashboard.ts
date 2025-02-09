export interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down';
  className?: string;
}

export interface KPIChartProps {
  title: string;
  data: any[];
  type?: 'line' | 'bar';
  dataKey: string;
  className?: string;
}

export interface DashboardMetric {
  id: string;
  title: string;
  value: number | string;
  change?: number;
  trend?: 'up' | 'down';
  chartData?: any[];
}

export interface DashboardSection {
  id: string;
  title: string;
  metrics: DashboardMetric[];
}

export type DashboardView = 
  | 'financial'
  | 'customer'
  | 'marketing'
  | 'operations'
  | 'hr'
  | 'rd'
  | 'technology'
  | 'sustainability'
  | 'project'
  | 'quality'
  | 'supply'
  | 'risk';

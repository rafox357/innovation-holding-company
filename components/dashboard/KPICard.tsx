import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KPICardProps } from "@/types/dashboard";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function KPICard({ title, value, change, trend, className }: KPICardProps) {
  const trendText = trend === "up" ? "Increased by" : "Decreased by";
  const ariaLabel = `${title}: ${value}${change ? `, ${trendText} ${Math.abs(change)}%` : ""}`;

  return (
    <Card 
      className={cn("hover:shadow-lg transition-shadow", className)}
      role="region"
      aria-label={ariaLabel}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <span id={`${title}-label`}>{title}</span>
        </CardTitle>
        {trend && (
          <div 
            className={cn(
              "flex items-center gap-1 text-xs font-medium",
              trend === "up" ? "text-green-600" : "text-red-600"
            )}
            aria-live="polite"
            aria-atomic="true"
          >
            {trend === "up" ? (
              <ArrowUpIcon className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ArrowDownIcon className="h-4 w-4" aria-hidden="true" />
            )}
            <span aria-label={`${trendText} ${Math.abs(change || 0)}%`}>
              {Math.abs(change || 0)}%
            </span>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div 
          className="text-2xl font-bold"
          aria-labelledby={`${title}-label`}
        >
          {value}
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import { ReactNode } from "react";
import { Breadcrumb } from "./breadcrumb";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  breadcrumbItems?: Array<{ title: string; href: string }>;
  className?: string;
}

export function PageHeader({
  title,
  description,
  children,
  breadcrumbItems,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-0.5">
        <Breadcrumb items={breadcrumbItems} className="mb-6" />
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground">{description}</p>
        )}
      </div>
      {children && <div className="flex items-center gap-4">{children}</div>}
    </div>
  );
}

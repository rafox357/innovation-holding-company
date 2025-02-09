import type { ReactNode } from "react"
import { BlueprintSearch } from "./blueprint-search"
import { PageFeedback } from "./page-feedback"

interface BlueprintLayoutProps {
  children: ReactNode
}

export function BlueprintLayout({ children }: BlueprintLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <main id="main-content" className="p-6" role="main" aria-label="Main content">
        <div className="mb-12">
          <BlueprintSearch />
        </div>
        {children}
        <div className="mt-12">
          <PageFeedback />
        </div>
      </main>
    </div>
  )
}


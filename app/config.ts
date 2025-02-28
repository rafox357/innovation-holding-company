// This configuration applies to all routes unless overridden
export const dynamic = 'force-static' // All routes are static by default
export const revalidate = 3600 // Revalidate static pages every hour
export const dynamicParams = false // Only generate static params from generateStaticParams

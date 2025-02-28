import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Observatory | Hubverse",
  description: "Access project management resources and tools.",
};

export default function ResourcesLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return <>{children}</>;
}

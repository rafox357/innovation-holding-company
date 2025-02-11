// This is a Server Component by default
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Foundry | Innovation Hub",
  description: "Innovation research and development center",
};

export default function FoundryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

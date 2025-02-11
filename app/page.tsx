import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Innovative Holding Company | Leading the Future",
  description: "A visionary holding company pioneering innovation across multiple industries through strategic investments and technological advancement.",
};

export default function Home() {
  return <HomeContent />;
}

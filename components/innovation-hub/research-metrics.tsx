"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const publicationData: ChartData<"line"> = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Publications",
      data: [4, 6, 8, 5, 10, 12],
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Citations",
      data: [10, 15, 20, 25, 30, 40],
      borderColor: "rgb(255, 99, 132)",
      tension: 0.1,
    },
  ],
};

const projectData: ChartData<"bar"> = {
  labels: ["Quantum Computing", "AI Ethics", "Energy Storage", "Biotech", "Robotics"],
  datasets: [
    {
      label: "Active Projects",
      data: [4, 3, 2, 3, 1],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "Completed Projects",
      data: [2, 1, 1, 0, 2],
      backgroundColor: "rgba(153, 102, 255, 0.5)",
    },
  ],
};

const fundingData: ChartData<"line"> = {
  labels: ["2020", "2021", "2022", "2023", "2024"],
  datasets: [
    {
      label: "Research Funding (Millions $)",
      data: [2.5, 3.2, 4.0, 4.8, 5.5],
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
      fill: true,
      backgroundColor: "rgba(75, 192, 192, 0.1)",
    },
  ],
};

const chartOptions: ChartOptions<"line" | "bar"> = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export function ResearchMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Research Metrics</CardTitle>
        <CardDescription>
          Key performance indicators and research output metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="publications" className="space-y-4">
          <TabsList>
            <TabsTrigger value="publications">Publications & Citations</TabsTrigger>
            <TabsTrigger value="projects">Projects by Domain</TabsTrigger>
            <TabsTrigger value="funding">Research Funding</TabsTrigger>
          </TabsList>
          <TabsContent value="publications">
            <div className="h-[400px]">
              <Line data={publicationData} options={chartOptions} />
            </div>
          </TabsContent>
          <TabsContent value="projects">
            <div className="h-[400px]">
              <Bar data={projectData} options={chartOptions} />
            </div>
          </TabsContent>
          <TabsContent value="funding">
            <div className="h-[400px]">
              <Line data={fundingData} options={chartOptions} />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

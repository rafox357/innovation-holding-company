"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ApiDemo() {
  const [endpoint, setEndpoint] = useState("");
  const [method, setMethod] = useState("GET");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    try {
      setLoading(true);
      const res = await fetch(endpoint, { method });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: "Failed to fetch data" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="endpoint">API Endpoint</Label>
        <Input
          id="endpoint"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          placeholder="Enter API endpoint"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="method">Method</Label>
        <select
          id="method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
      <Button onClick={handleTest} disabled={loading}>
        {loading ? "Testing..." : "Test Endpoint"}
      </Button>
      {response && (
        <Card className="p-4">
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(response, null, 2)}
          </pre>
        </Card>
      )}
    </div>
  );
}

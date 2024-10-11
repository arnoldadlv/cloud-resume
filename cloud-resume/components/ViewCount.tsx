// components/ViewCount.tsx
"use client";

import { useEffect, useState } from "react";

export default function ViewCount() {
  const [viewCount, setViewCount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchViewCount() {
      try {
        const response = await fetch(
          "http://192.168.0.192:7071/api/queryTable"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch view count.");
        }
        const data = await response.text();
        // Extract the actual count from the response
        const countMatch = data.match(/count: (\d+)/);
        const count = countMatch ? countMatch[1] : "N/A";
        setViewCount(count);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        console.error("Error fetching view counts", err);
      }
    }
    fetchViewCount();
  }, []);

  if (error) {
    return <span>Error: {error}</span>;
  }

  return <span>{viewCount ? viewCount : "Loading..."}</span>;
}

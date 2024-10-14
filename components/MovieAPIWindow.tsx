"use client";

import { useEffect, useState } from "react";

export default function MoviesAPIWindow() {
  const [apiView, setAPIView] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAPIView() {
      try {
        const response = await fetch(
          "https://favmoviesapi.azurewebsites.net/api/GetMovie?id=1"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch view count.");
        }
        const data = await response.json();
        // Extract the actual count from the response
        setAPIView(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        console.error("Error fetching API View", err);
      }
    }
    fetchAPIView();
  }, []);

  if (error) {
    return <span>Error: {error}</span>;
  }

  return (
    <pre className="text-xs text-start whitespace-normal overflow-auto md:text-lg">
      {apiView ? JSON.stringify(apiView, null, 2) : "Loading..."}
    </pre>
  );
}

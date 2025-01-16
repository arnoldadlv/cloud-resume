"use client";

import { useEffect } from "react";
import trackVisit from "@/utils/trackVisit";

export default function VisitTracker() {
  useEffect(() => {
    trackVisit();
  }, []);

  return null; // This component doesn't render anything
}

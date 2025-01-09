"use client";
import React from "react";
import CaseStudyCard from "@/components/CaseStudyCard";

const caseStudies = [
  {
    id: "cloud-migration",
    title: "Cloud Migration Case Study",
    imgURL: "/cloud-migration.jpeg",
    imgAlt: "Cloud Migration Project",
  },
];

export default function CaseStudies() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects and learn how we've helped
            businesses transform their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              id={study.id}
              imgAlt={study.imgAlt}
              imgURL={study.imgURL}
              title={study.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
// CaseStudyCard.tsx
import React from "react";
import { Card, CardFooter, Image } from "@heroui/react";
import Link from "next/link";

interface CaseStudyCardProps {
  imgAlt: string;
  imgURL: string;
  title: string;
  id: string;
  objectPosition?: string;
}

const CaseStudyCard = ({
  imgAlt,
  imgURL,
  title,
  id,
  objectPosition = "center",
}: CaseStudyCardProps) => {
  return (
    <Link href={`/case-studies/${id}`}>
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt={imgAlt}
          className="object-cover w-full h-full"
          src={imgURL}
          style={{ objectPosition: objectPosition }}
        />
        <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">{title}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CaseStudyCard;

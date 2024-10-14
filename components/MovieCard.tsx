"use client";
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

interface MovieCardProps {
  imgAlt: string;
  imgURL: string;
  buttonText: string;
  movieTitle: string;
  objectPosition?: string;
}

const MovieCard = ({
  imgAlt,
  imgURL,
  movieTitle,
  objectPosition = "center",
}: MovieCardProps) => {
  return (
    <div>
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          alt={imgAlt}
          className="object-cover"
          height={250}
          src={imgURL}
          width={250}
          style={{ objectPosition: objectPosition }}
        />
        <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">{movieTitle}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MovieCard;

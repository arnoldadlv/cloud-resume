"use client";
import MovieCard from "@/components/MovieCard";
import React, { useEffect, useState } from "react";

// Define the structure of a Movie
interface Movie {
  imgURL: string; // This will correspond to posterURL
  imgAlt: string; // You can set a default value or modify based on your needs
  buttonText: string; // Button text to show
}

const MoviesAPI = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // Fetch data from your API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT_HERE");
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();

        // Map the API response to the Movie interface
        const mappedMovies: Movie[] = data.map((movie: any) => ({
          imgURL: movie.posterURL, // Map the API's posterURL field to imgURL
          imgAlt: movie.Title, // You can use the Title as imgAlt or set a default
          cardHeader: movie.Title,
          cardDescription: `Genre: ${movie.Genre} | Release Year: ${movie.ReleaseYear}`, // Construct a description
          cardFooter: `Release Year: ${movie.ReleaseYear}`, // Use ReleaseYear for the footer
          buttonText: "Notify me", // Static text or can be dynamic based on your requirements
        }));

        setMovies(mappedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-8">
      {movies.map((movie, index) => (
        <div key={index}>
          <MovieCard
            imgAlt={movie.imgAlt}
            imgURL={movie.imgURL}
            buttonText={movie.buttonText}
          />
        </div>
      ))}
    </div>
  );
};

export default MoviesAPI;

// app/movies-api/page.tsx
import MovieCard from "@/components/MovieCard";
import { title, subtitle } from "@/components/primitives";

// Define the structure of a Movie
interface Movie {
  imgURL: string;
  imgAlt: string;
  buttonText: string;
  movieTitle: string;
}

export default async function MoviesAPI() {
  try {
    // IDs correlate to IDs in Azure Table, example: Movie 1, movie 2, etc.
    const movieIDs = [1, 2, 3, 4, 5, 6];
    console.log("Movie IDs: ", movieIDs);

    const fetchPromises = movieIDs.map((id) =>
      fetch(`http://localhost:7071/api/GetMovie?id=${id}`)
        .then((res) => {
          if (res.ok) {
            console.log("Success");
            return res.json();
          } else {
            console.log("Fetch not successful");
          }
        })
        .then((data) => {
          console.log(data);
          return data;
        })
    );

    const allMovieData = await Promise.all(fetchPromises);
    console.log(allMovieData);

    // Maps the API response to the Movie interface

    const movieData = allMovieData.map((movie) => ({
      imgURL: movie.coverURL,
      imgAlt: movie.Title,
      buttonText: "Notify me",
      movieTitle: movie.Title,
    }));

    return (
      <div className="flex flex-col justify-center items-center max-wscreen-lg mx-auto">
        <span className={`${title()} mb-4`}>Favorite Movies</span>
        <span className={`${subtitle()} mb-4`}>
          Here are a list of my favorite movies. This data was fetched using the
          API I created with Azure Functions.
        </span>

        <div className="grid gap-8 md:grid-cols-3 items-center text-center">
          {movieData.map((movie, index) => (
            <div key={index}>
              <div>
                <MovieCard
                  imgAlt={movie.imgAlt}
                  imgURL={movie.imgURL}
                  buttonText={movie.buttonText}
                  movieTitle={movie.movieTitle}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching movies:", error);
    return <div>Error fetching movies.</div>;
  }
}

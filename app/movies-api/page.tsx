import AnimatedElement from "@/components/AnimatedElement";
import MoviesAPIWindow from "@/components/MovieAPIWindow";
import MovieCard from "@/components/MovieCard";
import { title, subtitle } from "@/components/primitives";

// Defines the structure of a Movie (based off our API response)
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
      fetch(`https://favmoviesapi.azurewebsites.net/api/getmovie?id=${id}`)
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
    const movieData = allMovieData.map((movie, index) => ({
      imgURL: movie.coverURL,
      imgAlt: movie.Title,
      buttonText: "Notify me",
      movieTitle: movie.Title,
      objectPosition: determineObjectPosition(movieIDs[index]),
    }));
    console.log(movieData);

    return (
      <section className="w-full flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="w-full flex flex-col justify-center items-center max-w-screen-lg x-aumto">
          <AnimatedElement>
            <span className={`${title()} mb-4`}>Favorite Movies</span>
          </AnimatedElement>
          <AnimatedElement>
            <span className={`${subtitle()} mb-4 text-center`}>
              Here are a list of my favorite movies. This data was fetched using
              the API I created with Azure Functions. Below is a live response
              from the API hosted in Azure.
            </span>
          </AnimatedElement>

          <div className="w-full flex justify-center items-center max-w-lg mx-auto text-start light:bg-base-300">
            <div className="mockup-browser light:bg-base-300 border overflow-auto max-w-fulls">
              <AnimatedElement>
                <div className="mockup-browser-toolbar">
                  <div className="input text-white">
                    https://arnolddelavega.com
                  </div>
                </div>

                <div className="flex justify-center text-xs px-4 py-8 light:bg-color">
                  <MoviesAPIWindow />
                </div>
              </AnimatedElement>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3 items-center text-center mt-8">
            {movieData.map((movie, index) => (
              <div key={index}>
                <AnimatedElement>
                  <div>
                    <MovieCard
                      imgAlt={movie.imgAlt}
                      imgURL={movie.imgURL}
                      buttonText={movie.buttonText}
                      movieTitle={movie.movieTitle}
                      objectPosition={movie.objectPosition}
                    />
                  </div>
                </AnimatedElement>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching movies:", error);
    return <div>Error fetching movies.</div>;
  }

  function determineObjectPosition(movieID: number): string {
    switch (movieID) {
      case 1:
        return "center";
      case 2:
        return "top";
      case 3:
        return "top";
      case 4:
        return "top";
      case 5:
        return "top";
      case 6:
        return "top";
      default:
        return "center";
    }
  }
}

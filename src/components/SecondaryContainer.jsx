import { useSelector } from "react-redux";
import MovieLsit from "./MovieList";
import { IMG_CDN_URL } from "../utils/constants";

const SecondartContainer = () => {
  //   const movies = useSelector((store) => store.movies);
  //   if (!movies) return;
  //   // const posterPath = movies.nowPlayingMovies[0].poseter_path;
  //   console.log(movies[0].nowPlayingMovies);

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  // const posterImg = movies[0];
  // const { original_title, overview, id } = mainMovie; // Destructure from mainMovie
  // console.log(posterImg.poster_path);

  return (
    <div className="bg-black">
      <div className="-mt-50 relative z-20">
        <MovieLsit title={"Now Playing"} movies={movies} />
        <MovieLsit title={"Traending"} movies={movies} />
        <MovieLsit title={"Popular"} movies={movies} />
        <MovieLsit title={"Upcoming Movies"} movies={movies} />
        <MovieLsit title={"Horror"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondartContainer;

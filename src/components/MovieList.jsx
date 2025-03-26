import MovieCard from "./MovieCard";

const MovieLsit = ({ title, movies }) => {
  return (
    <div className="p-2">
      <h1 className="text-xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieLsit;

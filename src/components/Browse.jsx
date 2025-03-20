import { useEffect } from "react";
import { API_APTIONS } from "../utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { nowPlayingMovies } from "../utils/moviesSlice";

const Browse = () => {
  const dispach = useDispatch();
  const getNowPlayingMovice = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_APTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispach(nowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovice();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;

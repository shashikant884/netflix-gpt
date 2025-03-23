import { useDispatch } from "react-redux";
import { API_APTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispach = useDispatch();
  const getNowPlayingMovice = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_APTIONS
    );
    const json = await data.json();
    dispach(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayingMovice();
  }, []);
};

export default useNowPlayingMovies;

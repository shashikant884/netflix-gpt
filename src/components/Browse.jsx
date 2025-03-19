import { useEffect } from "react";
import { API_APTIONS } from "../utils/constants";
import Header from "./Header";

const Browse = () => {
  const getNowPlayingMovice = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_APTIONS
    );
    const json = data.json();
    console.log(json);
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

import GptmoviesSuggetion from "./GptMoviesSuggetion";
import GptSearchPage from "./GptSearchpage";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="Logo" />
      </div>
      <GptSearchPage />
      <GptmoviesSuggetion />
    </div>
  );
};

export default GptSearch;

import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
const GptSearchPage = () => {
  const langkey = useSelector((store) => store.config.lang);
  return (
    <div className="flex justify-center ">
      <from className="w-1/2 bg-black opacity-90 grid grid-cols-12 rounded-lg mt-[10%]">
        <input
          className="text-black col-span-9 m-4 p-4 rounded-lg"
          type="text"
          placeholder={lang[langkey].getSearchPlaceholder}
        />
        <button className="text-white col-span-3 rounded-lg bg-red-700 m-4 py-2 px-4">
          {lang[langkey].search}
        </button>
      </from>
    </div>
  );
};

export default GptSearchPage;

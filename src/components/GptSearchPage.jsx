const GptSearchPage = () => {
  return (
    <div className="flex justify-center ">
      <from className="w-1/2 bg-black opacity-90 grid grid-cols-12 rounded-lg mt-[10%]">
        <input
          className="text-white col-span-9 m-4 p-4 rounded-lg"
          type="text "
          placeholder="Search movies"
        />
        <button className="text-white col-span-3 rounded-lg bg-red-700 m-4 py-2 px-4">
          Search
        </button>
      </from>
    </div>
  );
};

export default GptSearchPage;

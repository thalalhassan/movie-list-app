import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "redux/slices/movieSlice";

export default function MovieListHeader() {
  const { pageData } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const [search, setSearch] = useState(false);

  const handleSearch = ({ target }) => {
    dispatch(searchMovies(target.value));
  };

  return (
    <div className="movie-header w-full text-white flex px-2 items-center justify-between fixed h-[70px]">
      {!search ? (
        <>
          <div className="flex">
            <img
              src={require(`assets/Back.png`)}
              className="h-5 w-5 mr-3 mt-[5px]"
              alt="back"
            />
            <span className="text-2xl">{pageData?.title}</span>
          </div>
          <img
            src={require(`assets/search.png`)}
            className="h-6 w-6"
            alt="search"
            onClick={() => {
              setSearch(true);
            }}
          />
        </>
      ) : (
        <>
          <input
            className="text-lg outline-none bg-black rounded border-2 border-gray-600 p-2 w-full"
            name="search"
            placeholder="Search movies"
            type="text"
            onChange={handleSearch}
          />
          <img
            src={require(`assets/close-w.png`)}
            className="absolute right-5 h-5 w-5"
            alt="close"
            onClick={() => {
              dispatch(searchMovies(""));
              setSearch(false);
            }}
          />
        </>
      )}
    </div>
  );
}

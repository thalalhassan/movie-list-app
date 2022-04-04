import MovieCard from "components/movies/card";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesPage, updateMoviesPage } from "redux/slices/movieSlice";
import { apiMimic } from "utils";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieListHeader from "components/movies/header";
import Loader from "components/loader";

export default function Movies() {
  const { movieList, pageData, isSearch, movieSearchList } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();

  const [hasmore, sethasmore] = useState(true);

  const getNextMoviesFromApi = async () => {
    const lastRequestPage = pageData?.["page-num-requested"];
    const page = lastRequestPage ? parseInt(lastRequestPage) + 1 : 1;
    const data = await apiMimic(page);
    dispatch(updateMoviesPage(data));
  };

  useEffect(() => {
    const getMoviesFromApi = async () => {
      const data = await apiMimic(1);
      dispatch(setMoviesPage(data));
    };

    getMoviesFromApi();
  }, [dispatch]);

  useEffect(() => {
    if (isSearch) {
      // since client side search
      sethasmore(false);
      return;
    }
    sethasmore(movieList.length < pageData?.["total-content-items"]);
  }, [pageData, movieList, isSearch]);

  return (
    <div>
      <MovieListHeader />
      <InfiniteScroll
        dataLength={isSearch ? movieSearchList.length : movieList.length}
        next={getNextMoviesFromApi}
        hasMore={hasmore}
        loader={<Loader />}
        endMessage={
          isSearch && !movieSearchList.length ? (
            <p className="bg-black text-gray-500 text-center p-2 mt-20">
              No movies found
            </p>
          ) : (
            <p className="bg-black text-gray-500 text-center p-2">No more movies</p>
          )
        }
      >
        <div className="bg-black md:grid-cols-4 lg:grid-cols-6 px-4 grid grid-cols-3 gap-4">
          {isSearch
            ? movieSearchList?.map((movie, i) => (
                <MovieCard key={i} data={movie} />
              ))
            : movieList?.map((movie, i) => <MovieCard key={i} data={movie} />)}
        </div>
      </InfiniteScroll>
    </div>
  );
}

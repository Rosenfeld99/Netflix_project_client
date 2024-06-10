import React, { useEffect } from "react";
import useResults from "../../hooks/useResults";
import GridList from "../components/grid/GridList";
import Strip from "../components/strip/Strip";
import SkeletonCarusel from "../components/animation/skeletons/SkeletonCarusel";
import { LANGUAGE } from "../../constant/url";


const MoviesPage = () => {
  const keys = {
    type: "movie",
    sort: "now_playing",
  };

  const { error, loading, getResults, list_results } = useResults()

  useEffect(() => {
    getResults(keys)
  }, [])

  // console.log(list_results);
  return (
    <>
      {!loading ? (
        <div>
          <Strip  />
          <GridList
            paddingTop={"pt-0"}
            titleList={LANGUAGE == 'he' ? "סרטים" : "Movies"}
            renderMovies={list_results}
            loading={loading}
            type={"movie"}
          />
        </div>
      ) : (
        <SkeletonCarusel loading={loading} />
      )}
    </>
  );
};

export default MoviesPage;
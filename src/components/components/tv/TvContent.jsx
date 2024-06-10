import React, { useEffect } from "react";
import Strip from "../strip/Strip";
import GridList from "../grid/GridList";
import useResults from "../../../hooks/useResults";
import SkeletonCarusel from "../animation/skeletons/SkeletonCarusel";

const TvContent = () => {
  const keys = {
    type: "tv",
    sort: "top_rated",
  };

  const { error, loading, getSingleRandom, getResults, list_results } = useResults();

  useEffect(() => {
    getResults(keys);
    getSingleRandom(keys);

  }, []);

  // console.log(list_results);
  return (
    <>
      {!loading ? (
        <div>
          <Strip />
          <div>
            <GridList
              paddingTop={"pt-0"}
              titleList={"תוכניות טלוויזיה"}
              renderMovies={list_results}
              loading={loading}
              type={"tv"}
            />
          </div>
        </div>
      ) : (
        <SkeletonCarusel loading={loading} />
      )}
    </>
  );
};

export default TvContent;

import React, { useEffect } from "react";
import useMovies from "../../../hooks/useMovies";
import CaruselList from "../carusel/CaruselList";
import Strip from "../strip/Strip";
import SkeletonCarusel from "../animation/skeletons/SkeletonCarusel";
import useScreen from "../../../hooks/useScreen";
import { LANGUAGE, MDX_PROFILEID } from "../../../constant/url";
import useResults from "../../../hooks/useResults";

const HomeContent = () => {
  const { movies, error, loading, getMovies } = useMovies();
  const { favs_ar, getSingleScreen, singleScreen } = useScreen();
  const { getSingleRandom } = useResults()

  const keys = {
    type: "movie",
    sort: "popular",
  };

  useEffect(() => {
    getSingleRandom(keys);
    getMovies();
    getSingleScreen(localStorage[MDX_PROFILEID]);
  }, [localStorage[MDX_PROFILEID]]);

  return (
    <>
      {!loading ? (
        <div className=" overflow-hidden pb-20 relative">
          <div>
            <Strip />
            <div>
              {favs_ar?.length > 0 ? (
                <CaruselList
                  movies={favs_ar}
                  titleList={LANGUAGE == "he" ? "הרשימה שלי" : "My List"}
                  key={"0"}
                  type={"movie"}
                  singleScreen={singleScreen}
                />
              ) : null}
            </div>
            {movies?.length > 0 && movies?.map((item, i) => (
              <CaruselList
                type={"movie"}
                key={i}
                titleList={item.title}
                movies={item.list}
                singleScreen={singleScreen}
              />
            ))}
          </div>
        </div>
      ) : (
        <SkeletonCarusel loading={loading} />
      )}
    </>
  );
};

export default HomeContent;

import React, { useState, useEffect } from "react";
import useLazyLoad from "../../../hooks/useLazyLoad";
import "../../../styles/App.css"
import ModalDetailes from "../MovieDetailes/ModalDetailes";
import useSingle from "../../../hooks/useSingle";

const CaruselItem = ({ item, singleScreen }) => {
  const [ref, isIntersecting] = useLazyLoad({ threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [asFavs, setAsFavs] = useState(false);
  const { clearSingleMovie, error, getSingle, moviesSingle } = useSingle();

  const isAsFavs = () => {
    if (singleScreen?.favs_id?.includes(item.id)) {
      setAsFavs(true);
    }
    // console.log(asFavs);
  };

  useEffect(() => {
    const keys = {
      type: item?.type === "Scripted" ? "tv" : "movie",
      id: item?.id,
    };
    {
      isHovered ? (clearSingleMovie(), getSingle(keys), isAsFavs()) : null;
    }
  }, [isHovered]);

  return (
    <>
      {item.backdrop_path ? (
        <div
          ref={ref}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="carousel-item m-1 cursor-pointer h-[10vw] min-h-[100px] overflow-hidden rounded-sm"
        >
          {isIntersecting ? (
            <img
              className="card-image bg-[#212121] object-cover"
              onClick={() => setOpen(true)}
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt="movie_backdrop_netflix"
            />
          ) : (
            <div className="image-placeholder bg-[#212121]" />
          )}
        </div>
      ) : null}
      {open && (
          <ModalDetailes
          moviesSingle={moviesSingle}
          open={open}
          setOpen={setOpen}
          asFavs={asFavs}
          isAsFavs={isAsFavs}
          setAsFavs={setAsFavs}
        />
      )}
    </>
  );
};

export default CaruselItem;

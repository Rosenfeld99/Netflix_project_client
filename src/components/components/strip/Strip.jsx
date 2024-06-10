import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ModalDetailes from "../MovieDetailes/ModalDetailes";
import useResults from "../../../hooks/useResults";
import { LANGUAGE } from "../../../constant/url";
import "../../../styles/App.css"
import useLazyLoad from "../../../hooks/useLazyLoad";

const Strip = () => {
  const { singleStrip } = useResults();
  const [ref, isIntersecting] = useLazyLoad({ threshold: 0.1 });


  const nav = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div dir={LANGUAGE == "he" ? "rtl" : "ltr"}>
      <div ref={ref} className="w-[100%] h-[30vw] min-h-[400px] absolute top-0 to-transparent bg-gradient-to-t via-[#0000003e] from-[#141414] z-10"></div>
      {/* <div className="carousel"> */}
      {/* <div className="carousel-item w-[100%]"> */}

      {isIntersecting ? (
        <img
          src={
            singleStrip?.backdrop_path &&
            `https://image.tmdb.org/t/p/original/${singleStrip?.backdrop_path}`
          }
          className="card-image object-cover w-[100%] h-[30vw] min-h-[400px]"
        />
      ) : (
        <div className="image-placeholder bg-[#212121]" />
      )}
      {/* </div> */}
      {/* </div> */}
      <div className=" absolute top-72 right-14 z-40">
        <button
          onClick={() => {
            nav(`/watch/${singleStrip.id}`);
          }}
          className="btn btn-active border-none shadow-sm shadow-[#0000004e] btn-sm text-lg bg-white text-black rounded font-semibold"
        >
          {" "}
          <FaPlay className={LANGUAGE == "he" ? "ml-2" : "mr-2"} /> {LANGUAGE == "he" ? "הפעל" : "Play"}
        </button>{" "}
        <button
          onClick={() => setOpen(true)}
          className="btn btn-active border-none shadow-sm shadow-[#0000004e] mr-4 btn-sm text-lg text-white bg-[#666] rounded"
        >
          {" "}
          <BiInfoCircle className={LANGUAGE == "he" ? "ml-2" : "mr-2"} />
          {LANGUAGE == "he" ? "מידע נוסף" : "More info"}
        </button>{" "}
      </div>
      {open && (
        <ModalDetailes
          item={singleStrip}
          id={singleStrip.id}
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default Strip;

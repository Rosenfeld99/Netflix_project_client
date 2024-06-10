import React from "react";
import { LANGUAGE } from "../../../constant/url";

const NotResultTrilet = ({nav,setShowMenu,moviesSingle}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className=" text-xl md:text-3xl font-bold text-center py-6">
        {LANGUAGE == "he" ? "לא נמצא טריילר להסרט שבחרת :(" : "Not Trailer Result For this Movie :( "}
      </h1>{" "}
      <div className="hero " dir={LANGUAGE == "he" ? "rtl" : "ltr"}>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/original${moviesSingle?.poster_path}`}
            className="max-h-[30vw] min-h-[350px] rounded-lg shadow-2xl"
          />
          <div dir={LANGUAGE == "he" ? "rtl" : "ltr"} className=" max-w-xl">
            <h3 className=" text-xl font-bold mt-6">{moviesSingle?.title}</h3>
            <p className="py-6">{moviesSingle?.overview}</p>
            <button
              onClick={() => {
                nav(-1);
                setShowMenu(true);
              }}
              type="button"
              className="mx-3 bg-transparent border-[1px] border-[#747474] px-5 py-1.5 text-[#747474] hover:border-[#ffffff] hover:text-white"
            >
              {LANGUAGE == "he" ? "חזרה" : "Back"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotResultTrilet;

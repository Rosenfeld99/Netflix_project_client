import React, { useState } from "react";
import ModalDetailes from "../components/MovieDetailes/ModalDetailes";
import { LANGUAGE } from "../../constant/url";

const CardNotfication = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex gap-2 items-center hover:bg-[#000000e7] px-4 py-3"
        dir={LANGUAGE == "he" ? "rtl" : "ltr"}
      >
        <div>
          <img
            className="rounded-sm w-[120px] bg-[#212121]"
            src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            alt={item?.title}
          />
        </div>
        <div className="text-start ">
          <ul className="w-[200px]">
            <li>{LANGUAGE == "he" ? "בקרוב" : "Soon"}</li>
            <li>{item.title}</li>
            <li>{item.release_date}</li>
          </ul>
        </div>
      </div>
      {open && <ModalDetailes id={item.id} open={open} setOpen={setOpen} />}
    </>
  );
};

export default CardNotfication;

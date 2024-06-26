import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { LANGUAGE } from "../../../../constant/url";

const ConfirmAvatar = ({
  isAddAvatar,
  setopenGalery,
  setOpenConfirm,
  newAvatar,
  currentAvatar,
  setAvatar,
  setDefaultAvatar,
}) => {
  return (
    <div
      dir={LANGUAGE == "he" ? "rtl" : "ltr"}
      className="absolute top-0 w-full min-h-screen bg-[#141414] py-24 sm:py-32 lg:px-8 z-30 place-items-center"
    >
      <div></div>

      {/*  */}
      <div
        dir={LANGUAGE == "he" ? "rtl" : "ltr"}
        className="absolute top-0 grid w-full min-h-screen bg-[#141414] place-items-center px-6 py-24 sm:py-32 lg:px-8 z-30 "
      >
        <h1>
          {isAddAvatar ? (LANGUAGE == "he" ? "להגדיר את סמל הפרופיל?" : "Confirm Profile Icon?") : (LANGUAGE == "he" ? "לשנות את סמל הפרופיל?" : "Change Profile Icon?")}{" "}
        </h1>
        <div className="text-center flex border-t-[1px] border-b-[1px] border-[#9b9999] py-10">
          {!isAddAvatar ? (
            <>
              <div className="relative overflow-hidden my-5">
                <img
                  className="max-w-[120px] h-full object-cover min-w-[70px] max-h-[120px] min-h-fit rounded-md"
                  src={currentAvatar}
                  alt="avatar"
                />
                <p className=" mt-2">{LANGUAGE == "he" ? "הסמל הנוכחי" : "Current Icon"}</p>
              </div>
              <div className="mb-5 text-3xl tracking-tight text-[#e3e2e2] sm:text-3xl mx-2 flex justify-center items-center">
                <RiArrowLeftSLine />
              </div>
            </>
          ) : null}
          <div className="relative overflow-hidden my-5">
            <img
              className="max-w-[120px] h-full object-cover min-w-[70px] max-h-[120px] min-h-fit rounded-md"
              src={newAvatar}
              alt="avatar"
            />
            <p className=" mt-2"> {LANGUAGE == "he" ? "חדש" : "New"} </p>
          </div>

          <div>
            <div>{/*  */}</div>
            <div className=" items-start flex flex-col mt-5">{/*  */}</div>
          </div>
        </div>
        <div className=" py-7 flex">
          <button
            onClick={() => {
              setAvatar(newAvatar);
              setOpenConfirm(false);
              setopenGalery(false);
              { isAddAvatar ? setDefaultAvatar(newAvatar) : null }
            }}
            className=" bg-white px-5 py-1.5 text-black hover:bg-red-600 hover:text-white"
          >
            {LANGUAGE == "he" ? "קדימה" : "Let's Do It"}
          </button>
          <button
            onClick={() => {
              setOpenConfirm(false);
              setopenGalery(false);
            }}
            type="button"
            className="mx-3 bg-transparent border-[1px] border-[#747474] px-5 py-1.5 text-[#747474] hover:border-[#ffffff] hover:text-white"
          >
            {LANGUAGE == "he" ? "לא עכשיו" : "Not Yet"}
          </button>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default ConfirmAvatar;

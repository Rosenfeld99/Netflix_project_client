import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TbPencil } from "react-icons/tb";
import GaleryAvatars from "./GaleryAvatars";
import Loading from "../../../components/animation/loading/Loading";
import { LANGUAGE } from "../../../../constant/url";

const EditProfile = ({
  loading,
  setEditScreen,
  editUserScreens,
  deleteUserScreens,
  user,
  getItem,
  openGalery,
  setopenGalery,
  editAvatarProfile,
  avatar,
  setAvatar,
  setGetItem,
  setDefaultAvatar,
  listImages,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(getItem);
  const onSubmit = (bodyData) => {
    console.log(bodyData);

    bodyData._id = getItem._id;
    bodyData.imageScreen = avatar;
    bodyData.lenguage = bodyData.lenguage || "en";
    console.log(bodyData);
    editUserScreens(bodyData);
    setEditScreen(false);
  };

  return (
    <>
      {openGalery && (
        <GaleryAvatars
          listImages={listImages}
          setDefaultAvatar={setDefaultAvatar}
          setGetItem={setGetItem}
          screens={user.screens}
          currentAvatar={getItem.imageScreen}
          setAvatar={setAvatar}
          setopenGalery={setopenGalery}
        />
      )}
      {loading && (
        <div className=" min-h-screen flex items-center justify-center">
          <Loading width={"w-20"} />
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        dir={LANGUAGE == "he" ? "rtl" : "ltr"}
        className="absolute top-0 grid w-full min-h-screen bg-[#141414] place-items-center px-6 py-24 sm:py-32 lg:px-8 z-10 "
      >
        <div className="text-center flex border-t-[1px] border-b-[1px] border-[#9b9999] py-10">
          <div className={`relative max-w-[120px] min-w-[70px] max-h-[120px] min-h-fit rounded-md overflow-hidden ml-5 my-5 ${LANGUAGE == "he" ? "ml-5" : "mr-5"}`}>
            <img src={avatar} alt="avatar" className=" h-full w-full object-cover" />
            <div>
              <div onClick={editAvatarProfile}>
                <TbPencil className=" bg-[#000] p-1 rounded-full absolute bottom-[10px] mr-[10px] cursor-pointer text-white text-4xl" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="mt-4 text-xl tracking-tight text-[#e3e2e2] sm:text-3xl">
              {LANGUAGE == "he" ? "עריכת פרופיל :" : "Edit Profile :"}
            </h1>
            <div>
              <input
                type="text"
                placeholder={LANGUAGE == "he" ? "שם" : "Name"}
                className=" px-2 py-1 outline-none bg-[#9b9999] text-white placeholder:text-white mt-5"
                {...register("nameScreen", {
                  required: "nameScreen is required",
                  minLength: {
                    value: 2,
                    message: "nameScreen short for 2 chars",
                  },
                  maxLength: {
                    value: 15,
                    message: "nameScreen length for 10 chars",
                  },
                })}
                defaultValue={getItem.nameScreen}
              />
              {errors.nameScreen && (
                <p className="text-red-500">{errors.nameScreen.message}</p>
              )}
            </div>
            <div className=" items-start flex flex-col mt-5 text-[#747474]">
              <label
              >
                {LANGUAGE == "he" ? "שפה :" : "Language : "}
              </label>
              <select {...register("lenguage")} className=" my-2 bg-black border px-2 py-1" >
                <option value="he">עברית</option>
                <option value="en">English</option>
                {/* <option value="">En</option> */}
                {/* <option value="">En</option> */}
              </select>
            </div>
          </div>
        </div>
        <div className=" py-7 flex">
          <button className=" bg-white px-5 py-1.5 text-black hover:bg-red-600 hover:text-white">
            {LANGUAGE == "he" ? "שמירה" : "Save"}

          </button>
          <button
            onClick={() => setEditScreen(false)}
            type="button"
            className="mx-3 bg-transparent border-[1px] border-[#747474] px-5 py-1.5 text-[#747474] hover:border-[#ffffff] hover:text-white"
          >
            {LANGUAGE == "he" ? "ביטול" : "Cancel"}
          </button>
          {getItem._id != user.screens[0]._id && (
            <button
              onClick={() => {
                deleteUserScreens(getItem._id);
                setEditScreen(false);
              }}
              type="button"
              className=" bg-transparent border-[1px] border-[#747474] px-5 py-1.5 text-[#747474] hover:border-[#ffffff] hover:text-white"
            >
              {LANGUAGE == "he" ? "מחיקת פרופיל" : "Delete Profile"}
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default EditProfile;

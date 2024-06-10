import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TbPencil } from "react-icons/tb";
import GaleryAvatars from "./GaleryAvatars";
import Loading from "../../../components/animation/loading/Loading";
import { LANGUAGE } from "../../../../constant/url";

const AddProfile = ({
  loading,
  addProfile,
  listImages,
  setAddProfile,
  addUserScreens,
  user,
  openGalery,
  setopenGalery,
  editAvatarProfile,
  avatar,
  setAvatar,
  defalutAvatar,
  setDefaultAvatar,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (bodyData) => {
    bodyData.userId = user._id;
    bodyData.imageScreen = avatar;
    bodyData.lenguage = bodyData.lenguage || "en";
    console.log(bodyData);
    addUserScreens(bodyData);
    setAddProfile(false);
  };

  const [isAddAvatar, setIsAddAvatar] = useState(false);

  useEffect(() => {
    setAvatar(defalutAvatar);
  }, [avatar]);

  console.log(openGalery);
  return (
    <>
      {openGalery && (
        <GaleryAvatars
          listImages={listImages}
          defalutAvatar={defalutAvatar}
          setDefaultAvatar={setDefaultAvatar}
          isAddAvatar={isAddAvatar}
          setIsAddAvatar={setIsAddAvatar}
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
        className="absolute top-0 grid w-full min-h-screen bg-[#141414] place-items-center px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="text-center flex border-t-[1px] border-b-[1px] border-[#9b9999] py-10">
          <div className={`relative max-w-[120px] min-w-[70px] max-h-[120px] min-h-fit rounded-md overflow-hidden ml-5 my-5 ${LANGUAGE == "he" ? "ml-5" : "mr-5"}`}>
            <img
              src={defalutAvatar}
              alt="avatar"
              className=" h-full object-cover"
            />
            <div>
              <div
                onClick={() => {
                  setIsAddAvatar(true);
                  editAvatarProfile();
                }}
              >
                <TbPencil className=" bg-[#000] p-1 rounded-full absolute bottom-[10px] mr-[10px] cursor-pointer text-white text-4xl" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="mt-4 text-xl tracking-tight text-[#e3e2e2] sm:text-3xl">
              {LANGUAGE == "he" ? "הוספת פרופיל : " : "Add Profile"}
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
              />
              {errors.nameScreen && (
                <p className="text-red-500">{errors.nameScreen.message}</p>
              )}
            </div>
            <div className=" items-start flex flex-col mt-5">
              <label>{LANGUAGE == "he" ? "שפה :" : "Language : "}</label>
              <select {...register("lenguage")} name="" className=" my-2 bg-black border px-2 py-1" id="">
                <option value="he">עברית</option>
                <option value="en">English</option>
                {/* <option value="">En</option> */}
                {/* <option value="">En</option> */}
              </select>
            </div>
          </div>
        </div>
        <div className=" py-7">
          <button className=" bg-white px-5 py-1.5 text-black hover:bg-red-600 hover:text-white">
            
            {LANGUAGE == "he" ? "צור" : "Create"}
          </button>
          <button
            onClick={() => setAddProfile(false)}
            type="button"
            className="mx-3 bg-transparent border-[1px] border-[#747474] px-5 py-1.5 text-[#747474] hover:border-[#ffffff] hover:text-white"
          >

            {LANGUAGE == "he" ? "השלך" : "Throw"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddProfile;

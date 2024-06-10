import { useEffect } from "react";
import { TbPencil } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import "../../../../styles/App.css"
import useLazyLoad from "../../../../hooks/useLazyLoad";

const ScreenItem = ({
  setAvatar,
  item,
  fetchItem,
  hwoWatch,
  setHwoWatch,
  getSingleScreen,
}) => {
  const nav = useNavigate();
  const [ref, isIntersecting] = useLazyLoad({ threshold: 0.1 });
  const onClickEdit = () => {
    {
      hwoWatch
        ? // if is hwowatch do
        (console.log("hwoWatch is true"),
          getSingleScreen(item._id),
          setHwoWatch(false),
          nav("/home")
        )
        : // if is profile manage do
        (console.log("hwoWatch is fales"),
          fetchItem(item),
          setAvatar(item.imageScreen));
    }
    console.log(item);
  };

  useEffect(() => { }, [hwoWatch]);

  return (
    <div className=" flex-col hover:text-white">
      <div
        ref={ref}
        onClick={onClickEdit}
        className=" cursor-pointer relative w-[20vw] max-w-[120px] min-w-[70px] mx-3 mt-5 rounded-md hover:border-2 overflow-hidden"
      >
        {isIntersecting ? (
          <img src={item.imageScreen} className="card-image w-full bg-[#212121]" alt="avatar" />
        ) : (
          <div className=" bg-[#212121]" />
        )}
        <div>
          {!hwoWatch && (
            <div className=" absolute top-0 bg-[#00000052] w-full h-full">
              <img
                className="card-image w-10 absolute top-[30%] ml-[40%] "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/OOjs_UI_icon_edit-ltr-gray.svg/1024px-OOjs_UI_icon_edit-ltr-gray.svg.png"
                alt=""
              />
              {/* <TbPencil className=" text-5xl w-20 absolute top-[30%] ml-[20%] text-white" /> */}
            </div>
          )}
        </div>
      </div>
      <span className="text-[#e3e2e2]">{item.nameScreen}</span>
    </div>
  );
};

export default ScreenItem;

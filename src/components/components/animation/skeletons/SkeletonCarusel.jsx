import React from "react";
import SkeletonArticale from "./SkeletonArticale";
import { LANGUAGE } from "../../../../constant/url";

const SkeletonCarusel = ({ loading }) => {
  return (
    <div className=" overflow-hidden pb-20">
      <div>
        <SkeletonArticale
          theme={"dark"}
          widthHeigth={"h-[40vw] min-h-[400px]"}
        />
        {loading &&
          [1, 2, 3, 4, 5].map((n) => (
            <div key={n} className=" flex carousel my-10" dir={LANGUAGE == "he" ? "rtl" : "ltr"}>
              {" "}
              {loading &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <div key={n}>
                    <SkeletonArticale
                      theme={"dark"}
                      widthHeigth={"m-1 h-[10vw] min-h-[100px] "}
                      warpper={"w-[20vw] min-w-[220px]  my-5"}
                    />{" "}
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkeletonCarusel;

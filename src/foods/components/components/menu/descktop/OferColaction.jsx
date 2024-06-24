import React from "react";
import { Link } from "react-router-dom";

const OferColaction = ({ category, close }) => {
  return (
    <div dir="rtl" className="col-start-2 grid grid-cols-2 gap-x-8">
      {category.featured.map((item) => (
        <div key={item.name} className="group relative text-base sm:text-sm">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 ">
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="object-cover object-center w-[25vw] h-[20vw] "
            />
          </div>
          <Link onClick={() => { close() }} to={`/shop/product/${item.href}`} className="mt-6 block font-medium text-gray-100">
            <span className="absolute inset-0 z-10" aria-hidden="true" />
            {item.name}
          </Link>
          <p aria-hidden="true" className="mt-1">
            קנה עכשיו
          </p>
        </div>
      ))}
    </div>
  );
};

export default OferColaction;

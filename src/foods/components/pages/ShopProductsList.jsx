import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductItem from "../components/productsList/ProductItem";
import useShop from "../../../hooks/useShop";

const FoodProductsList = ({ children }) => {
  const nav = useNavigate();

  const { loading, error, fetchProductsByCat, productsCat } = useShop();

  const { cat } = useParams();
  console.log(cat);

  useEffect(() => {
    fetchProductsByCat(cat);
  }, [cat]);

  console.log(productsCat);

  return (
    <div className=" " dir="rtl">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 min-h-screen">
        <h2 className="py-10 text-xl font-bold">
          {cat} : {"מוצרים"}
        </h2>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-8">
          {productsCat.map((product, i) => (
            <ProductItem product={product} nav={nav} key={i} />
          ))}  </div>
      </div>
    </div>
  );
};

export default FoodProductsList;

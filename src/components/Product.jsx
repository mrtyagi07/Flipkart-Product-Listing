import React, { useEffect, useState } from "react";

import { StateContext, useStateContext } from "../context/StateContext";
import Filter from "./Filter";
import ProductList from "./ProductList";

const Product = () => {
  const { myProducts, men, women, type } = useStateContext();

  let products = myProducts;
  if (type === "Men") {
    products = men.length <= 0 ? myProducts : men;
  }
  if (type === "Women") {
    products = women.length <= 0 ? myProducts : women;
  }

  if (!men.length <= 0 && !women.length <= 0) {
    products = myProducts;
  }

  return (
    <div>
      <section className=" h-full bg-[#fff] text-gray-400 ">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="hidden flex-row lg:flex lg:flex-col">
            <Filter />
          </div>
          <div className="container mx-auto px-5 py-24">
            <div className="-m-4 flex flex-wrap lg:flex-row">
              {products.map((el) => (
                <ProductList
                  key={el.id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  discountedPrice={el.discountedPrice}
                  image={el.img}
                  stock={el.stock}
                  size={el.size}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import productData from "../assets/data.json";
import ProductList from "./ProductList";

const Product = () => {
  const [products] = useState(productData);
  const { products: myProducts } = products;

  return (
    <div>
      <section className=" h-full bg-[#fff] text-gray-400 ">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="hidden flex-row lg:flex lg:flex-col">
            <Filter />
          </div>
          <div className="container mx-auto px-5 py-24">
            <div className="-m-4 flex flex-wrap lg:flex-row">
              {myProducts.map((el) => (
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

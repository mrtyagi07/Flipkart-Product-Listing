import React from "react";

const ProductList = ({
  name,
  category,
  price,
  discountedPrice,
  image,
  stock,
  size,
}) => {
  return (
    <div className="mt-4 w-full p-4 shadow-lg md:w-1/2 lg:w-1/4">
      {console.log(size)}
      <a className="relative block h-72 overflow-hidden rounded">
        <img
          alt="ecommerce"
          className="block h-full w-full object-cover object-center"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
          {category.includes("Women") ? "Women" : "Men"}
        </h3>
        <h2 className="title-font text-lg font-medium text-gray-900">{name}</h2>
        <div className="flex gap-4">
          {" "}
          <p className="mt-1 underline">₹{price}</p>
          <p className="mt-1 ">₹{discountedPrice}</p>
          <p className="mt-1 font-semibold text-green-500">
            {Math.floor((discountedPrice * 100) / price)}%
          </p>
        </div>
        <div className="">
          Size:
          <span className="text-gray-600">{`${size} `}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

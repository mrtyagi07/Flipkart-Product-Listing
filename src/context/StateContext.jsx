import React, { createContext, useContext, useState } from "react";

import productData from "../assets/data.json";

const Context = createContext();

export const StateContext = ({ children }) => {
  //!JSON DATA
  const [{ products: myProducts }] = useState(productData);

  //! STATES
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [type, setType] = useState("");
  const [size, setSize] = useState([]);
  const [on, setOn] = useState(false);
  const [prices, setPrices] = useState([]);

  //! GENDER WISE DATA
  const handleCheck = (name, checked) => {
    let arr = [];
    if (checked) {
      arr = myProducts.filter((el) =>
        el.category.includes(name.slice(0, 1).toUpperCase() + name.slice(1)),
      );
      if (name === "men") {
        setMen(arr);
        setType("Men");
      }
      if (name === "women") {
        setWomen(arr);
        setType("Women");
      }
    } else {
      if (name === "men") {
        setMen([]);
      }
      if (name === "women") {
        setWomen([]);
      }
    }
  };

  //! SIZE WISE DATA
  const handleSize = (name, checked) => {
    const fetchSizeAndCategory = (gender) => {
      if (name === "m") {
        sizes = [
          ...sizes,
          ...myProducts.filter(
            (el) => el.size.includes("M") && el.category.includes(gender),
          ),
        ];
      }
      if (name === "l") {
        sizes = [
          ...sizes,
          ...myProducts.filter(
            (el) => el.size.includes("L") && el.category.includes(gender),
          ),
        ];
      }
      if (name === "xl") {
        sizes = [
          ...sizes,
          ...myProducts.filter(
            (el) => el.size.includes("XL") && el.category.includes(gender),
          ),
        ];
      }
      if (name === "xxl") {
        sizes = [
          ...sizes,
          ...myProducts.filter(
            (el) => el.size.includes("XXL") && el.category.includes(gender),
          ),
        ];
      }
    };

    let sizes = [];
    if (checked) {
      type === "Men"
        ? fetchSizeAndCategory("Men")
        : fetchSizeAndCategory("Women");
    }
    setSize(sizes);
  };

  //! PRICE WISE DATA
  const handlePrice = (e, price) => {
    e.preventDefault();
    let pricesArr = [];
    if (type === "Men") {
      pricesArr = myProducts.filter(
        (el) => el.discountedPrice <= price && el.category.includes("Men"),
      );
    }
    if (type === "Women") {
      pricesArr = myProducts.filter(
        (el) => el.discountedPrice <= price && el.category.includes("Women"),
      );
    }
    if (type === "") {
      pricesArr = myProducts.filter((el) => el.discountedPrice <= price);
    }
    setPrices(pricesArr);
  };

  //! CLEAR ALL AND SHOW ALL DATA
  const clearAll = (e) => {
    e.preventDefault();
    setMen([]);
    setWomen([]);
    setSize([]);
    setPrices([]);
  };

  return (
    <Context.Provider
      value={{
        myProducts,
        handleCheck,
        handleSize,
        men,
        women,
        type,
        clearAll,
        size,
        on,
        setOn,
        handlePrice,
        prices,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

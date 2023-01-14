import React, { createContext, useContext, useState, useEffect } from "react";

import productData from "../assets/data.json";

const Context = createContext();

export const StateContext = ({ children }) => {
  //!JSON DATA
  const [{ products: myProducts }] = useState(productData);

  //! STATES
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [type, setType] = useState("");

  //! GENDER WISE DATA
  const handleCheck = (name, checked) => {
    if (name === "men" && checked) {
      const arrMen = myProducts.filter((el, i) => {
        return el.category.includes("Men");
      });
      setMen(arrMen);
      setType("Men");
    }
    if (name === "women" && checked) {
      const arrWomen = myProducts.filter((el, i) => {
        return el.category.includes("Women");
      });
      setWomen(arrWomen);
      setType("Women");
    }
    if (!checked && name === "men") {
      setMen([]);
    }
    if (!checked && name === "women") {
      setWomen([]);
    }
  };

  //! CLEAR ALL AND SHOW ALL DATA
  const clearAll = (e) => {
    e.preventDefault();
    setMen([]);
    setWomen([]);
  };

  return (
    <Context.Provider
      value={{
        myProducts,
        handleCheck,
        men,
        women,
        type,
        clearAll,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

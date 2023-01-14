import React, { useState } from "react";
import { AiOutlineDown, AiOutlineLeft, AiOutlineUp } from "react-icons/ai";

import { StateContext, useStateContext } from "../context/StateContext";

const Filter = () => {
  const { myProducts, handleCheck, clearAll, men, women } = useStateContext();
  const [on, SetOn] = useState(false);

  return (
    <div>
      <aside className=" h-screen w-64" aria-label="Sidebar">
        <div className="overflow-y-auto rounded bg-[#fff] px-3 py-4 text-gray-600 shadow-lg">
          <ul className="space-y-2">
            <li className="border-b-2">
              <p className=" text-whit flex items-center justify-between rounded-lg p-2 text-base font-semibold text-gray-900 ">
                Filters
                <button
                  onClick={clearAll}
                  className="ml-3 cursor-pointer text-sm font-medium uppercase text-[#2874f0]"
                >
                  Clear all
                </button>
              </p>
            </li>
            <li>
              <p className="font-base flex items-center rounded-lg p-2 text-sm uppercase text-gray-900">
                Categories
                {/* <span className="ml-3">Categories</span> */}
              </p>

              <div className=" bg-[#fff] text-gray-800">
                <label className="m-1 flex items-center bg-[#fff]">
                  <AiOutlineLeft className="cursor-pointer" />
                  {/* <AiOutlineDown /> */}
                  Clothing and Accessories
                </label>
                <ul className=" hidden w-52 bg-[#fff] p-2">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className=" bg-[#fff] text-gray-800">
                <label className="m-1 flex items-center bg-[#fff]">
                  {on === false && (
                    <AiOutlineLeft
                      className="cursor-pointer"
                      onClick={() => SetOn(true)}
                    />
                  )}
                  {on === true && (
                    <AiOutlineDown
                      className="cursor-pointer"
                      onClick={() => SetOn(false)}
                    />
                  )}
                  Winter Wear
                </label>
                <ul
                  className={`${
                    on === false ? "hidden" : ""
                  } ml-4 w-52 bg-[#fff] p-2`}
                >
                  <li>
                    <a href="/">Shrugs</a>
                  </li>
                  <li>
                    <a href="/">Gloves</a>
                  </li>
                  <li>
                    <a href="/">Sweatshirts</a>
                  </li>
                  <li>
                    <a href="/">Shawls</a>
                  </li>
                  <li>
                    <a href="/">Sweaters and Cardigans</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <p className=" flex items-center justify-between rounded-lg p-2 text-base font-normal uppercase text-gray-900">
                Gender
                {<AiOutlineDown />}
              </p>
              <div className="flex">
                <div>
                  <div className="">
                    <input
                      className="mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                      type="checkbox"
                      value=""
                      name="men"
                      onChange={(e) => handleCheck("men", e.target.checked)}
                    />
                    <label className="inline-block text-gray-800">Men</label>
                  </div>
                  <div className="">
                    <input
                      className=" mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                      type="checkbox"
                      value=""
                      name="men"
                      onChange={(e) => handleCheck("women", e.target.checked)}
                    />
                    <label
                      className=" inline-block text-gray-800"
                      htmlFor="flexCheckChecked"
                    >
                      Women
                    </label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Filter;

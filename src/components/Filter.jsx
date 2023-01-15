import React from "react";
import { AiOutlineDown, AiOutlineLeft, AiOutlineUp } from "react-icons/ai";

import { StateContext, useStateContext } from "../context/StateContext";

const Filter = () => {
  const {
    myProducts,
    handleCheck,
    clearAll,
    men,
    women,
    handleSize,
    on,
    setOn,
    handlePrice,
  } = useStateContext();

  return (
    <div>
      <aside
        className={`${on && "z-10 h-[410px]"} h-[1300px] w-64`}
        aria-label="Sidebar"
      >
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
              <p className=" flex items-center justify-between rounded-lg p-2 text-base font-normal uppercase text-gray-900">
                Price
                {<AiOutlineDown />}
              </p>
              <div className="flex">
                <div>
                  <div className="">
                    <label htmlFor="temp">Choose price range:</label>

                    <input
                      className="mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                      type="range"
                      id="temp"
                      name="temp"
                      list="markers"
                      min="0"
                      max="1000"
                      defaultValue="1000"
                      //
                      onChange={(e) => handlePrice(e, e.target.value)}
                    />
                    <div className="flex w-full justify-between px-2 text-xs">
                      <div className="flex flex-col items-center">
                        <span>|</span>
                        <span>0</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span>|</span>
                        <span>200</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span>|</span>
                        <span>400</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span>|</span>
                        <span>600</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span>|</span>
                        <span>900</span>
                      </div>
                    </div>
                  </div>
                </div>
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
                      name="men"
                      onChange={(e) =>
                        handleCheck(e.target.name, e.target.checked)
                      }
                    />
                    <label className="inline-block text-gray-800">Men</label>
                  </div>
                  <div className="">
                    <input
                      className=" mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                      type="checkbox"
                      name="women"
                      onChange={(e) =>
                        handleCheck(e.target.name, e.target.checked)
                      }
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
            <li>
              <p className=" flex items-center justify-between rounded-lg p-2 text-base font-normal uppercase text-gray-900">
                Size
                {<AiOutlineDown />}
              </p>
              <div className="flex">
                <div>
                  <div className="">
                    <input
                      className="mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                      type="checkbox"
                      name="m"
                      onChange={(e) =>
                        handleSize(e.target.name, e.target.checked)
                      }
                    />
                    <label className="inline-block text-gray-800">M</label>
                  </div>
                  <div className="">
                    <input
                      className=" mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                      type="checkbox"
                      name="l"
                      onChange={(e) =>
                        handleSize(e.target.name, e.target.checked)
                      }
                    />
                    <label
                      className=" inline-block text-gray-800"
                      htmlFor="flexCheckChecked"
                    >
                      L
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=" mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                      type="checkbox"
                      name="xl"
                      onChange={(e) =>
                        handleSize(e.target.name, e.target.checked)
                      }
                    />
                    <label
                      className=" inline-block text-gray-800"
                      htmlFor="flexCheckChecked"
                    >
                      XL
                    </label>
                  </div>
                  <div className="">
                    <input
                      className=" mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                      type="checkbox"
                      name="xxl"
                      onChange={(e) =>
                        handleSize(e.target.name, e.target.checked)
                      }
                    />
                    <label
                      className=" inline-block text-gray-800"
                      htmlFor="flexCheckChecked"
                    >
                      XXL
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

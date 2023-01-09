import React from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <header className="bg-[#2874f0] text-white">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <div className="title-font mb-4 flex items-center font-medium text-white md:mb-0 lg:flex-col">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipkart"
              className="w-16"
            />
            <span className="ml-3 flex text-sm italic">
              Explore{" "}
              <span className="px-1 font-medium text-yellow-400">Plus</span>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"
                alt=""
                className="w-4"
              />
            </span>
          </div>
          <nav className="relative flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto ">
            <input
              type="text"
              className=" mr-5 w-[350px] text-white hover:text-gray-100 lg:w-[700px]"
              placeholder="Search for products, brands and more"
            />
            <AiOutlineSearch
              className="absolute top-1.5 right-8 cursor-pointer text-[#2874f0] lg:right-[320px]"
              size={25}
            />
            <button className="mr-2 mt-2 bg-white py-2 px-5 font-bold text-[#2874f0] lg:mt-0 ">
              Login
            </button>
            <a className="mr-5 hover:text-gray-100">Become a seller</a>
            <a className="mr-5 hover:text-gray-100">More</a>
          </nav>
          <div className="mt-4 inline-flex items-center rounded border-0 py-1 px-3 text-base font-bold focus:outline-none md:mt-0">
            <AiOutlineShoppingCart className="mr-2" size={30} /> Cart
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

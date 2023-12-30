import React, { useState } from "react";
import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { logo, userLogo } from "../../assets";


const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 font-titleFont w-full bg-white border-b-[1px] border-b-gray-800">
      <div className="max-w-screen-xl mx-auto">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between h-20">
          <Link to="/">
            <div>
              <img className="w-40" src={logo} alt="logo" />
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
              <li className="text-2xl text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
              <li className="text-2xl text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Pages
              </li>
              <li className="text-2xl text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Shop
              </li>
              <li className="text-2xl text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Element
              </li>
              <li className="text-2xl text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Blog
              </li>
            </ul>
            <Link>
              <div className="relative flex justify-end items-start">
                <IoCartOutline size={22} className=" cursor-pointer" />
                <span className="bg-orange-800 absolute w-4 left-6 top-[-8px] text-white rounded-full text-sm flex justify-center items-center font-semibold">
                  0
                </span>
              </div>
            </Link>
            <div className="flex items-center justify-center">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={userLogo}
                alt="user logo"
              />
              <text className="text-xl">Nahid Ferdous Priom</text>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet View */}
        <div className="md:hidden flex items-center justify-between h-20">
          <Link to="/">
            <div>
              <img className="w-32" src={logo} alt="logo" />
            </div>
          </Link>
          <div className="flex items-center">
            <div
              className="cursor-pointer"
              onClick={() => setNavOpen(!isNavOpen)}
            >
              {isNavOpen ? (
                // Cross icon when navigation links are open
                <IoCloseOutline className="w-6 h-6 text-black" />
              ) : (
                // Burger icon when navigation links are closed
                <div>
                  <div className="w-6 h-1 bg-black"></div>
                  <div className="w-6 h-1 bg-black mt-1"></div>
                  <div className="w-6 h-1 bg-black mt-1"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Drawer */}
        {isNavOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white">
            {/* Include your navigation links here */}
            {/* Example: */}
            <ul className="p-4">
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Pages
              </li>
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Shop
              </li>
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Element
              </li>
              <li className="text-base text-black font-bold hover:text-orange-700 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Blog
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

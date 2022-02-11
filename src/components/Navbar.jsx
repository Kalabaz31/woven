import React, { useState, useEffect, useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";

const Navbar = () => {
  const cart = useRef();

  const [showMenu, setShowMenu] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const setToggle = (state) => {
    if (state === "menu") {
      setShowMenu(!showMenu);
      setShowSearch(false);
      setShowCart(false);
    }
    if (state === "search") {
      setShowMenu(false);
      setShowSearch(!showSearch);
      setShowCart(false);
    }
    if (state === "cart") {
      setShowMenu(false);
      setShowSearch();
      setShowCart(!showCart);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <div className="bg-white flex flex-row justify-between px-10 z-20 shadow shadow-black/5">
        {/* Left Side of Navbar */}
        <div className="flex flex-row items-center gap-8 w-1/3">
          <button type="button" className="group relative w-6 h-6 " onClick={() => setToggle("menu")}>
            <div className="absolute top-[2px] flex flex-col gap-[0.3rem]">
              <div
                className={!showMenu ? "w-6 h-[3px] bg-black transition ease-in-out duration-300" : "w-6 h-[3px] bg-black transition ease-in-out duration-300 rotate-45 opacity-0 duration-150"}
              ></div>
              <div className={!showMenu ? "w-6 h-[3px] bg-black transition ease-in-out duration-300" : "w-6 h-[3px] bg-black transition ease-in-out duration-300 opacity-0 duration-150"}></div>
              <div
                className={!showMenu ? "w-6 h-[3px] bg-black transition ease-in-out duration-300" : "w-6 h-[3px] bg-black transition ease-in-out duration-300 -rotate-45 opacity-0 duration-150"}
              ></div>
            </div>
            <div>
              <div
                className={
                  showMenu ? "w-6 h-[3px] bg-black absolute  rotate-45 opacity-100 transition ease-in-out duration-300" : "w-6 h-[3px] bg-black absolute  transition ease-in-out duration-150 opacity-0"
                }
              ></div>
              <div
                className={
                  showMenu
                    ? "w-6 h-[3px] bg-black absolute  -rotate-45 opacity-100 transition ease-in-out duration-300"
                    : "w-6 h-[3px] bg-black absolute  transition ease-in-out duration-150 opacity-0"
                }
              ></div>
            </div>
          </button>

          <a href="#" className="group flex items-center gap-2 font-normal py-3" onMouseEnter={() => setShowShop(true)} onMouseLeave={() => setShowShop(false)}>
            SHOP
            <RiArrowRightSLine fontSize={22} className={showShop ? "rotate-90 transition ease-in-out duration-300" : "transition ease-in-out duration-300"} />
          </a>
        </div>

        {/* Middle Of navbar === Brand Logo */}
        <a href="#" className="flex w-1/3 justify-center py-3">
          {" "}
          <img className="w-1/2 h-6" src="https://wovenmagazine.com/content/themes/woven/assets/svg/logo.svg" alt="" />
        </a>

        {/* Left Side of Navbar */}
        <div className="flex flex-row justify-end items-center gap-8  w-1/3">
          <button className="font-normal py-3" onClick={() => setToggle("search")}>
            <BiSearchAlt2 fontSize={20} />
          </button>
          <button className="font-normal py-3" onClick={() => setToggle("cart")}>
            CART
          </button>
        </div>
      </div>

      {/* Menu */}
      <div
        className={
          showMenu
            ? " w-full h-full fixed bg-white/90 flex flex-col justify-center transtion duration-500 ease-in-out "
            : "w-full h-full fixed bg-white/90 flex flex-col justify-center invisible opacity-0 transtion duration-300 ease-in-out"
        }
      >
        <div className="h-2/3 flex flex-col justify-center gap-5">
          <div className="flex flex-col">
            <span className="italic text-green-500">.01</span>{" "}
            <a href="" className="text-3xl font-medium tracking-[4px] text-zinc-400/60 hover:text-black transition duration-300 ease-in-out">
              STORIES
            </a>
          </div>
          <div className="flex flex-col">
            <span className="italic text-green-500">.02</span>{" "}
            <a href="" className="text-3xl font-medium tracking-[4px] text-zinc-400/60 hover:text-black transition duration-300 ease-in-out">
              FILMS
            </a>
          </div>
          <div className="flex flex-col">
            <span className="italic text-green-500">.03</span>{" "}
            <a href="" className="text-3xl font-medium tracking-[4px] text-zinc-400/60 hover:text-black transition duration-300 ease-in-out">
              SHOP
            </a>
          </div>
          <div className="flex flex-col">
            <span className="italic text-green-500">.04</span>{" "}
            <a href="" className="text-3xl font-medium tracking-[4px] text-zinc-400/60 hover:text-black transition duration-300 ease-in-out">
              BLOG
            </a>
          </div>
          <div className="flex flex-col">
            <span className="italic text-green-500">.05</span>{" "}
            <a href="" className="text-3xl font-medium tracking-[4px] text-zinc-400/60 hover:text-black transition duration-300 ease-in-out">
              ABOUT
            </a>
          </div>
        </div>

        <div className="h-1/3 flex flex-col  items-center gap-5">
          <button className="py-3 px-6 bg-green-500/75 text-neutral-100 font-medium text-xs w-max tracking-[2px]"> REQUEST INTERVIEW</button>
          <div className="flex flex-row gap-12 text-sm text-neutral-700">
            <a href="">twitter</a>
            <a href="">facebook</a>
            <a href="">instagram</a>
          </div>
        </div>
      </div>

      {/* Shop */}
      <div
        className={showShop ? "bg-gray-900 w-full flex flex-col transition duration-300 ease-in-out z-10" : "-translate-y-[40rem] transition duration-300 ease-in-out"}
        onMouseEnter={() => setShowShop(true)}
        onMouseLeave={() => setShowShop(false)}
      >
        <div className="flex flex-row overflow-hidden ">
          <div className="group w-1/4 relative  ">
            <img className="h-full" src="https://wovenmagazine.com/content/uploads/2018/11/Issue4_Cover_Dropdown-640x640.jpg" alt="" />
            <a href="" className="absolute left-0 top-0 flex flex-col justify-center invisible group-hover:visible h-full w-full bg-white/90 z-10 ">
              <span>Woven Title Here</span>
              <span className="text-green-600">$18$</span>
            </a>
          </div>
          <div className="group w-1/4 relative  ">
            <img className="h-full" src="https://wovenmagazine.com/content/uploads/2018/11/Issue4_Cover_Dropdown-640x640.jpg" alt="" />
            <a href="" className="absolute left-0 top-0 flex flex-col justify-center invisible group-hover:visible h-full w-full bg-white/90 z-10 ">
              <span>Woven Title Here</span>
              <span className="text-green-600">$18$</span>
            </a>
          </div>
          <div className="group w-1/4 relative  ">
            <img className="h-full" src="https://wovenmagazine.com/content/uploads/2017/02/09_issue-3-shop-640x640.jpg" alt="" />
            <a href="" className="absolute left-0 top-0 flex flex-col justify-center invisible group-hover:visible h-full w-full bg-white/90 z-10 ">
              <span>Woven Title Here</span>
              <span className="text-green-600">$18$</span>
            </a>
          </div>
          <div className="group w-1/4 relative  ">
            <img className="h-full" src="https://wovenmagazine.com/content/uploads/2017/01/014_issue-2_cover-640x640.jpg" alt="" />
            <a href="" className="absolute left-0 top-0 flex flex-col justify-center invisible group-hover:visible h-full w-full bg-white/90 z-10 ">
              <span>Woven Title Here</span>
              <span className="text-green-600">$18$</span>
            </a>
          </div>
        </div>
      </div>

      {/* Search */}
      <div
        className={
          showSearch
            ? " w-full h-full fixed bg-white/90 flex flex-row  transtion duration-500 ease-in-out items-center justify-center px-20 gap-2"
            : " w-full h-full fixed bg-white/90 flex flex-row  transtion duration-500 ease-in-out items-center justify-center px-20 gap-2 invisibile opacity-0"
        }
      >
        <input type="text" placeholder="Search Woven + Hit Enter" className="outline-none text-xl md:text-4xl md:w-2/3 py-2" />

        <button className="border-green-600 border-2 px-4 py-2  text-green-600 text-xl font-bold"> > </button>
      </div>

      {/* Cart */}
      <div
        className={
          showCart
            ? "w-full h-full fixed bg-transparent flex flex-row  transtion duration-150 ease-in-out items-center justify-center px-20 gap-2"
            : "w-full h-full bg-transparent flex flex-row  transtion duration-150 ease-in-out items-center justify-center px-20 gap-2 opacity-0 invisible"
        }
        onClick={(e) => {
          if (!cart.current.contains(e.target)) setToggle("cart");
        }}
      >
        <div ref={cart} className="bg-white absolute md:right-[2rem] top-10 w-full md:w-[25rem] flex flex-col items-center gap-8 shadow  ">
          <div className="border-b border-gray-200 w-full mt-10 flex flex-row gap-8 px-10 pb-6 items-center">
            <h1 className="text-3xl "> Your Cart</h1>
            <h1 className="text-lg text-gray-400 "> $0 USD</h1>
          </div>
          <button className="w-full bg-green-600 text-white py-4">CHECKHOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

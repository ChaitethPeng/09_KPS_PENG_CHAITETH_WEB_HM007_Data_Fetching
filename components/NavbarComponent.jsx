import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  return (
    <div className="striky">
      <nav className="absolute top-0 z-10 block w-full max-w-full px-4 py-2  text-white  rounded-none   h-max  lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-900">
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
          >
            <img
              className="pl-10"
              //
              src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden mr-4 lg:block">
              <ul className="flex flex-col gap-8 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-16">
                <li className="block p-2 rounded-md font-sans text-lg antialiased font-bold leading-normal text-white hover:bg-white hover:text-black">
                  <Link href="#" className="flex items-center">
                    Home
                  </Link>
                </li>
                <li className="block p-2 rounded-md font-sans text-lg text-white antialiased font-bold leading-normal  text-whit hover:bg-white hover:text-black">
                  <Link href="#" className="flex items-center">
                    Popular
                  </Link>
                </li>
                <li className="block p-2 rounded-md font-sans text-lg  antialiased font-bold leading-normal text-white hover:bg-white hover:text-black">
                  <Link href="#" className="flex items-center">
                    Romance
                  </Link>
                </li>
                <li className="blockp-2  p-2 rounded-md font-sans text-lg antialiased font-bold leading-normal  text-white hover:bg-white hover:text-black">
                  <Link href="#" className="flex items-center">
                    Anime
                  </Link>
                </li>
              </ul>
            </div>
            <div className="search__input  transition duration-300 ease-in-out hover:scale-105 border-[1px] border-solid bg-white border-rgray-200  flex flex-row items-center gap-5 p-1 mr-5 rounded-[10px]">
              {/* <label htmlFor="inputId">search</label> */}
              <input
                type="text"
                id="inputId"
                placeholder="Type to search ..."
                className="bg-whith outline-none border-none w-full py-1 pl-2 pr-3"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;

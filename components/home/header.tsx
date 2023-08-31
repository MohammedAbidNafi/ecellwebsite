/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import elnwt from "../../public/assets/ewnlt.png";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="">
        <img
          src="../../assets/banner2.png"
          alt=""
          className="lg:h-screen absolute -z-10 "
        />
      </div>
      <div className="flex justify-between md:flex-row md:justify-around pt-5 mb-24 header  ">
        <div>
          <Image src={elnwt} alt="" className="h-[100px] w-[100px]" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center justify-center px-3 mt-5 ">
            <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
              <Link href={""}>Events</Link>
            </li>
            <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
              <Link href={""}>Team</Link>
            </li>
            <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
              <Link href={""}>Gallery</Link>
            </li>
            <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
              <Link href={""}>Memberships</Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden text-right mr-5 transition duration-300 ease-in-out">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 12H5a1 1 0 010-2h14a1 1 0 110 2zM19 6H5a1 1 0 110-2h14a1 1 0 110 2zM19 18H5a1 1 0 010-2h14a1 1 0 110 2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16a1 1 0 100-2H4a1 1 0 100 2zm0 5h16a1 1 0 100-2H4a1 1 0 100 2zm0 5h16a1 1 0 100-2H4a1 1 0 100 2z"
                />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="md:w-1/2 text-right">
              <div>
                <ul>
                  <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={""}>Events</Link>
                  </li>
                  <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={""}>Team</Link>
                  </li>
                  <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={""}>Gallery</Link>
                  </li>
                  <li className="mx-3 text-xl font-semibold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#eb3c3b] via-[#525e8e] to-[#2c6ca4] hover:font-bold hover:underline">
                    <Link href={""}>Memberships</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

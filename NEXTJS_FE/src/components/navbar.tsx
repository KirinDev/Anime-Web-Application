"use client";

import { Silkscreen } from "next/font/google";
import { CiLogin } from "react-icons/ci";
import Link from "next/link";

const silkscreen = Silkscreen({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-center relative">
        <h1
          className={`${silkscreen.className} absolute text-[30px] left-1/2 transform -translate-x-1/2`}
        >
          Bonfire
        </h1>
        <div className="ml-auto flex items-center space-x-4">
          <div className="flex items-center bg-gray-700 text-white rounded-full py-2 px-4 focus-within:ring-2 focus-within:ring-gray-600">
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700 text-[12px] text-white focus:outline-none w-80 ml-2"
            />
          </div>
          <Link
            style={{ fontFamily: "Itim, cursive" }}
            className="bg-blue-900 cursor-pointer text-white text-[14px] text-center w-28 py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200 hover:scale-105"
            href="/login"
          >
            <span className="flex items-center justify-center">
              Sign In
              <CiLogin className="text-[20px] ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

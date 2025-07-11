"use client";

import Link from "next/link";
import React from "react";

export default function NavbarComponent() {
  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
  };
  return (
    <div className="z-50 fixed w-full h-16 flex justify-center items-center bg-white/30 backdrop-blur-md dark:bg-[#202023]/30">
      <div className="w-11/12 lg:w-3/4 xl:w-1/2 max-w-[768px] flex items-center justify-between dark:text-white text-gray-800">
        <div className="flex gap-8 items-center">
          <Link
            href={"/"}
            className="flex gap-2 items-center group cursor-pointer"
          >
            <div className="-rotate-12 group-hover:rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-heart dark:fill-white fill-gray-800 group-hover:fill-red-500"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
              </svg>
            </div>
            <h1 className="font-bold text-xl">Ege Yapici</h1>
          </Link>

          <div className="items-center hidden sm:flex gap-8">
            <Link href={"/works"} className="hover:underline transition-all">
              Works
            </Link>
            <Link
              href="mailto:yapiciege45@gmail.com"
              className="hover:underline transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
        <div
          onClick={toggleTheme}
          className="hidden dark:flex justify-center items-center cursor-pointer h-8 w-8 bg-yellow-200 rounded-md hover:bg-yellow-500 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-sun"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
          </svg>
        </div>

        <div
          onClick={toggleTheme}
          className="flex dark:hidden justify-center items-center cursor-pointer h-8 w-8 bg-purple-300 rounded-md hover:bg-purple-500 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-moon"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

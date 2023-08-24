"use client";
import Image from "next/image";
import React, { useState } from "react";

function Nav() {
  const [active, setActive] = useState("home");
  return (
    <nav className="nav">
      <div className="w-[100%] h-20 sm:h-[500px] sm:w-20 flex sm:flex-col items-center justify-evenly sm:pr-5">
        <div className="hidden sm:block hover:bg-gray-800 w-12 h-12 p-3 rounded-full cursor-pointer">
          <Image src={`/icon/icon.svg`} alt="" width={100} height={100} />
        </div>
        <button className="nav-icon">
          <Image
            src={`/nav/${active === "home" ? "on" : "off"}/home.svg`}
            onClick={() => setActive("home")}
            alt=""
            width={100}
            height={100}
          />
        </button>
        <button className="nav-icon">
          <Image
            src={`/nav/${active === "search" ? "on" : "off"}/search.svg`}
            onClick={() => setActive("search")}
            alt=""
            width={100}
            height={100}
          />
        </button>
        <button className="nav-icon">
          <Image
            src={`/nav/${active === "notif" ? "on" : "off"}/notif.svg`}
            onClick={() => setActive("notif")}
            alt=""
            width={100}
            height={100}
          />
        </button>
        <button className="nav-icon">
          <Image
            src={`/nav/${active === "message" ? "on" : "off"}/message.svg`}
            onClick={() => setActive("message")}
            alt=""
            width={100}
            height={100}
          />
        </button>
        <button className="nav-icon hidden sm:block">
          <Image
            src={`/nav/${active === "list" ? "on" : "off"}/list.svg`}
            onClick={() => setActive("list")}
            alt=""
            width={100}
            height={100}
          />
        </button>
        <a className="w-7 h-7 relative duration-300 sm:hover:bg-[#0a81d1] sm:w-14 sm:h-14 sm:p-3 sm:rounded-full hidden sm:block bg-[#1D9BF0]">
          <Image
            src={`/nav/tweet.svg`}
            onClick={() => setActive("message")}
            alt=""
            width={100}
            height={100}
          />
        </a>
      </div>
      <a className="w-7 h-7 duration-300 sm:w-14 sm:h-14 sm:p-3 sm:mb-10 sm:rounded-full hidden sm:block bg-slate-200">
        {/* <Image src={`/nav/tweet.svg`} alt="" width={100} height={100} /> */}
      </a>
    </nav>
  );
}

export default Nav;

"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { signOut } from "next-auth/react";
import Link from "next/link";

function Nav() {
  const [active, setActive] = useState("home");
  const [isUseractive, setIsUserActive] = useState(false);
  const { data: session } = useSession();

  const showProfile = () => {
    setIsUserActive(false);
  };
  const logOut = () => {
    signOut();
    setIsUserActive(false);
  };

  return (
    <nav className="nav">
      <div className="w-[100%] h-20 sm:h-[500px] sm:w-20 flex sm:flex-col items-center justify-evenly sm:pr-5">
        <Link
          href="/"
          className="hidden sm:block hover:bg-gray-800 w-12 h-12 p-3 rounded-full cursor-pointer"
        >
          <Image src={`/icon/icon.svg`} alt="" width={100} height={100} />
        </Link>
        <Link href="/" className="nav-icon">
          <Image
            src={`/nav/${active === "home" ? "on" : "off"}/home.svg`}
            onClick={() => setActive("home")}
            alt=""
            width={100}
            height={100}
          />
        </Link>
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
      <div className=" relative">
        {!session ? (
          <AiOutlineUser className=" fill-black" />
        ) : (
          <>
            <a
              onClick={() => setIsUserActive(!isUseractive)}
              className=" cursor-pointer w-7 h-7 duration-300 sm:w-14 sm:h-14  sm:mb-10 sm:rounded-full hidden sm:block bg-[#E7E9EA]"
            >
              <Image
                src={session?.user?.image!}
                alt=""
                width={100}
                height={100}
                className=" rounded-full"
              />
            </a>
            {isUseractive && (
              <div className="w-40 absolute -top-9 left-20 drop-shadow-[0_0px_10px_rgba(255,255,255,0.25)]">
                <Link href={"/profile"}>
                  <button
                    onClick={showProfile}
                    className="w-[100%] rounded-t-xl duration-300 py-2 text-lg hover:text-[#caccce] bg-black hover:bg-[#101010]"
                  >
                    Show Profile
                  </button>
                </Link>
                <button
                  onClick={logOut}
                  className=" rounded-b-xl duration-300 w-40 py-2 text-lg  text-red-500 hover:text-red-400 bg-black hover:bg-[#101010]"
                >
                  LogOut
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;

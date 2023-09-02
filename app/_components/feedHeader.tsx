"use client";
import React, { useState } from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";

function FeedHeader({ session }: any) {
  const [feedType, setFeedType] = useState("for-you");
  const [isUseractive, setisUseractive] = useState(false);

  const viewAccSet = (e: any) => {
    e.preventDefault();
    setisUseractive(!isUseractive);
  };

  return (
    <header className="feed-nav">
      <div className=" w-[100%] h-[70px]  flex items-center justify-center relative">
        <div className=" w-8 h-8 rounded-full absolute left-5 sm:hidden">
          <a href="" onClick={viewAccSet}>
            <Image
              src={session?.user?.image}
              alt=""
              width={100}
              height={100}
              className=" rounded-full"
            />
          </a>
          {isUseractive && (
            <div className="z-50 absolute top-12 font-semibold drop-shadow-[0_0px_10px_rgba(255,255,255,0.25)]">
              <button
                onClick={(e: any) => e.preventDefault()}
                className=" rounded-t-xl duration-300 w-32 py-3 text-sm sm:text-lg  text-gray-100  bg-black "
              >
                View Profile
              </button>
              <button
                onClick={() => signOut()}
                className=" rounded-b-xl duration-300  w-32 py-3 text-sm sm:text-lg  text-red-500  bg-black "
              >
                LogOut
              </button>
            </div>
          )}
        </div>
        <div className=" w-7 h-7 relative">
          <Image src={"/icon/icon.svg"} fill alt="" />
        </div>
      </div>
      <div className=" w-[100%] flex">
        <a className="feed-type" onClick={() => setFeedType("for-you")}>
          <span
            className={
              feedType === "for-you" ? "font-semibold" : "text-gray-400"
            }
          >
            For you
          </span>
          <div
            className={feedType === "for-you" ? "feed-type-active" : "hidden"}
          ></div>
        </a>
        <a className="feed-type" onClick={() => setFeedType("following")}>
          <span
            className={
              feedType === "following" ? "font-semibold" : "text-gray-400"
            }
          >
            Following
          </span>
          <div
            className={feedType === "following" ? "feed-type-active" : "hidden"}
          ></div>
        </a>
      </div>
    </header>
  );
}

export default FeedHeader;

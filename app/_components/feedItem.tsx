"use client";
import React, { useState } from "react";
import {
  AiTwotoneLike,
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { Timestamp } from "firebase/firestore";
import Image from "next/image";

function FeedItem({ tweet }: any) {
  const [like, setLike] = useState(false);
  const [viewMore, setViewMore] = useState(false);
  const timePosted = Timestamp.now().seconds - tweet.timestamp.seconds;
  let time = { unit: "s", show: 0 };

  if (Math.round(timePosted) < 60) {
    time.show = Math.round(timePosted);
    time.unit = "s";
  } else if (Math.round(timePosted) < 3600) {
    time.show = Math.round(timePosted / 60);
    time.unit = "m";
  } else if (Math.round(timePosted) < 86400) {
    time.show = Math.round(timePosted / 3600);
    time.unit = "h";
  } else {
    time.show = Math.round(timePosted / 86400);
    time.unit = "d";
  }

  // console.log(tweet);

  return (
    <div className=" border-y border-gray-500 w-[100%] flex space-x-3 sm:space-x-4 p-6 pr-3 relative">
      {viewMore && (
        <div className=" font-bold absolute bg-black flex flex-col drop-shadow-[0_0px_10px_rgba(255,255,255,0.25)] right-5 rounded-xl">
          <button className=" px-10 py-2" onClick={() => setViewMore(false)}>
            Follow
          </button>
          <button className=" px-10 py-2" onClick={() => setViewMore(false)}>
            Delete
          </button>
        </div>
      )}
      <div className="w-10 h-10 bg-slate-400 rounded-full">
        <Image
          src={tweet?.img}
          alt=""
          width={100}
          height={100}
          className=" rounded-full"
        />
      </div>
      <div className="h-[100%] flex-1 bg-slate-70 pr-5 flex flex-col space-y-3 max-w-[70%]">
        <div className=" flex items-center justify-between">
          <div className="flex space-x-2 items-center sm:justify-between text-sm ">
            <h3 className=" font-bold text-base truncate max-w-[25%] md:max-w-[45%]">
              {tweet.name}
            </h3>
            <h3 className=" font-thin text-gray-500 truncate max-w-[20%] md:max-w-[45%]">
              @{tweet.name}
            </h3>
            <h3 className="text-gray-500 font-bold text-xl ">&#183;</h3>
            <h3 className=" font-thin text-gray-500 ">
              {time.show} {time.unit}
            </h3>
          </div>
          <button
            className=" hover:bg-[#23246690] rounded-full"
            onClick={() => setViewMore(true)}
          >
            <AiOutlineEllipsis className="w-6 sm:w-7 h-6 sm:h-7 fill-[#919191] hover:fill-blue-500 duration-300" />
          </button>
        </div>
        <span className=" break-all max-w-[550px] text-[#dcdcdc]">
          {tweet.text}
        </span>
        <div className=" flex w-[100%] space-x-10 sm:space-x-14">
          <button
            className="group flex space-x-2 sm:space-x-4 items-center"
            onClick={() => setLike(!like)}
          >
            {like ? (
              <AiTwotoneLike className="w-4 sm:w-5 h-4 sm:h-5 fill-red-500" />
            ) : (
              <AiOutlineLike className="w-4 sm:w-5 h-4 sm:h-5 fill-[#919191] group-hover:fill-red-500   duration-300" />
            )}
            <span
              className={`text-sm sm:text-base ${
                like
                  ? "text-red-500"
                  : "text-[#919191] group-hover:text-red-500"
              } duration-300`}
            >
              {like ? tweet.like + 1 : tweet.like}
            </span>
          </button>
          <button
            className="group flex space-x-2 sm:space-x-4 items-center"
            onClick={() => tweet.comment + 1}
          >
            <AiOutlineComment className="w-4 sm:w-5 h-4 sm:h-5 fill-[#919191] group-hover:fill-blue-500 duration-300" />
            <span className=" text-sm sm:text-base text-[#919191] group-hover:text-blue-500  duration-300">
              {tweet.comment}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedItem;

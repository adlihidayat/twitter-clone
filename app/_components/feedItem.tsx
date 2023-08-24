import React, { useState } from "react";
import {
  AiTwotoneLike,
  AiOutlineLike,
  AiOutlineComment,
  AiOutlineEllipsis,
} from "react-icons/ai";

function FeedItem({ tweet }: any) {
  const [like, setLike] = useState(false);
  const [viewMore, setViewMore] = useState(false);

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
      <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
      <div className="h-[100%] flex-1 bg-slate-70 pr-5 flex flex-col space-y-3">
        <div className=" flex items-center justify-between">
          <div className="flex space-x-2 items-center">
            <h3 className=" font-bold">you</h3>
            <h3 className=" font-thin text-gray-500 ">@urUsername</h3>
          </div>
          <button
            className=" hover:bg-[#23246690] rounded-full"
            onClick={() => setViewMore(true)}
          >
            <AiOutlineEllipsis className="w-6 sm:w-7 h-6 sm:h-7 fill-white hover:fill-blue-500 duration-300" />
          </button>
        </div>
        <span className=" break-all max-w-[550px]">{tweet.text}</span>
        <div className=" flex w-[100%] space-x-10 sm:space-x-14">
          <button
            className="group flex space-x-2 sm:space-x-4 items-center"
            onClick={() => setLike(!like)}
          >
            {like ? (
              <AiTwotoneLike className="w-4 sm:w-5 h-4 sm:h-5 fill-red-500" />
            ) : (
              <AiOutlineLike className="w-4 sm:w-5 h-4 sm:h-5 fill-white group-hover:fill-red-500   duration-300" />
            )}
            <span
              className={`text-sm sm:text-base ${
                like ? "text-red-500" : "text-white group-hover:text-red-500"
              } duration-300`}
            >
              {like ? tweet.like + 1 : tweet.like}
            </span>
          </button>
          <button
            className="group flex space-x-2 sm:space-x-4 items-center"
            onClick={() => tweet.comment + 1}
          >
            <AiOutlineComment className="w-4 sm:w-5 h-4 sm:h-5 fill-white group-hover:fill-blue-500 duration-300" />
            <span className=" text-sm sm:text-base text-white group-hover:text-blue-500  duration-300">
              {tweet.comment}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedItem;

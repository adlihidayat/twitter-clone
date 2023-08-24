import React from "react";
import Image from "next/image";

type props = {
  feedType: string;
  setFeedType: React.Dispatch<React.SetStateAction<string>>;
};

function FeedHeader({ feedType, setFeedType }: props) {
  return (
    <header className="feed-nav">
      <div className=" w-[100%] h-[70px]  flex items-center justify-center relative">
        <div className=" w-8 h-8 bg-slate-200 rounded-full absolute left-5"></div>
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

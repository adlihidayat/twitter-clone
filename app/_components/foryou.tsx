import React from "react";
import FeedItem from "./feedItem";

type props = {
  item: Object;
  index: any;
};

const loop = (tweetList: any) => {
  for (let i = 0; i < tweetList.length; i++) {
    <p key={i}>{tweetList[i].text}</p>;
  }
};

function Foryou({ tweetList }: any) {
  return (
    <div className=" max-w-2xl bg-black flex flex-col items-center  mt-[110px] sm:mt-0 pb-20 sm:pb-0">
      {tweetList.map((item: any) => (
        <FeedItem key={tweetList.indexOf(item)} tweet={item} />
      ))}
    </div>
  );
}

export default Foryou;

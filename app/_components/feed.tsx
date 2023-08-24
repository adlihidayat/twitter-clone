"use client";

import React, { useState, useEffect } from "react";
import Foryou from "./foryou";
import Tweet from "./tweet";
import FeedHeader from "./feedHeader";

function Feed() {
  const a: string[] = ["a", "b"];
  const [feedType, setFeedType] = useState("following");
  const [tweet, setTweet] = useState({
    text: "",
    img: "",
    like: 0,
    comment: 0,
  });
  const [tweetList, setTweetList] = useState<
    { text: string; img: string; like: number; comment: number }[]
  >([]);

  useEffect(() => {
    (tweet.text !== "" || tweet.img !== "") &&
      setTweetList([...tweetList, tweet]);
  }, [tweet]);

  return (
    <section className="xl:mr-96 w-[100%] sm:w-[80vw]  max-w-2xl relative sm:border-r-[1px] border-[#e7e9ea70]">
      <FeedHeader setFeedType={setFeedType} feedType={feedType} />
      <Tweet setTweet={setTweet} />
      <Foryou tweetList={tweetList} />
    </section>
  );
}

export default Feed;

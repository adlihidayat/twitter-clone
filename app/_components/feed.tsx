"use client";
import React from "react";
import Foryou from "./foryou";
import Tweet from "./tweet";
import FeedHeader from "./feedHeader";
import Login from "./login";
import { useSession } from "next-auth/react";

const Feed = ({ Component, pageProps }: any) => {
  const { data: session } = useSession();
  // console.log(session);

  return (
    <section className="xl:mr-96 w-[100%] sm:w-[80vw]  max-w-2xl relative sm:border-r-[1px] border-[#e7e9ea70]">
      {!session ? (
        <Login />
      ) : (
        <>
          <FeedHeader session={session} />
          <Tweet session={session} />
          <Foryou />
        </>
      )}
      {/* {isLogin ? (
        <>
          <FeedHeader setFeedType={setFeedType} feedType={feedType} />
          <Tweet />
          <Foryou tweetList={tweet} />
        </>
      ) : (
        <Login />
      )} */}
    </section>
  );
};

export default Feed;

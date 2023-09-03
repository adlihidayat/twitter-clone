"use client";
import React from "react";
import Foryou from "./foryou";
import Tweet from "./tweet";
import FeedHeader from "./feedHeader";
import Login from "./login";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import TweetButton from "./TweetButton";

const Feed = ({ Component, pageProps }: any) => {
  const { data: session } = useSession();
  // console.log(session);

  return (
    <section className="xl:mr-96 w-[100%] sm:w-[80vw]  max-w-2xl  sm:border-r-[1px] border-[#e7e9ea70]">
      {!session ? (
        <Login />
      ) : (
        <>
          <FeedHeader session={session} />
          <div className="hidden sm:block">
            <Tweet session={session} />
          </div>
          <Foryou />
          <TweetButton />
        </>
      )}
    </section>
  );
};

export default Feed;

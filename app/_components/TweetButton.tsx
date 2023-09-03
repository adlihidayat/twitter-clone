import React from "react";
import Link from "next/link";
import Image from "next/image";

function TweetButton() {
  return (
    <Link
      href={"/tweet"}
      className="w-14 h-14 fixed bottom-28 right-8 sm:hidden"
    >
      <Image
        src={`/nav/tweet.svg`}
        alt=""
        width={100}
        height={100}
        className=" bg-blue-500 rounded-full p-2"
      />
    </Link>
  );
}

export default TweetButton;

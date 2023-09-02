"use client";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Widget from "../_components/widget";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Login from "../_components/login";
import React, { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../api/config";
import FeedItem from "../_components/feedItem";

function pages() {
  const { data: session } = useSession();
  const [tweet, setTweet] = useState<any[]>([]);

  useEffect(() => {
    // console.log(session?.user?.email!);
    const q = query(collection(db, "tweet"), orderBy("timestamp", "desc"));
    const readData = onSnapshot(q, (querySnapshot) => {
      let arr: object[] = [];
      querySnapshot.forEach((doc: any) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setTweet(arr);
    });
  }, []);

  return (
    <div className="lg:flex sm:ml-20 md:ml-20 lg:-mr-0 xl:mr-96">
      {!session ? (
        <Login />
      ) : (
        <div className="w-[100%] sm:w-[80vw]  max-w-2xl border-r border-gray-700">
          <header className=" py-3 flex space-x-4 px-4 w-[100%]">
            <button>
              <AiOutlineArrowLeft className=" " />
            </button>
            <div className="flex flex-col -space-y-1">
              <span className="text-[#E7E9EA] font-bold ">username</span>
              <span className=" text-gray-400 text-sm">post</span>
            </div>
          </header>
          <div className=" w-[100%] h-32 bg-gray-500"></div>
          <section className=" flex flex-col px-8 pt-[70px] pb-10 text-gray-500 relative">
            <div className="w-24 h-24 rounded-full bg-white absolute -top-10 border-2 border-black">
              <Image
                src={session?.user?.image!}
                alt=""
                width={100}
                height={100}
                className=" rounded-full"
              />
            </div>
            <span className="text-[#E7E9EA] font-bold text-xl">
              {session?.user?.name}
            </span>
            <span>{session?.user?.email}</span>
            <div className="flex space-x-4 mt-6 text-sm">
              <span>0 following</span>
              <span>0 follower</span>
            </div>
          </section>
          <section className="border-b border-gray-700 px-7 ">
            <div className=" pb-3 ml-3">Posts</div>
            <div className=" w-16 h-1 bg-blue-500 rounded-full"></div>
          </section>
          <main>
            {tweet.map(
              (item: any) =>
                session?.user?.email === item.username && (
                  <FeedItem key={tweet.indexOf(item)} tweet={item} />
                )
            )}
          </main>
        </div>
      )}
      <Widget />
    </div>
  );
}

export default pages;

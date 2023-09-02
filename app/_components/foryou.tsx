"use client";
import React, { useEffect, useState } from "react";
import FeedItem from "./feedItem";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../api/config";

function Foryou() {
  const [tweet, setTweet] = useState<any[]>([]);

  useEffect(() => {
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
    <div className=" max-w-2xl bg-black flex flex-col items-center  mt-[110px] sm:mt-0 pb-20 sm:pb-0">
      {tweet.map((item: any) => (
        <FeedItem key={tweet.indexOf(item)} tweet={item} />
      ))}
    </div>
  );
}

export default Foryou;

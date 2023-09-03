"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { AiOutlineClose } from "react-icons/ai";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db, storage } from "../api/config";
import Link from "next/link";
import {
  uploadBytes,
  getDownloadURL,
  ref,
  deleteObject,
} from "firebase/storage";

const Tweet = (session: any, setSubmit: any) => {
  const [tweetText, setTweetText] = useState("");
  const [emojiActive, setEmojiActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [tweetImg, setTweetImg] = useState<any>();
  const [tweetImgUrl, setTweetImgUrl] = useState("");
  const [tweetImgPreview, setTweetImgPreview] = useState<string>();
  const inputImg = useRef<HTMLInputElement>(null);

  const disableButton = () => {
    if (tweetText === "" && tweetImgPreview === "") {
      setIsDisabled(true);
    } else {
      setTimeout(() => {
        setIsDisabled(false);
      }, 5000);
    }
  };

  const post = async () => {
    try {
      await addDoc(collection(db, "tweet"), {
        name: session?.session?.user?.name,
        username: session?.session?.user?.email,
        text: tweetText,
        img: session?.session?.user?.image,
        imgTweet: tweetImgUrl,
        like: 0,
        comment: 0,
        timestamp: Timestamp.now(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setTweetText("");
    setTweetImgUrl("");
    setTweetImgPreview("");
  };

  // console.log(tweetImg.name);
  const onImageChange = async (e: any) => {
    disableButton();
    const [file] = e.target.files;
    setTweetImg(e.target.files[0]);
    setTweetImgPreview(URL.createObjectURL(file));
    const imageRef = ref(storage, `tweet/${e.target.files[0].name}`);
    await uploadBytes(imageRef, e.target.files[0]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setTweetImgUrl(url);
        // console.log("hasil :", tweetImgUrl);
      });
    });
  };
  const onTextChange = async (e: any) => {
    setTweetText(e.target.value);
    disableButton();
  };

  const activatingImage = (e: any) => {
    e.preventDefault();
    inputImg.current?.click();
  };

  const acticvatingEmoji = (e: any) => {
    e.preventDefault();
    setEmojiActive(!emojiActive);
  };

  const onEmojiClick = (e: any) => {
    setTweetText(tweetText + e.native);
  };
  const closeClick = (e: any) => {
    setTweetImgPreview("");
    const desertRef = ref(storage, `tweet/${tweetImg.name}`);
    deleteObject(desertRef)
      .then(() => {
        console.log("success delet img");
      })
      .catch((error: any) => {
        console.log("error delet img");
      });
  };

  return (
    <form className=" w-[100%] mt-28 border-b border-gray-500 sm:flex p-5">
      <div className=" w-12 h-12 bg-slate-200 rounded-full mr-5 mb-5 sm:mb-0">
        <Image
          src={session?.session?.user?.image}
          alt=""
          width={100}
          height={100}
          className=" rounded-full"
        />
      </div>
      <div className=" flex-1 bg-slte-100">
        <div className="flex flex-col items-start space-y-5 border-b border-gray-500 pb-5 text-sm sm:text-base">
          <button
            className=" text-blue-500 border border-blue-500 py-1 px-5 rounded-full text-xs sm:text-sm"
            disabled={true}
          >
            Everyone
          </button>
          <input
            type="text"
            placeholder="what is happening?!"
            className=" bg-transparent text-2xl outline-none w-[100%] break-words max-w-[570px]"
            value={tweetText}
            onChange={onTextChange}
          />
          {tweetImgPreview && (
            <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] relative bg-slae-100">
              <button
                onClick={closeClick}
                className=" bg-[#07070784] hover:bg-[#07070767] duration-300 absolute rounded-full z-20 right-5 top-5 p-2"
              >
                <AiOutlineClose className=" fill-white  w-5 h-5 " />
              </button>
              <Image
                src={tweetImgPreview}
                alt=""
                fill
                className="rounded-xl z-10"
              />
            </div>
          )}
          <button className="text-blue-500 font-bold" disabled={true}>
            Only people you mention can reply
          </button>
        </div>
        <div className="pt-2 flex justify-between items-center relative">
          <div className="flex space-x-3">
            <button
              className="w-5 h-5 disabled:opacity-60"
              disabled={false}
              onClick={activatingImage}
            >
              <Image src={"/tweet/image.svg"} alt="" width={100} height={100} />
            </button>
            <input
              type="file"
              accept="image/*"
              ref={inputImg}
              className="hidden"
              onChange={onImageChange}
            />
            <button className="w-5 h-5 disabled:opacity-60" disabled={true}>
              <Image src={"/tweet/gif.svg"} alt="" width={100} height={100} />
            </button>
            <button className="w-5 h-5 disabled:opacity-60" disabled={true}>
              <Image src={"/tweet/poll.svg"} alt="" width={100} height={100} />
            </button>
            <button
              className="w-5 h-5 disabled:opacity-60 relative"
              disabled={false}
              onClick={acticvatingEmoji}
            >
              <Image
                src={"/tweet/emo.svg"}
                alt=""
                width={100}
                height={100}
                className=""
              />
            </button>
            <div
              className={`${
                emojiActive ? "block" : "hidden"
              } absolute top-14 -left-3 z-40`}
            >
              <Picker data={data} onEmojiSelect={onEmojiClick} />
            </div>
            <button className="w-5 h-5 disabled:opacity-60" disabled={true}>
              <Image
                src={"/tweet/schedule.svg"}
                alt=""
                width={100}
                height={100}
              />
            </button>
            <button className="w-5 h-5 disabled:opacity-60" disabled={true}>
              <Image
                src={"/tweet/location.svg"}
                alt=""
                width={100}
                height={100}
              />
            </button>
          </div>
          <Link href={"/"}>
            <button
              disabled={isDisabled}
              type="button"
              onClick={post}
              className=" bg-[#3986f9] hover:bg-[#226ad7] duration-300 px-5 py-2 rounded-full font-bold disabled:opacity-50"
            >
              Post
            </button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Tweet;

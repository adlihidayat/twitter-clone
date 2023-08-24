import Image from "next/image";
import React, { useState, useRef } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { AiOutlineClose } from "react-icons/ai";

type props = {
  setTweet: any;
};

function Tweet({ setTweet }: props) {
  const [tweetText, setTweetText] = useState("");
  const [emojiActive, setEmojiActive] = useState(false);
  const [tweetImg, setTweetImg] = useState("");

  const inputImg = useRef<HTMLInputElement>(null);

  const post = () => {
    setTweet({
      text: tweetText,
      img: tweetImg,
      like: 0,
      comment: 0,
    });
    setTweetText("");
    setTweetImg("");
  };

  const onImageChange = (e: any) => {
    const [file] = e.target.files;
    setTweetImg(URL.createObjectURL(file));
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

  return (
    <form className="hidden w-[100%] mt-28 border-b border-gray-500 sm:flex p-5">
      <div className=" w-12 h-12 bg-slate-200 rounded-full mr-5"></div>
      <div className=" flex-1 bg-slte-100">
        <div className="flex flex-col items-start space-y-5 border-b border-gray-500 pb-5">
          <button
            className=" text-blue-500 border border-blue-500 py-1 px-5 rounded-full text-sm"
            disabled={true}
          >
            Everyone
          </button>
          <input
            type="text"
            placeholder="what is happening?!"
            className=" bg-transparent text-2xl outline-none w-[100%] break-words max-w-[570px]"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          />
          {tweetImg && (
            <div className="w-[500px] h-[500px] relative bg-slae-100">
              <button
                onClick={() => setTweetImg("")}
                className=" bg-[#07070784] hover:bg-[#07070767] duration-300 absolute rounded-full z-20 right-5 top-5 p-2"
              >
                <AiOutlineClose className=" fill-white  w-5 h-5 " />
              </button>
              <Image src={tweetImg} alt="" fill className="rounded-xl z-10" />
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
          <button
            type="button"
            onClick={post}
            className=" bg-[#3986f9] hover:bg-[#226ad7] duration-300 px-5 py-2 rounded-full font-bold"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default Tweet;

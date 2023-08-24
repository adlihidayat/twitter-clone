import React from "react";
import Search from "./search";
import Image from "next/image";

function TrendingItem({ title }: any) {
  return (
    <div className=" px-5 bg-slate-00 hover:bg-[#23252b] duration-300 text-sm text-gray-500 py-5 flex justify-between">
      <div>
        <span>Trending in Indonesia</span>
        <h2 className=" text-lg font-bold text-[#E7E9EA]">{title}</h2>
        <span>8,909 posts</span>
      </div>
      <div className="w-7 h-7 ">
        <Image src={"/icon/more.svg"} alt="" width={100} height={100} />
      </div>
    </div>
  );
}

function UserItem({ username }: any) {
  return (
    <div className=" bg-slate-10 flex justify-between items-center px-5 py-5 hover:bg-[#23252b]">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-slate-100 rounded-full"></div>
        <div className="flex flex-col -space-y-1">
          <span className=" font-bold">{username}</span>
          <span className=" text-sm text-gray-400">@{username}</span>
        </div>
      </div>
      <button className="bg-[#E7E9EA] hover:bg-[#c9c9cb] duration-300 text-[#0f1419] py-[5px] px-4 rounded-full font-semibold tesm">
        Follow
      </button>
    </div>
  );
}

function Widget() {
  return (
    <section className="hidden fixed ml-[700px] xl:flex flex-col space-y-5 items-center w-[400px]  pt-10">
      <Search />
      <div className=" w-[90%] bg-[#16181c] rounded-2xl">
        <h2 className=" font-bold text-xl pt-5 px-5">Trends for you</h2>
        <TrendingItem title={"Libur"} />
        <TrendingItem title={"HUT78RI"} />
        <TrendingItem title={"MAKAN BANG !"} />
        <TrendingItem title={"seblak"} />
      </div>
      <div className=" w-[90%]  bg-[#16181c] rounded-2xl ">
        <h2 className=" font-bold text-xl pt-5 px-5">Who to follow</h2>
        <UserItem username={"x"} />
        <UserItem username={"facebook"} />
        <UserItem username={"linkedIn"} />
      </div>
      <p className=" w-auto text-gray-500 text-sm">
        Terms of Service&emsp; Privacy Policy&emsp; Cookie Policy
        <br /> Accessibility &emsp;Ads info&emsp; More &emsp;© 2023 X Corp.
      </p>
    </section>
  );
}

export default Widget;

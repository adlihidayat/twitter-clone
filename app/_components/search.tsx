import React from "react";

function Search() {
  return (
    <div className="w-[100%] flex justify-center">
      <input
        placeholder="Search"
        className="bg-[#202327] w-[90%] px-[8%]  py-3 rounded-full focus:border-blue-400 focus:border outline-0 "
      />
    </div>
  );
}

export default Search;

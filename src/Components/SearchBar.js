import React, { useState, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const searchRef = useRef(null);
  console.log("searchValue", searchValue);
  return (
    <div className="border mt-6 border-slate-200 flex items-center gap-5 w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2 basis-full"
        type="text"
        name="search"
        placeholder="Search"
        value={searchValue}
        ref={searchRef}
        onChange={({ target: { value } }) => {
          setSearchValue(value);
        }}
      />
      {searchValue && (
        <button
          className={`cursor-pointer grid place-items-center ml-auto p-1.5  rounded-full ${
            !searchValue ? "bg-gray-200" : "bg-red-300"
          }`}
          disabled={!searchValue}
          onClick={() => {
            setSearchValue("");
            searchRef.current.focus();
          }}
        >
          <MdClear />
        </button>
      )}
      <span className="h-6 cursor-pointer grid place-items-center ml-auto">
        <AiOutlineSearch />
      </span>
    </div>
  );
}

export default SearchBar;

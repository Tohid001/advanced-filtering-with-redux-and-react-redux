import React, { useState } from "react";
import { AiTwotoneFilter } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters, clearFilters } from "../redux/Filters/actions";
import { SearchBar, Authors, Categories, DurationSlider } from "../Components";

function Filters() {
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const isFilter = Object.keys(filters).some((key) => {
    return filters[key] && filters[key].length > 0;
  });

  console.log("filters", isFilter);

  //searchBar HAndler
  const filterBySearchHandler = (text) => {
    dispatch(updateFilters("searchText", text));
  };

  //clear handler
  const clearFiltersHandler = () => {
    dispatch(clearFilters());
  };

  //category handler
  //author handler
  //duration handler

  return (
    <div className="relative my-6 flex justify-center items-end">
      <div className="absolute top-1/2 -translate-y-1/2 left-10">
        <div className=" flex gap-8">
          <button
            className={`cursor-pointer p-2.5 outline outline-offset-2 ${
              showFilterPanel ? " outline-blue-500" : "outline-blue-200"
            }`}
            onClick={() => {
              setShowFilterPanel(!showFilterPanel);
            }}
          >
            <AiTwotoneFilter />
          </button>
          <button
            className={`cursor-pointer p-2.5 text-white  ${
              isFilter ? "bg-red-400" : "bg-gray-300"
            } rounded-sm`}
            onClick={clearFiltersHandler}
            disabled={!isFilter}
          >
            Clear Filter
          </button>
        </div>
        {showFilterPanel && (
          <div className="absolute rounded-md top-full translate-y-[5px] w-60 bg-zinc-300 break-words overflow-y-auto h-[450px] flex flex-col space-y-10">
            <Categories />
            <Authors />
            <DurationSlider />
          </div>
        )}
      </div>
      <SearchBar filterBySearchHandler={filterBySearchHandler} />
    </div>
  );
}

export default Filters;

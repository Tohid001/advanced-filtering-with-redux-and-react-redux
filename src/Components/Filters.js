import React, { useState, useEffect } from "react";
import { AiTwotoneFilter } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters, clearFilters } from "../redux/Filters/actions";
import { SearchBar, RadioFilter, DurationSlider } from "../Components";

function Filters() {
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const { filters, blogs } = useSelector((state) => state);
  const dispatch = useDispatch();

  const categories = Array.from(new Set(blogs.map((blog) => blog.category)));
  const authors = Array.from(new Set(blogs.map((blog) => blog.author.name)));
  const durations = Array.from(new Set(blogs.map((blog) => blog.duration)));
  const durationRange = [0, Math.max(...durations)];

  const isFilter = Object.keys(filters).some((key) => {
    return filters[key] && filters[key].length > 0;
  });

  //searchBar HAndler
  const filterBySearchHandler = (text) => {
    dispatch(updateFilters("searchText", text));
  };

  //category handler
  const categoryHandler = (category) => {
    dispatch(updateFilters("category", category));
  };

  //author handler
  const authorHandler = (author) => {
    dispatch(updateFilters("author", author));
  };
  //duration handler
  const durationHandler = (duration) => {
    dispatch(updateFilters("duration", duration));
  };

  //clear handler
  const clearFiltersHandler = () => {
    dispatch(clearFilters());
  };

  useEffect(() => {
    !isFilter && setShowFilterPanel(false);
  }, [isFilter]);

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
            <AiTwotoneFilter style={{ fontSize: "24px" }} />
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
          <div
            className={`text-white  absolute z-40 rounded-md top-full translate-y-[5px] w-60 bg-black break-words overflow-y-auto h-[450px] flex flex-col space-y-5 p-5`}
          >
            <RadioFilter
              options={categories}
              handler={categoryHandler}
              type="category"
            />
            <RadioFilter
              options={authors}
              handler={authorHandler}
              type="author"
            />

            <DurationSlider
              durationHandler={durationHandler}
              durationRange={durationRange}
            />
          </div>
        )}
      </div>
      <SearchBar filterBySearchHandler={filterBySearchHandler} />
    </div>
  );
}

export default Filters;

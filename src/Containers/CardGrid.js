import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilters } from "../redux/Filters/actions";
import { Card } from "../Components";

function CardGrid() {
  const dispatch = useDispatch();
  const { blogs, filters } = useSelector((state) => state);
  const { searchText } = filters;
  const shouldDisplay = (blog) => {
    const keys = ["title", "name", "category"];
    let matchSearchedText = keys.some(
      (key) =>
        blog[key]?.toLowerCase().includes(searchText) ||
        blog.author[key]?.toLowerCase().includes(searchText)
    );

    return matchSearchedText;
  };

  const updateCategories = (category) => {
    dispatch(updateFilters("category", category));
  };
  const updateAuthors = (author) => {
    dispatch(updateFilters("author", author));
  };

  const filteredBLogs = blogs.filter(shouldDisplay);

  return (
    <div>
      <div className="flex p-7 justify-center bg-slate-200 font-bold mt-5">{`${filteredBLogs.length} items found`}</div>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {blogs.filter(shouldDisplay).map((blog) => (
          <Card key={blog.blogId} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;

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
    let matchSearchedText = !searchText
      ? true
      : keys.some(
          (key) =>
            blog[key]?.toLowerCase().includes(searchText) ||
            blog.author[key]?.toLowerCase().includes(searchText)
        );
    let matchCategory = !filters.category
      ? true
      : filters.category === blog.category;
    let matchAuthor = !filters.author
      ? true
      : filters.author === blog.author.name;

    let matchDuration =
      filters.duration && filters.duration.length == 0
        ? true
        : blog.duration > filters.duration[0] &&
          blog.duration < filters.duration[1];

    return matchSearchedText && matchAuthor && matchCategory && matchDuration;
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
          <Card
            key={blog.blogId}
            blog={blog}
            updateCategories={updateCategories}
            updateAuthors={updateAuthors}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;

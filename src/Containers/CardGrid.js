import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../Components";

function CardGrid() {
  const dispatch = useDispatch();
  const { searchText } = useSelector((state) => state.filters);
  const shouldDisplay = (blog) => {
    const keys = ["title", "name", "category"];
    let matchSearchedText = keys.some(
      (key) =>
        blog[key]?.toLowerCase().includes(searchText) ||
        blog.author[key]?.toLowerCase().includes(searchText)
    );

    return matchSearchedText;
  };

  const blogs = useSelector((state) => state.blogs);

  const filteredBLogs = blogs.filter(shouldDisplay);

  return (
    <div>
      <div>{`${filteredBLogs.length} items found`}</div>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {blogs.filter(shouldDisplay).map((blog) => (
          <Card key={blog.blogId} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;

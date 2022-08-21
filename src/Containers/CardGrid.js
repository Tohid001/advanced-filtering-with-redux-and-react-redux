import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../Components";

function CardGrid() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {blogs.map((blog) => (
        <Card key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default CardGrid;

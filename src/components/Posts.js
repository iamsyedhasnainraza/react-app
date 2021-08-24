import React from "react";
import Stories from "./Stories";
import Create from "./Create";
import Showposts from "./Showposts";

const Posts = () => {
  return (
    <div className="posts">
      <Stories />
      <Create />
      <Showposts />
    </div>
  );
};

export default Posts;

import React from "react";

const Blog = ({ SetBlogs }) => {
  // console.log(SetBlogs.imageUrl);

  return (
    <div className="all">
      <div className="cont">
        <div className="image-review">
          <img src={SetBlogs.imageUrl} alt="" />
        </div>
        <div className="blog-text">
          <h1>{SetBlogs.blogTitle}</h1>
          <p className="title">{SetBlogs.title}</p>
          <div className="read">
            <p>{SetBlogs.readtime}</p>
            </div>
        </div>
      </div>
      <div className="story">
        <blockquote>{SetBlogs.story}</blockquote>
      </div>
    </div>
  );
};
export default Blog;

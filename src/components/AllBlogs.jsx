import React from "react";
import { Link } from "react-router-dom";

const AllBlogs = ({ Blogg  }) => {
  return (
    <div className="card">
      <img src={Blogg.imageUrl} alt="" />
      <div className="content">
        <p>{Blogg.blogTitle}</p>
        <span>{Blogg.readtime}</span>
      </div>
      <p className="blog">
       {Blogg.blogDesc}
      </p>
      <button className="btn" type="submit">
        <Link className="btnclick" to={`/blog/${Blogg.blogTitle}`}>
          Read More!
        </Link>
      </button>
    </div>
  );
};

export default AllBlogs;

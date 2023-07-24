import AllBlogs from "../components/AllBlogs";

import { blogs } from "../pages/Data";


const Blogs = () => {
   
  return <div className="container">
     {blogs.map(blog => (
          <AllBlogs Blogg={blog} key={blog.id}/>
     ))}
  </div>
};

export default Blogs;

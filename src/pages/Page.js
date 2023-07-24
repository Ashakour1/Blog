import Blog from "../components/Blog";
import { blogs } from "./Data";



import { useParams } from "react-router-dom";

const Page = () => {
// console.log(title);
const { title } = useParams();
  const blog = blogs.find((blog) => blog.blogTitle === title);
  if (!blog) return <h1 className="notFound">Blog not found</h1>;
  
  return (
    
    <div>
        <Blog SetBlogs={blog} />
    </div>

   
  )


};
export default Page;

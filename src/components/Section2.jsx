import React from "react";
import AllBlogs from "./AllBlogs";


// import { createContext } from "vm";

// export const BlogContext = createContext();
const Bloggers = [
    {
        id:1,
        blogTitle: "Elon Musk",
        readtime : "3min Read",
        imageUrl : "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
        blockStory :"",
    },
    {
        id:2,
        blogTitle: "Elon Musk",
        readtime : "3min Read",
        imageUrl : "https://img.freepik.com/free-photo/black-friday-elements-white-background_23-2148665518.jpg?w=996&t=st=1689272322~exp=1689272922~hmac=f6fcdb6743776a715d77345ac8d5f9772682cdb622c6037c4c531af3e5f223dc",
        blockStory :"",
    },
    {
        id:3,
        blogTitle: "Elon Musk",
        readtime : "3min Read",
        imageUrl : "https://img.freepik.com/free-photo/black-friday-elements-white-background_23-2148665518.jpg?w=996&t=st=1689272322~exp=1689272922~hmac=f6fcdb6743776a715d77345ac8d5f9772682cdb622c6037c4c531af3e5f223dc",
        blockStory :"",
    },
    
]

const Section2 = () => {

  
    return (
           
        <div className="container">

            { Bloggers.map(blog => {
                console.log(blog);
                return <AllBlogs Blogg={blog} key={blog.id}/>

                
             } )};
           
        </div>
        
        
    );
}

export default Section2;

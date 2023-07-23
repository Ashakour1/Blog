import React from "react";
import { Link } from "react-router-dom";

const AllBlogs = ({Blogg}) =>{
    
    return (
        <div className="container">


  <div className="card" style={
        {
            minHeight: "100%",
            background:`linear-gradient(rgba(0, 0 , 0 , 0.1) , rgba(0, 0 , 0 ,0.1)) , url(${Blogg.imageUrl})`,
            backgroundSize : "cover",
        }
        
    }>
    <div className="content">
    <p>{}</p>
    <span>3min Read</span>
</div>
<p className="blog">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, et?</p>
<button  className="btn" type="submit"><Link className="btnclick" to="/blog">Learn More!</Link></button>
</div>
        </div>
      
    )
}

export default AllBlogs;
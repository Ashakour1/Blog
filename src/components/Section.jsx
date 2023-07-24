import React from "react";
import { Link } from "react-router-dom";
const Section =() =>{
    return (
        <div className="section">
            <h1>Welcome Our <span> blogs</span></h1>
            <p>As a Our blog is committed to providing their readers with <br /> high-quality content that is both informative and entertaining.</p>
            <button className="btn-read"><Link to="/blogs">Read More Our Blogs</Link></button>
        </div>
        
    )
}
export default Section;
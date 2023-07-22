import React from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";
// import { createContext } from "vm";

// export const BlogContext = createContext();

const Section2 = () => {

  
    return (
           
        <div className="container">
    
            <div className="card">
                <img src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg" alt="" />
                <div className="content">
                <p>ChatGpt</p>
                <span>3min Read</span>
            </div>
            <p className="blog">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, et?</p>
            <button  className="btn" type="submit"><Link className="btnclick" to="/blog">Learn More!</Link></button>
            </div>
            <div className="card">
                <img src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg" alt="" />
                <div className="content">
                <p>Mark Suckberg</p>
                <span>3min Read</span>
            </div>
            <p className="blog">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, et?</p>
            <button  className="btn" type="submit"><Link className="btnclick" to="/blog">Learn More!</Link></button>
            </div>
            <div className="card">
                <img src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg" alt="" />
                <div className="content">
                <p>Elon Musk</p>
                <span>5min Read</span>
            </div>
            <p className="blog">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, et?</p>
            <button className="btn" type="submit"><Link className="btnclick" to="/blog">Learn More!</Link></button>
            </div>
        </div>
        
        
    )
}

export default Section2;

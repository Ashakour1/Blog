import React from "react";
import "../Style.css";
import { Link } from "react-router-dom";
const  Header = () =>{
    return (

        <div className="header">
            <div className="logo">
              <Link className="logo" to="/">Blog Web App</Link>
            </div>
            <div className="menu">
            <Link to="/blogs">Blogs</Link>

            </div>
        </div>
    )
}

export default Header;
import React from "react";
import {Link} from "react-router-dom";
const Head = () => {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/Viewproducts">View Products</Link>
            
        </div>
    );
}   
export default Head;

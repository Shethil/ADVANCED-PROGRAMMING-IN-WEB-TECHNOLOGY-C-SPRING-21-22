import React from "react";
import {Link} from "react-router-dom";
const Head = () => {
    return(
        <div>
            <Link to="/">Home</Link>            
            <Link to="/contact">contact</Link>            
            <Link to="/studentlist">studentlist</Link>            
        </div>
    );
}   
export default Head;
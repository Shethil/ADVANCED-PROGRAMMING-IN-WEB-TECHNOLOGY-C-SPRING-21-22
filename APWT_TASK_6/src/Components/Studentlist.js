import React from "react";
import {Link} from "react-router-dom";
import Student from './Student';
const Studentlist = () => {
    return(

        <div>
                <Link to="/1"><Student name="nina" id ="1" cgpa ="3.5"/></Link>
                <Link to="/2"><Student name="zara" id ="2" cgpa ="3.7"/></Link>
                <Link to="/3"><Student name="lia" id ="3" cgpa="3.3"/></Link>
        </div>
    );
}
export default Studentlist;

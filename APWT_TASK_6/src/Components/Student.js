import React from "react"


const Student = (props) =>{
    return(
        <dive>
             
              <p>Student: <b>{props.name}</b> ID: <b>{props.id} </b> CGPA: <b>{props.cgpa}</b></p>
        </dive>
    );
}

export default Student;
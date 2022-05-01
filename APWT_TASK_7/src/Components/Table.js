import React, {useState, useEffect} from "react";
import axios from "axios";

const Table = ()=>{
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/view")
        .then(resp=>{
            console.log(resp.data);
            setPosts(resp.data);
        }).catch(err=>{
            console.log(err);
        });
    },[]);

    return(
        <div>
            { <table>
                <tr>
                    <th>Name</th>
                    <th>Code</th>
                    <th>Description</th>
                </tr>
                    {posts.map(post=>(
                <tr key={post.id}>
                    <td >{post.p_names}</td>
                    <td >{post.p_code}</td>
                    <td >{post.p_dese}</td>
                </tr>
                    ))}
            </table> }
            

        </div>
    )

}
export default Table; 

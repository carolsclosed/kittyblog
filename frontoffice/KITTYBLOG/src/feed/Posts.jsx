import React, { useState , useEffect } from "react";
import './Posts.css'

function Posts(){
const [posts, setPosts] = useState([]);

const fetchPosts = async (e) => {
    const token = localStorage.getItem('authToken');
    try {
        const response = await fetch("http://localhost:3001/feed", {
            
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                 "Authorization": `Bearer ${token}`
            }
            
        });
        const dataRes = await response.json(); // Parse the response JSON
        setPosts((prevPosts) => [...prevPosts, ...dataRes.posts]);
    } catch (error) {
        console.error("Erro no fetch: ", error);
    }
};

useEffect(()=>{
    fetchPosts();
}, []);

    return(
        <>
       
        <div id="posts">
            <div className="blank">
                
            </div>
            <div className="body">
            

                <div className="post">{
                posts.map((post)=> (
                
                <div key={post._id}>
                    <p>_______________________________________________________</p>
                    <h3> @{post.username}:</h3>
                    <p> "{post.content}"</p>
                    <h5> Data e Hora: {post.createdAt}</h5>
                </div>
             ))}
                </div>
            </div>
            <div className="blank">
                
            </div>
        </div>
        </>
    )
}
export default Posts
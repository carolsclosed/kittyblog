import React, { useState } from "react";
import './CreatePost.css'
import { Routes, Route, Link,useNavigate } from "react-router-dom";

import { use } from "react";

function CreatePost(){
    const [Content, setContent] = useState('')
    const [Error, setError] = useState('')
    const [Message, setMessage] = useState('')
    const [posts, setPosts] = useState([]);
    




    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('authToken'); 
    
        if (!token) {
          alert('You must be logged in to create a post.');
          return;
        }
    
        try {
          const response = await fetch("http://localhost:3001/create/post", {
              
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                content: Content,
            })
           
        })
        const data = await response.json()
          setMessage(data.message);
          setPosts([...posts, Content]); // Add the new post to the state
          setContent(''); // Clear input after submission
          alert('Post Published Successfully')
        } catch (err) {
          setError('Failed to create post. Please try again.');
        }
      };      
   
    return(
        <>
        <div id="allBody">
        <div id="Criar">
          <Link to="/feed">
          <button className="button2">
            Cancel
          </button>
          </Link>
            <form className="form" >
                <textarea className="textarea"
                value={Content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Meow Something..."
                rows="4"
                cols="50"
                />
                 <button className="button" onClick={handleSubmit}  >Publish</button>
             </form>
             
 {/*            <div className="posts">
                <h3>Your Posts</h3>

                {posts.map((post) => (
                <div key={post._id}>
                    <h4>{post.username}</h4>
                    <p>{post.content}</p>
                </div>
        ))} </div>*/}
      </div>
        </div>
        
        </>
    )
}
export default CreatePost
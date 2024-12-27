import React, { useState } from "react";
import './CreatePost.css'
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
          setError('You must be logged in to create a post.');
          return;
        }
    
        try {
          const response = await createPost(content, token);
          setMessage(response.message);
          setPosts([...posts, response.post]); // Add the new post to the state
          setContent(''); // Clear input after submission
        } catch (err) {
          setError('Failed to create post. Please try again.');
        }
      };
   
    return(
        <>
        <div id="Criar">
            <form className="form" onSubmit={handleSubmit}>
                <textarea className="textarea"
                value={Content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Meow Something..."
                rows="4"
                cols="50"
                />
                 <button className="submit" type="submit">Publish</button>
             </form>

             <div className="posts">
                <h3>Your Posts</h3>

                {posts.map((post) => (
                <div key={post._id}>
                    <h4>{post.username}</h4>
                    <p>{post.content}</p>
                </div>
        ))}
      </div>
        </div>
        </>
    )
}
export default CreatePost
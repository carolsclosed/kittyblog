import React, { useState } from "react";
import './CreatePost.css'
import {  Link } from "react-router-dom";

function CreatePost(){
    const [Content, setContent] = useState('')

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
      </div>
        </div>
        
        </>
    )
}
export default CreatePost
import React, { useState , useEffect } from "react";
import './Posts.css'

function Posts({ username }){

const [posts, setPosts] = useState([]);
const [userName, setUsername] = useState(username);

const fetchPosts = async () => {
    const token = localStorage.getItem('authToken');
    try {
        const response = await fetch("http://localhost:3001/find/user/feed", {
            
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                 "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                username: userName // Envia o username selecionado
              }),
            
        });
        const dataRes = await response.json(); // Parse the response JSON
        console.log(dataRes)
        setPosts([...posts, ...dataRes]);
        // Atualize o estado com os posts

    } catch (error) {
        console.error("Erro no fetch: ", error);
    }
};


useEffect(()=>{ 
    if (username) {
    fetchPosts(); // Busca os posts quando o username é atualizado
  }
}, [username]);


    return(
        <>
       
        <div id="posts">
            <div className="blank">
                
            </div>
            <div className="body">
            

                <div className="post">{
               posts.map((post) => (
                <div key={post._id}>
                    <p>_______________________________________</p>
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
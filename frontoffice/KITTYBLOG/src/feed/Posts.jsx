import React, { useState, useEffect } from "react";
import './Posts.css'

function Posts({ selectedUserId }) {
    const [posts, setPosts] = useState([]);
    const [fotoPerfil, setFotoPerfil] = useState("")


    const fetchPosts = async () => {

        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch("http://localhost:3001/feed", {

                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });


            const dataRes = await response.json();
            setPosts(dataRes.posts);
            setFotoPerfil(dataRes.fotoPerfil)


        } catch (error) {
            console.error("Erro no fetch: ", error);
        }
    }

    const fetchOtherPosts = async () => {

        const token = localStorage.getItem('authToken');
        try {
            const response = await fetch("http://localhost:3001/find/user/feed", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ userId: selectedUserId }),
            });
            const dataRes = await response.json();
            if (!dataRes.error) {
                setPosts(dataRes.posts);
                setFotoPerfil(dataRes.fotoPerfil)
            }
        } catch (error) {
            console.error("Erro no fetch: ", error);
        }
    }


    useEffect(() => {
        if (!selectedUserId || selectedUserId === "") {
            console.log("Fetching user posts")
            fetchPosts()
            return;
        }
        console.log("Fetching other posts")
        fetchOtherPosts()
    }, [selectedUserId]);


    console.log(posts)

    return (
        <>

            <div id="posts">
                <div className="blank">

                </div>
                <div className="body">


                    <div className="post">{
                        posts.map((post) => (

                            <div key={post._id} style={{ paddingLeft: "10px", borderTop: "1px solid black", position: "relative" }}>
                                {fotoPerfil !== "" && <img
                                    src={fotoPerfil}
                                    alt="Preview da Imagem de Perfil"
                                    className="imagem-perfil"
                                />}
                                <h3 style={{ marginLeft: "40px", position: "relative" }}>

                                    @{post.username}:
                                    <div style={{
                                        fontSize: "14px",
                                        position: "absolute", right: "10px", top: "5px"
                                    }}>

                                    </div>
                                </h3>
                                <p>{post.createdAt}</p>
                                <p> {post.content}
                                </p>
                                <div className="imagem-posts">
                                    {post.imagem && <img src={post.imagem} style={{ width: "100px", height: "100px" }} />}
                                </div>

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
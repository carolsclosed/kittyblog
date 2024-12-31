import React, { useState, useEffect } from "react";
import './Posts.css'

function Posts({ selectedUserId }) {
    const [posts, setPosts] = useState([]);


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
                setPosts(dataRes);
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
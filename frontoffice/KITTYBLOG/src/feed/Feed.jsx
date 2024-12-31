import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
function Feed() {
    const[selectedUserId, setselectedUserId]= useState('')
    return(
        <>
            <SearchBar setselectedUserId={setselectedUserId}></SearchBar>
            <Posts selectedUserId={selectedUserId}></Posts>
        </>
    )
}

export default Feed
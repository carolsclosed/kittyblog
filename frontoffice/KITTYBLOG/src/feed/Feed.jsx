import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CreatePost from "./CreatePost";
import Posts from "./Posts";
function Feed() {
    return(
        <>
            <SearchBar></SearchBar>
            <Posts></Posts>
        </>
    )
}

export default Feed
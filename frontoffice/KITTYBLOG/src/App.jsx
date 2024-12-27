import React from 'react'
import './App.css'
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import SignIn from './LogPage/SignIn';
import Posts from './feed/Posts';
import AboutUs from './feed/AboutUs';
import Login from './LogPage/Login';
import Feed from './feed/Feed';
import Register from './LogPage/Register';
import CreatePost from './feed/CreatePost';


function App() {

  return (
    <>
      <Routes>
      <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<Login />} />
        
      </Routes>
    </>
  )
}

export default App

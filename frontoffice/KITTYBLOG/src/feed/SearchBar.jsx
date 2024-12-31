import React, { useState } from "react";
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import Posts from "./Posts";
import './SearchBar.css'




function SearchBar({setselectedUserId}) {
    const [userName, setUsername] = useState('');
    const [data, setData] = useState([])
    const [userid, setUserid] = useState('')

    const onChangee = async (e) => {
        e.preventDefault()
        setUsername(e.target.value);
        try {
            if(e.target.value === ""){
                setData([])
                return;
            }
            const response = await fetch("http://localhost:3001/find/users", {
                
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: e.target.value
                })
                
            });
            const dataRes = await response.json(); 
            setData(dataRes)
            
            
    
        } catch (error) {
            console.error("Erro no fetch: ", error);
        }
    };

    const handleUserSelect = (user) => {
        setUsername(user.username); // Atualiza o campo de pesquisa
        setUserid(user._id)
        setselectedUserId(user._id)
        setData([]); // Esconde a lista de sugestões
      };


    return(
        <>
        <ul className="navbar">
            <li ><img src="./src/assets/logo2.jpeg" alt="logo" className="logo" /></li>
            
            <Link to="/">
            <li id="li" className="title">KITTYBLOG</li>
            </Link>
            <Link to="/feed">
            <li id="li">Home</li>
            </Link>
            <Link to="/create">
            <li id="li">Create</li>
            </Link>
            <li>
            <div className="search">
                <img  className="lupa" src="./src/assets/lupa.png" alt="lupa" />
                <div className="write" id="write">
                    <input type="text" placeholder="Pesquise um perfil" onChange={onChangee} value={userName}></input>
                    <button type="submit"  >Pesquisar</button>
                </div>
                </div>
               <div className="dropdown">{
                
                    data.map((user)=> (
                        <div  key={user._id}  onClick={() => handleUserSelect(user)}>
                        <p>@{user.username} </p>
                        </div>
                    ))
                    }
            </div>
            </li>
            <Link to="/about">
            <li >About Us</li>
            </Link>
            <li > <img  className="imgs" src="./src/assets/like.png" alt="like" /></li>
            <li > <img  className="imgs" src="./src/assets/gmail.png" alt="like" /></li>
        </ul> 
           

        
        </>
    )
}

export default SearchBar
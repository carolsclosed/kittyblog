import React, { useState } from "react";
import './SearchBar.css'




function SearchBar() {
    const [userName, setUsername] = useState("");
    const [data, setData] = useState([]);

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

    return(
        <>
        <ul className="navbar">
            <li ><img src="./src/assets/logo2.jpeg" alt="logo" className="logo" /></li>
            <li id="li" className="title">KITTYBLOG</li>
            <li id="li">Início</li>
            <li id="li">Criar</li>
            <li>
            <div className="search">
                <img  className="lupa" src="./src/assets/lupa.png" alt="lupa" />
                <div className="write" id="write">
                    <input type="text" placeholder="Pesquise um perfil" onChange={onChangee} value={userName}></input>
                    <button type="submit">Pesquisar</button>
                </div>
                </div>
            </li>
            <li id="li">About Us</li>
            <li > <img  className="imgs" src="./src/assets/like.png" alt="like" /></li>
            <li > <img  className="imgs" src="./src/assets/gmail.png" alt="like" /></li>
        </ul> 
            
                <div className="dropdown">{
                    
                        data.map((user)=> (
                            <div  key={user._id} onClick={(e) => setUsername(user.username)}>
                            {user.username} 
                            </div>
                        ))
                        }
                </div>
       
        
        </>
    )
}

export default SearchBar
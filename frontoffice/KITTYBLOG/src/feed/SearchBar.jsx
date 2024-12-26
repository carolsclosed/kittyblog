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
        <div className="search">
            <img  className="lupa" src="./src/assets/lupa.png" alt="" />
            <div className="write" id="write">
                <input type="text" placeholder="Pesquise um perfil" onChange={onChangee} value={userName}></input>
                <button type="submit">Pesquisar</button>
            </div>
            </div>
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
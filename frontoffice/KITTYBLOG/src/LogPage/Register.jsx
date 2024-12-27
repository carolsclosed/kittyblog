import React, { useState } from "react";
import { Routes, Route, Link,useNavigate } from "react-router-dom";

import "./Register.css"
import Login from "./Login";
import SignIn from "./SignIn";
function Register({ toggle }) {

    const [inputValue, setInputValue] = useState("")
    const [userName, setUsername] = useState("")
    const [passWord, setPassword] = useState("")
    const [imgPerfil, setImgPerfil] = useState("")
   
    const [base64String, setBase64String] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            console.log("Enter key pressed: ", inputValue);
            // depois colocar para enviar para a bd
        }
    };

    const Submit = async (e) => {
        e.preventDefault()
       /* mostrar na consola DADOS inserida */
        console.log("butão submit pressionado: ", { userName, passWord, base64String });
    
        try {

            const response = await fetch("http://localhost:3001/register", {
                
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: userName,
                    password: passWord,
                    imagemPerfil: base64String
                })
                
            });
            if(response.statusText === "OK"){
                navigate("/login");
                alert("Registo feito com sucesso!")
                
            }else if(response.statusText === "Conflict"){
                alert("Já existe um utilizador com este nome")
            }else{
                alert("Erro ao fazer o registo")
            }
            
        } catch (error) {
            console.error("Erro no fetch: ", error);
            
        }
    };


  const handleFileChange = (event) => {
    const file = event.target.files[0]; 
    if (file) {
          convertToBase64(file);
    }
  };
    
   const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64String(reader.result);
    };

    reader.readAsDataURL(file);
  };

    
    const FileOpen = (e) => {
        e.preventDefault();
        document.getElementById("file").click();
    }




    return (
        <>
 
                    
         <div id="bodyR">
            <form className="form1">
                <div className="boxlogon">
                    <div className="divlogon">
                        <h1 className="TEXT">Register</h1>
                        <input className="user" value={userName} onChange={(e)=>setUsername(e.target.value)} type="text" onKeyDown={handleKeyDown} placeholder="Username" />
                        <input className="pass" value={passWord} onChange={(e)=>setPassword(e.target.value)} type="text" onKeyDown={handleKeyDown} placeholder="Password" />
                        <button id="files" value={imgPerfil} onClick={FileOpen} >Imagem de Perfil</button>
                       
                        <div className="buttons">
                            <button id="submit1" type="submit" onClick={Submit}>Submit</button>
                            
                            <Link to="/">
                            <button id="cancel1">Cancel</button>
                            </Link>
                            

                        </div>
                    </div>
                </div>
                <input type="file" name="file" id="file" onChange={ handleFileChange}></input>
            </form>
            </div>
       </>
    )
};


export default Register

import React, { useState } from "react";
import "./SignIn.css"
import Feed from "../feed/Feed";
function SignIn({ toggle }) {


    const [inputValue, setInputValue] = useState("")
    const [userName, setUsername] = useState("")
    const [view, setView] = useState("login");
    const [passWord, setPassword] = useState("")

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            console.log("Enter key pressed: ", inputValue);
            // depois colocar para enviar para a bd
        }
    }

    const Submit = async (e) => {
        e.preventDefault()
       /* mostrar na consola DADOS inserida */
        console.log("butão submit pressionado: ", { userName, passWord });
    
        try {

            const response = await fetch("http://localhost:3001/login", {
                
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: userName,
                    password: passWord
                })
                
            });
            if(response.statusText==="Unauthorized"){
                alert("Utilizador ou senha inválidos")
            }

            if(response.statusText=="OK"){
                window.location.href = "/feed";
                setView("feed");
                if(view === "feed"){
                    
                }
            }

        } catch (error) {
            console.error("Erro no fetch: ", error);
        }
    };

    return (
            <>
       
       
          <body className="bodyS">
                <form className="form2">
                    <div className="boxSignIn">
                        <div className="divSignIn">
                            <h1 className="TEXT">Login</h1>
                            <input className="user"value={userName} onChange={(e)=>setUsername(e.target.value)} type="text" onKeyDown={handleKeyDown} placeholder="Username" />
                            <input className="pass" value={passWord} onChange={(e)=>setPassword(e.target.value)}  type="text" onKeyDown={handleKeyDown} placeholder="Password" />
                            <div className="buttons2">
                                <button id="cancel2">Cancel</button>
                                <button id="submit2" type="submit" onClick={Submit}>Submit</button>
                            </div>   
                        </div>
                    </div>
                </form>   
                  
                </body>
        
         </>
    )
}

export default SignIn
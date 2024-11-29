import React, { useState } from "react";
import "./Register.css"
function Register({ toggle }) {

    const [inputValue, setInputValue] = useState("")

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            console.log("Enter key pressed: ", inputValue);
            // depois colocar para enviar para a bd
        }
    };

    const Submit = async (e) => {
        e.preventDefault();
    
        const username = document.getElementById('user').value;
        const password = document.getElementById('pass').value;
       /* mostrar na consola data inserida */
        console.log("butão submit pressionado: ", { username, password });
    
        try {
            const response = await fetch("http://localhost:3001/register", {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
    
        } catch (error) {
            console.error("Erro no fetch: ", error);
        }
    };
    

    
    const FileOpen = (e) => {
        e.preventDefault();
        document.getElementById("file").click();

    }




    return (
        <>
            <form className="form1">
                <div className="boxlogon">
                    <div className="divlogon">
                        <h1 className="TEXT">Register</h1>
                        <input className="user" id="user" type="text" onKeyDown={handleKeyDown} placeholder="Username" />
                        <input className="pass" id="pass" type="text" onKeyDown={handleKeyDown} placeholder="Passoword" />
                        <button id="files" onClick={FileOpen}>Imagem de Perfil</button>
                        <div className="buttons">
                           
                            <button id="submit1" type="submit" onClick={Submit}>Submit</button>
                            <button id="cancel1">Cancel</button>
                           
                            {/*fazer js para detetar cancelamento de upload*/}
                            

                        </div>
                    </div>
                </div>
                <input type="file" name="file" id="file"></input>
            </form>
        </>
    )
};


export default Register
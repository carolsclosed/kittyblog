import React, { useState } from "react";
import "./Register.css"
function Register({ toggle }) {

    const [inputValue,setInputValue] = useState("")

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          e.preventDefault(); 
          console.log("Enter key pressed: ", inputValue);
          // depois colocar para enviar para a bd
        }
      };

      const stay = (e) => {
          e.preventDefault(); 
          console.log("Submit button pressed: ", inputValue);
          // depois colocar para enviar para a bd
        }
      
        const FileOpen = (e) =>{
            e.preventDefault();
            document.getElementById("file").click();
            
        }

    return (
        <>
            <form className="form1">
                <div className="boxlogon">
                    <div className="divlogon">
                        <h1 className="TEXT">Register</h1>
                        <input className="user" type="text" onKeyDown={handleKeyDown} placeholder="Username" />
                        <input className="pass" type="text" onKeyDown={handleKeyDown} placeholder="Passoword" />
                        <div className="buttons">
                            <button id="cancel1">Cancel</button>
                            <button id="submit1" type="submit" onClick={stay}>Submit</button>
                            {/*fazer js para detetar cancelamento de upload*/}
                            <button id="files" onClick={FileOpen}>Imagem de Perfil</button>
                           
                        </div>    
                   </div>
                </div>
                <input type="file" name="file" id="file"></input>     
            </form>
        </>
    )
}

export default Register
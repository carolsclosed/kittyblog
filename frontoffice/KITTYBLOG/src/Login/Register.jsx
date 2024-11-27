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
                            <div className="FotoPerfil">
                                <label htmlFor="file">FOTO</label>
                            <input id="foto" type="file" name="file"></input>
                            {/*fazer js para detetar cancelamento de upload*/}
                            </div>
                        </div>                  
                   </div>
                </div>
            </form>
        </>
    )
}

export default Register
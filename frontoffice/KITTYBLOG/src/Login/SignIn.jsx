
import React, { useState } from "react";

import "./SignIn.css"
function SignIn({ toggle }) {

    const [inputValue,setInputValue] = useState("")

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            console.log("Enter key pressed: ", inputValue);
            // depois colocar para enviar para a bd
        }
    }
    const stay = (e) => {
        e.preventDefault(); 
        console.log("Submit button pressed: ", inputValue);
        // depois colocar para enviar para a bd
      }

    return (
        <>
            <form className="form2">
                <div className="boxSignIn">
                    <div className="divSignIn">
                        <h1 className="TEXT">Login</h1>
                        <input className="user" type="text" onKeyDown={handleKeyDown} placeholder="Username" />
                        <input className="pass" type="text" onKeyDown={handleKeyDown} placeholder="Passoword" />
                        <div className="buttons2">
                            <button id="cancel2">Cancel</button>
                            <button id="submit2" type="submit" onClick={stay}>Submit</button>
                        </div>   
                    </div>
                </div>
            </form>
        </>
    )
}

export default SignIn
import React, { useState } from "react";
import "./Login.css"
import Register from "./Register";
import SignIn from "./SignIn";
export default function Login(){

    const[view, setView] = useState("");

    function togglePop(tipo){
       if(tipo==="login"){
        setView("login");
       }else{
        setView("register");
       }
    }
    

return(
    <>
  
    <body className="bodyL">
        <div className="boxLogin">
            <div className="divLogin">
                <h1 className="welcome">KittyBlog</h1>
                <button id="login" type="button" onClick={()=>setView("login")} >Login</button >
                <button id="register" type="button" onClick={()=>togglePop("register")} >Register</button>
                {view === "login" && <SignIn />}
                {view === "register" && <Register />}
            </div> 
                
        </div>
        </body>
    </>
)
}




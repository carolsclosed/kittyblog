import React, { useState } from "react";
import "./Login.css"
import SignIn from "./SignIn";
export default function Login()
{

    const[chooseSISO , setChooseSISO] = useState(null);
    function chooseSISOfunc(tipo){
        setChooseSISO(chooseSISO === tipo ? null : tipo)
    }

    
return(
    <>
    <div id="boxLogin">
            <div id="divLogin">
            <h1 id="welcome">KittyBlog</h1>
            
            <button id="login" onClick={()=>chooseSISOfunc("login")}>Login</button>
            {chooseSISO==="login" ? <SignIn toggle = {()=>chooseSISOfunc("login")}></SignIn>:null }
            <button id="register " onClick={()=>chooseSISOfunc("resgister")}>Register</button>
       
        </div>
    </div>
    </>
)
}




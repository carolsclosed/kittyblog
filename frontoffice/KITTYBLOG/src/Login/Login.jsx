import React, { useState } from "react";
import "./Login.css"
import Logon from "./Logon";
import SignIn from "./SignIn";
export default function Login(){

    const[logSig , setLogSig] = useState(null);

return(
    <>
    <div id="boxLogin">
            <div id="divLogin">
            <h1 id="welcome">KittyBlog</h1>
            
            <button id="login" onClick={()=>setLogSig("login")}>Login</button>

            {logSig==="login" &&  <SignIn  toggle = {()=>setLogSig(null)} />}

            <button id="register" onClick={()=>setLogSig("register")}>Register</button>
       
            {logSig==="register" &&  <Logon  toggle = {()=>setLogSig(null)} />}    

        </div>
    </div>
    </>
)
}




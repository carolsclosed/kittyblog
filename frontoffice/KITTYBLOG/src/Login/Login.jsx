import React, { useState } from "react";
import "./Login.css"
import Logon from "./Logon";
import SignIn from "./SignIn";
export default function Login({toggle}){

    const[logSig , setLogSig] = useState(null);

    function togglePop(tipo){
        if(tipo === logSig){
            setLogSig(null);
        }else{
            setLogSig(tipo);
        }
    }
    

return(
    <>
    <div id="boxLogin">
            <div id="divLogin">
            <h1 id="welcome">KittyBlog</h1>
            
            <button id="login" onClick={()=>togglePop("login")}>Login</button >

            {logSig==="login" &&  <Logon  toggle = {()=>setLogSig(null)} />}

            <button id="register" onClick={()=>togglePop("register")}>Register</button>
       
            {logSig==="register" &&  <SignIn  toggle = {()=>setLogSig(null)} />}    

        </div>
    </div>
    </>
)
}




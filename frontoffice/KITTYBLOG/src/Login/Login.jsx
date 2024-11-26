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
   
        <div className="boxLogin">
            <div className="divLogin">
                <h1 className="welcome">KittyBlog</h1>
                
                <button id="login" type="button" onClick={()=>togglePop("login")} >Login</button >
        
                {logSig==="login" &&  <Logon  toggle = {()=>togglePop("login")} />}

                <button id="register" type="button" onClick={()=>togglePop("register")} >Register</button>
        
                {logSig==="register" &&  <SignIn  toggle = {()=>togglePop("register")} />}   
            </div> 

        </div>
    </>
)
}




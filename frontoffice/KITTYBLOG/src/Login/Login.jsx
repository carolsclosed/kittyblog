import React, { useState } from "react";
import "./Login.css"
import Register from "./Register";
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
        
                {logSig==="login" &&  <SignIn  toggle = {()=>togglePop("login")} />}

                <button id="register" type="button" onClick={()=>togglePop("register")} >Register</button>
        
                {logSig==="register" &&  <Register  toggle = {()=>togglePop("register")} />}   

               
            </div> 

        </div>
    </>
)
}




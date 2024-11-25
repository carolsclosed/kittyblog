import "./Navbar.css"
import React from "react"
function Navbar(){
    return(
    
        <nav>     
            <ul>
                <li>
                <h1 > KITTYBLOG</h1>
                </li>


                <li >
                    <img className="centro" src='.\src\assets\lupa.png' width='20px'></img>       
                </li>
                <li >
                    <input  type='text' placeholder="Pesquisa" ></input>
                </li>


                <li className="direita">
                    <p  >Home</p>
                </li>
                <li className="direita">
                    <p >Meu Perfil</p>
                </li>
                <li className="direita">
                    <p > Feed</p>
                </li>
            </ul>   
            
        </nav>
        
    )
}

export default Navbar
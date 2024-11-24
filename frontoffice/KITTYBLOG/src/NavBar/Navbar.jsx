import "./Navbar.css"
import React from "react"
function Navbar(){
    return(
    <> <div id='navbar'>
        <nav  >     
            <ul >
                <li>
                <h1> KITTYBLOG</h1>
                </li>
                <li>
                    <div id='pesquisa'>
                        <img  src='.\src\assets\lupa.png' width='20px'></img>
                        <input  type='text' placeholder="Pesquisa" ></input>
                    </div>
                </li>
                <li >
                    <p>Home</p>
                </li>
                <li >
                    <p>Meu Perfil</p>
                </li>
                <li>
                    <p>Feed</p>
                </li>
                
            </ul>
        </nav>
        </div>
    </>
    )
}

export default Navbar
import React, { useState } from "react";
import { Routes, Route, Link,useNavigate } from "react-router-dom";

import './AboutUs.css'

function AboutUs(){
    return(
        <>
        <div id="all">
            <div id="aboutus">
            <div className="box">
                <h3>Trabalho realizado por:</h3>
            </div>
            <div  className="pessoas">
                     <img className="foto" src="./src/assets/angela.jpg" alt="" />
                     <img className="foto" src="./src/assets/catarina.jpg" alt="" />
            </div>
            <div  className="nomes">
                     <p className="angela">Ângela Sebastião</p>
                     <p className="catarina">Catarina Matos</p>
            </div>
            <div  className="emails">
                     <p>aluno25946@ipt.pt</p>
                     <p>aluno25976@ipt.pt</p>
            </div>
            <Link to="/feed">
            <button className="cancel">Go Back</button>
            </Link>
            </div>
        </div>
        </>
    );
}
export default AboutUs
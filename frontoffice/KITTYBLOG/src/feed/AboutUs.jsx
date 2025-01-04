import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import './AboutUs.css'

function AboutUs() {
    return (
        <>
            <div id="all">
                <div className="boxii">
                    <div id="aboutus">
                        <div className="box">
                            <h3>Trabalho realizado por:</h3>
                        </div>
                        <div className="pessoas">
                            <img className="foto" src="./src/assets/angela.jpg" alt="" />
                            <p className="angela">Ângela Sebastião</p>
                            <p>aluno25946@ipt.pt</p>
                        </div>
                        <Link to="/feed">
                            <button className="cancel">Go Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AboutUs
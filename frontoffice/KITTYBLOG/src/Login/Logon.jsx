import React from "react";
import "./Logon.css"
function Logon({ toggle }) {


    return (
        <>
            <form className="form">
                <div className="boxlogon">
                    <div className="divlogon">
                        <h1 className="TEXT">Log In</h1>
                        <input className="user" type="text" placeholder="Username" />
                        <input className="pass" type="text" placeholder="Passoword" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Logon
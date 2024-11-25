import React from "react";
import "./SignIn.css"
function SignIn({ toggle }) {


    return (
        <>
            <form className="form">
                <div className="boxSignIn">
                    <div className="divSignIn">
                        <h1 className="TEXT">Register</h1>
                        <input className="user" type="text" placeholder="Username" />
                        <input className="pass" type="text" placeholder="Passoword" />
                    </div>
                </div>
            </form>
        </>
    )
}

export default SignIn
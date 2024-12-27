import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Login.css";
import Register from "./Register";
import SignIn from "./SignIn";

export default function Login() {
    return (
        <div className="bodyL">
            <div className="boxLogin">
                <div className="divLogin">
                    <h1 className="welcome">KittyBlog</h1>
                    <nav>
                        <Link to="/login">
                            <button id="login" type="button">Login</button>
                        </Link>
                        <Link to="/register">
                            <button id="register" type="button">Register</button>
                        </Link>
                    </nav>
                </div>
            
            </div>
        </div>
    );
}

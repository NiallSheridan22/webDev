import React from 'react'
import image from "./Images/login.png";
import pass from "./Images/password.png";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';



export default function Login() {
    
    const menu = useNavigate('/HotDrinks');

    const navigateTomenu = () => {
        // 👇️ navigate to /contacts
        menu('/HotDrinks');
      };
    
    return (
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                            <img src={image} alt="profile" className="profile" />
                        </div>
                    </div>
                    <div>
                        <h1>Login Page</h1>
                        <div>
                            <input type="text" placeholder="user name" className="name" />
                        </div>
                        <div className="second-input">
                            <img src={pass} alt="pass" className="email" />
                            <input type="password" placeholder="password" className="name" />
                        </div>
                        <div className="login-button">
                            <button onClick={menu}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


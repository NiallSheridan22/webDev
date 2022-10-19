import React from 'react'
import image from "./Images/login.png";
import pass from "./Images/password.png";



export default function Login() {
    
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
                            <button>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import React from 'react';
import "./Login.css";

function Login() {
    const signIn = ()=>{
        auth.signInWithPopup(provider).catch((error) => alert(error.message));

    };
    return (
        <div className="login">
            <h2>DISCORD</h2>
            <div className="loginlogo">
                <img src="https://logo-logos.com/wp-content/uploads/2018/03/discord_icon_logo_remix_small.png" alt="Discord bot Logo" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login

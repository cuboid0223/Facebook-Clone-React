import React from 'react'
import { Button } from "@material-ui/core";
import {auth, provider} from '../firebase';


const Login = () => {
    const signIn = (e) => {
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result)
        }).catch(error => alert(error.message))
    }
    return (
      <div className="login">
        <div className="login__logo">
          <img
            src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
            alt="fb-logo"
          />
        </div>
        <Button type="submit" onClick={signIn}>
          登入
        </Button>
      </div>
    );
}

export default Login

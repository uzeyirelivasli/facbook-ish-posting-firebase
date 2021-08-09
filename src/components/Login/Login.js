import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {


    dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
    })

    });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;

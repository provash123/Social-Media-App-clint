import React, { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
// import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClicked = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginwrapper">
        <div className="loginleft">
          <h3 className="loginlogo">Lamasocial</h3>
          <span className="logindesc">
            Connect with friends and the world around you on Lamasocial
          </span>
        </div>
        <div className="loginright">
          <form className="loginbox" onSubmit={handleClicked}>
            <input
              placeholder="Email"
              type="email"
              className="logininput"
              ref={email}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="logininput"
              ref={password}
              required
              minLength="6"
            />
            <button className="loginbutton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "login"
              )}
            </button>
            <span className="loginforgot">Forgot Password</span>
            
            <button className="loginregisterbutton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a account"
              )}
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

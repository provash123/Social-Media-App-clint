import React,{useRef} from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory()

  const handleClicked = async (e) => {
    e.preventDefault();
    if(passwordAgain.current.value !== password.current.value){
      passwordAgain.current.setCustomValidity("password doesn't match")

    }else{
      const user ={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value
      
     }
      try{
        await axios.post("/auth/register",user)
        history.push("/login")
      }catch(err){
        console.log(err)

      }
    }
    
  }
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
          <form className="loginbox" onSubmit={handleClicked} >
            <input placeholder="Username" required ref={username} className="logininput" />
            <input placeholder="Email" required ref={email} type="email" className="logininput" />
            <input placeholder="Password" required ref={password} minLength="6" type="password" className="logininput" />
            <input placeholder="Password Again" required ref={passwordAgain} type="password" className="logininput" />

            <button className="loginbutton" type="submit">Sign Up</button>
            <button className="loginregisterbutton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

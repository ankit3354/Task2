import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
import { FaRegCircleUser } from "react-icons/fa6";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="Login-container">
      <div className="box">
        <h1 className="title">Ankit's APP</h1>
      </div>
      <div className="box login-wrapper">
        <div className="login-signup">
          <p className="login-text">
            <span>
              <FaRegCircleUser />
            </span>
            Login or Sign Up
          </p>
          <div className="login">
            <button className="login-btn" onClick={(e) => loginWithRedirect()}>
              Login
            </button>
            <button className="sign-btn" onClick={(e) => loginWithRedirect()}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

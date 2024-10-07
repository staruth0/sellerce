import React, { useState } from "react";
import "./login.css";
import eyeCrossed from "../../assets/icons/eye-crossed.svg";
// import eye from "../../assets/icons/eye.svg";
import googleIcon from "../../assets/icons/Google__G__logo.svg";
import appleIcon from "../../assets/icons/apple_logo.svg";
import Navbar from "../../layout/Navigation/navbar";
import { Link } from "react-router-dom";

import { useAuth } from "../../utils/Authentication/AuthContext";
import Popup from "../../commons/popUp/popUp";
import handleApiError from "../../utils/handleApiError";

const LoginComponent = ({redirectTo}) => {
  const { handleLogin} = useAuth();
  const [blurBackground, setBlurBackground] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messagelocal, setMessage] = useState("");
  const [loginButtonClicked,setLoginButtonClicked]=useState(false)
  const [isError, setIsError]=useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("")
    setLoginButtonClicked(true);
    handleLogin(email, password,redirectTo,setMessage,setIsError,handleApiError);
  };
  return (
    <div>
      <div className="main-login-container">
        <div className="main__center__box">
          <div className="left__login__details">
            <div className="left__sub">
              <h1>Sign In</h1>
              <form onSubmit={handleSubmit} className="login__form">
                <label htmlFor="emailInput" className="bold__label email">
                  Email
                  <input
                    type="email"
                    id="emailInput"
                    className={!loginButtonClicked||(loginButtonClicked && email)?"":"empty-email"}
                    placeholder="e.g. JohnDoe@gmail.com"
                    autoComplete="on"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value);}}
                  />
                  <span className="error__message error__email"></span>
                </label>
                <label htmlFor="passwordInput" className="bold__label password">
                  Password
                  <input
                    type="password"
                    id="passwordInput"
                    className={!loginButtonClicked || (loginButtonClicked && password)?"":"empty-password"}
                    placeholder="password"
                    autoComplete="one"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <img
                    src={eyeCrossed}
                    alt=" "
                    className="form__icon"
                  />
                  <span className="error__message error__password"></span>
                </label>
                <div className="loggedIn__forgot">
                  <div className="checkbox-wrapper-2">
                    <label
                      htmlFor="stayLoggedIn"
                      className="stay-logged-in"
                    >
                      <input
                        type="checkbox"
                        className="sc-gJwTLC ikxBAC"
                        id="stayLoggedIn"
                      />
                      Stay logged in
                    </label>
                  </div>
                  <Link to="/verify-reset/reset-password/email" className="forgotten__pass">
                    Forgot password?
                  </Link>
                </div>
                {(messagelocal && !isError) && (<div className="success-message">{messagelocal}</div>)}
                {(messagelocal && isError) && (<div className="error-message">{messagelocal}</div>)}
                {messagelocal &&
                  (<Popup 
                      isError={isError}
                      message={messagelocal}
                      autoCloseTime='2000'
                      actionText='OK'
                  />)
                  }
                <input
                  type="submit"
                  id="submit__login"
                  value="Sign in"
                  className="primary-btn"
                />
              </form>
              <span>
                Do not have an account?
                <Link id="register" to="/register">
                  Register
                </Link>
              </span>
              <div className="third__party">
                <div className="division__line">
                  <div className="line"></div>
                  <span>OR</span>
                  <div className="line"></div>
                </div>
                <div className="third__party__buttons">
                  <button id="sigIn__Google">
                    <img
                      src={googleIcon}
                      alt="google"
                      className="third__party__icons"
                    />
                    Continue with Google
                  </button>
                  <button id="sigIn__Apple">
                    <img
                      src={appleIcon}
                      alt="apple"
                      className="third__party__icons"
                    />
                    Continue with Apple
                  </button>
                  <Link to="/" id="Back-to-shop">
                    Return to Shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar heroHeight={0} setBlurBackground={setBlurBackground} blurBackground={blurBackground} />
    </div>
  );
};

export default LoginComponent;
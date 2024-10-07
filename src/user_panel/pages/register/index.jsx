import React, { useEffect, useState } from "react";
import "../login/login.css";
import eyeCrossed from "../../assets/icons/eye-crossed.svg";
import eye from "../../assets/icons/eye.svg";
import googleIcon from "../../assets/icons/Google__G__logo.svg";
import appleIcon from "../../assets/icons/apple_logo.svg";
import Navbar from "../../layout/Navigation/navbar";
import { Link } from "react-router-dom";
import backendBaseURL from "../../utils/backendBaseURL";
import handleApiError from "../../utils/handleApiError.js";
import Popup from "../../commons/popUp/popUp.jsx";

const RegisterComponent = () => {
	const [blurBackground, setBlurBackground] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError]=useState(false);
	const [registerResponse, setRegisterResponse] = useState(null);
    const [emailResponse, setEmailResponse] = useState(null);
    const [loginButtonClicked,setLoginButtonClicked]=useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoginButtonClicked(true);
        // Reset message state
        setMessage('');

        // // Validate inputs
        // if (!name || !email || !password) {
        //     setMessage('All fields are required');
        //     setIsError(true);
        //     return;
        // }

        try {
            // Make API call to register user
            const response = await backendBaseURL.post('/auth/register', { name, email, password });
            setRegisterResponse(response.data);
        } catch (error) {
            setMessage(handleApiError(error,setIsError))
        }
    };

    useEffect(() => {
        if (registerResponse) {
            // Extract user data and tokens from registerResponse
            const { user, tokens } = registerResponse;

            // Send verification email with access token in the header
            backendBaseURL.post('/auth/send-verification-email', {}, {
                headers: {
                    'Authorization': `Bearer ${tokens.access.token}`
                }
            })
            .then(response => {
                setEmailResponse(response.data);
                setMessage('Verification email has been sent');
                setIsError(false);
                setName("");
                setEmail("");
                setPassword("");
            })
            .catch(error => {
                setMessage(handleApiError(error,setIsError))
            });
        }
    }, [registerResponse]); // Trigger effect when registerResponse changes

    


    return (
        <div>
            <div className={blurBackground?"blur-background main-login-container":"main-login-container"}>
                <div className="main__center__box">
                    <div className="left__login__details">
                        <div className="left__sub">
                            <h1>Register</h1>
                            <form onSubmit={handleSubmit} className="login__form">
                                <label htmlFor="nameInput" className="bold__label email">
                                    Name
                                    <input
                                        type="text"
                                        id="nameInput"
                                        placeholder="e.g. John Doe"
                                        autoComplete="on"
                                        value={name}
                                        className={!loginButtonClicked||(loginButtonClicked && name)?"":"empty-name"}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                                <label htmlFor="emailInput" className="bold__label email">
                                    Email
                                    <input
                                        type="email"
                                        id="emailInput"
                                        placeholder="e.g. JohnDoe@gmail.com"
                                        autoComplete="on"
                                        value={email}
                                        className={!loginButtonClicked||(loginButtonClicked && email)?"":"empty-email"}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                                <label htmlFor="passwordInput" className="bold__label password">
                                    Password
                                    <input
                                        type="password"
                                        id="passwordInput"
                                        placeholder="password"
                                        autoComplete="one"
                                        value={password}
                                        className={!loginButtonClicked||(loginButtonClicked && password)?"":"empty-password"}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <img
                                        src={eyeCrossed}
                                        alt="crossed-eye"
                                        className="form__icon"
                                    />
                                </label>
                                {(message && !isError) && (<div className="success-message">{message}</div>)}
                                {(message && isError) && (<div className="error-message">{message}</div>)}
                                {message &&
                                    (<Popup
                                        isError={isError}
                                        message={message}
                                        autoCloseTime='2000'
                                        actionText='OK'
                                    />)
                                    }
                                <input
                                    type="submit"
                                    id="submit__register"
                                    value="Register"
                                    className="primary-btn"
                                />
                            </form>
                            <span>
                                Already own an account?
                                <Link id="register" to='/login'>
                                    Sign in
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
                                    <button id="Back-to-shop">Return to Shop</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar heroHeight={0} setBlurBackground={setBlurBackground}/>
        </div>
    );
};

export default RegisterComponent;


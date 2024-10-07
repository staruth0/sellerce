import React, { useState, useEffect } from 'react';
import './verify-email.css';
import RootLayout from '../../layout/RootLayout';
const EmailVerification = () => {
  const [blurBackground, setBlurBackground] = useState(false);
  const [verificationMessage, setVerificationMessage] = useState('');
  const [token, setToken] = useState('');
  const [isError,setIsError]=useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    setToken(tokenFromUrl);
  }, []);

  const handleVerification = async () => {
    if (!token) {
      setVerificationMessage("Invalid verification link. Please try again.");
      setIsError(true);
      return;
    }

    try {
      const response = await fetch(`https://appleproductsbackend.vercel.app/v1/auth/verify-email?token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: token })
      });

      if (response.ok) {
        setVerificationMessage("Email verified successfully!");
        setIsError(false);
        setTimeout(() => {
          window.location.href = "http://localhost:3001/login";
        }, 3000);
      } else {
        setVerificationMessage("Email verification failed. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setVerificationMessage("An error occurred. Please try again later.");
      setIsError(true);
    }
  };

  return (
    <>
      <div className="verificatio-reset-main">
        <div className="verification-container">
            <h2 className='verification-title'>Email Verification</h2>
            {isError &&<p className="verification-message verification-error-message">{verificationMessage || <span className='verification-message verification-message-neutral'>Please click the button below to verify your email address.</span>}</p>}
            {!isError &&<p className="verification-message verification-success-message">{verificationMessage || <span className='verification-message verification-message-neutral'>Please click the button below to verify your email address.</span>}</p>}
            <button title="verify" className="verification-button" onClick={handleVerification}>Verify Email</button>
        </div>
      </div>
    </>
    
  );
};

export default EmailVerification;

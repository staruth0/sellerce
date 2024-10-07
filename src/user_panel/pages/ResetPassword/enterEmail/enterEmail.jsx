import React, { useState } from 'react';
import './enterEmail.css';
import handleApiError from '../../../utils/handleApiError';
import backendBaseURL from '../../../utils/backendBaseURL';

const EnterEmail = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    backendBaseURL.post('/auth/forgot-password', { email }, 
        { headers: { 'Content-Type': 'application/json' } }
    )
      .then((response) => {
        if (response.status === 200) {
          setMessage('Password reset link sent to your email.');
          setIsError(false);
        } else {
          setMessage('An error occurred. Please try again.');
          setIsError(true);
        }
      })
      .catch((error) => {
        console.log(error)
        setMessage(handleApiError(error,setIsError));
      });
  };

  return (
    <div className="enter-email-container">
      <h2 className="reset-password-heading">Reset Password</h2>
      <form className="email-form" onSubmit={handleSubmit}>
        <input
          className="email-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="submit-button" type="submit">Send Reset Link</button>
      </form>
      {message && !isError && (<p className="success-message">{message}</p>)}
      {(message && isError) && (<p className="error-message">{message}</p>)}
    </div>
  );
};

export default EnterEmail;

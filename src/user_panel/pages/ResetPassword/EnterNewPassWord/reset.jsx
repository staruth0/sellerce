import React, { useState, useEffect } from 'react';
import handleApiError from '../../../utils/handleApiError';
import backendBaseURL from '../../../utils/backendBaseURL';
import './reset.css';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    const emailFromUrl = urlParams.get('email');

    // Validate token
    if (!tokenFromUrl) {
      setMessage('Token is missing.');
      setIsError(true);
      return;
    }

    // Validate email
    if (!emailFromUrl || !validateEmail(emailFromUrl)) {
      setMessage('Email is missing or invalid.');
      setIsError(true);
      return;
    }

    // If both token and email are valid, set the state
    setToken(tokenFromUrl);
    setEmail(emailFromUrl);
  }, []);

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setIsError(true);
      return;
    }

    try {
      const response = await backendBaseURL.post(
        `/auth/reset-password?token=${token}`,
        {
          password: password,
          email: email,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (response.status === 200) {
        setMessage('Password reset successfully.');
        setIsError(false);

        // Redirect to login page after displaying success message
        window.location.href = '/login';
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'An error occurred. Please try again.');
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setMessage(handleApiError(error, setIsError));
    }
  };

  return (
    <div className="reset-password-container">
      <h2 className="reset-password-heading">Reset Password</h2>
      <form className="reset-password-form" onSubmit={handleSubmit}>
        <input
          className="password-input"
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="password-input"
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {message && !isError && <p className="success-message">{message}</p>}
        {message && isError && <p className="error-message">{message}</p>}
        <button className="submit-button" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;


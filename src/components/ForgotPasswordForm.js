import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1337/api/auth/forgot-password", { email });
      setMessage("Password reset email sent. Please check your inbox.");
      setError("");
    } catch (error) {
      console.error('Error Response:', error.response?.data);
      setMessage("");
      setError("Failed to send password reset email. Please try again later.");
    }
  };

  return (
    <div className="cont_centrar"> 
      <div className="cont_login">
        <form onSubmit={handleForgotPassword} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="input_form_sign"
            />
          </div>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error">{error}</p>}
          <div className="cont_btn">
            <button type="submit" className="btn_sign">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;

import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useLocation } from "react-router-dom";
import Modal from "./Modal";
import "./Auth.css";

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("oobCode");

  const validatePassword = (password) => {
    if (password.length < 8 || !/[!@#$%^&*]/.test(password)) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setError("Passwords do not match");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long and contain a special character");
      return;
    }

    try {
      await firebase.auth().confirmPasswordReset(code, password);
      setMessage("Password reset successfully. You can now log in.");
      setError("");
    } catch (error) {
      console.error("Error:", error);
      setMessage("");
      setError("Failed to reset password. Please try again later.");
    }
  };

  return (
    <Modal>
      <div className="cont_login">
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input_form_sign"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirmation">Confirm New Password</label>
            <input
              type="password"
              id="passwordConfirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
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
    </Modal>
  );
}

export default ResetPasswordForm;

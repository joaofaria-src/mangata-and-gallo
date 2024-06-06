import React, { useState, useContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Modal from "./Modal";
import { ModalContext } from "./ModalContext";
import "./Auth.css";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { isModalOpen, closeModal } = useContext(ModalContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      setMessage("Password reset email sent. Please check your inbox.");
      setError("");
    } catch (error) {
      console.error("Error:", error);
      setMessage("");
      setError("Failed to send password reset email. Please try again later.");
    }
  };

  return (
    isModalOpen && (
      <Modal onClose={closeModal}>
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
      </Modal>
    )
  );
}

export default ForgotPasswordForm;

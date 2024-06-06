import React, { useState, useContext, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Modal from "./Modal";
import { ModalContext } from "./ModalContext";
import ForgotPasswordForm from "./ForgotPasswordForm";
import "./Auth.css";

function Auth({ setUserFirstName }) {
  const { isModalOpen, closeModal } = useContext(ModalContext);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    isLogin: true
  });

  const [errors, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      setShowForgotPassword(false);
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isModalOpen) {
      setLoginSuccess(false);
    }
  }, [isModalOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8 || !/[!@#$%^&*]/.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long and contain a special character";
      valid = false;
    }

    if (!formData.isLogin && !formData.username) {
      newErrors.username = "Username is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const auth = firebase.auth();
      const { email, password, username, isLogin } = formData;

      if (isLogin) {
        await auth.signInWithEmailAndPassword(email, password);
      } else {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        await userCredential.user.updateProfile({ displayName: username });
      }

      localStorage.setItem('userLoggedIn', true);
      localStorage.setItem('firstName', auth.currentUser.displayName);

      setUserFirstName(auth.currentUser.displayName);
      setLoginSuccess(true);

      setFormData(prevData => ({
        ...prevData,
        email: "",
        password: "",
        username: "",
        isLogin: prevData.isLogin
      }));
      setErrors({});
    } catch (error) {
      console.error("Authentication error:", error);

      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        setErrors({ password: "Incorrect email or password" });
      } else if (error.code === "auth/email-already-in-use") {
        setErrors({ email: "Email already exists" });
      } else {
        setErrors({ server: "Server error. Please try again later." });
      }
    }
  };

  const handleToggleForm = () => {
    setFormData(prevData => ({
      ...prevData,
      isLogin: !prevData.isLogin
    }));
    setErrors({});
  };

  return (
    isModalOpen && (
      <Modal onClose={closeModal}>
        <div className="cont_login">
          {loginSuccess ? (
            <p className="success-message">Logged in successfully!</p>
          ) : (
            <>
              {!showForgotPassword ? (
                <form onSubmit={handleSubmit} className="auth-form">
                  <div className="cont_tabs_login">
                    <ul className="ul_tabs">
                      <li className={formData.isLogin ? "active" : ""}>
                        <a href="#" onClick={handleToggleForm}>SIGN IN</a>
                        <span className="linea_bajo_nom"></span>
                      </li>
                      <li className={!formData.isLogin ? "active" : ""}>
                        <a href="#up" onClick={handleToggleForm}>SIGN UP</a>
                        <span className="linea_bajo_nom"></span>
                      </li>
                    </ul>
                  </div>
                  {!formData.isLogin && (
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="input_form_sign"
                      />
                      {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input_form_sign"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="input_form_sign"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                  </div>
                  {errors.server && <p className="error">{errors.server}</p>}
                  <div className="cont_btn">
                    <button type="submit" className="btn_sign">{formData.isLogin ? "Log In" : "Register"}</button>
                  </div>
                  {formData.isLogin && (
                    <div className="forgot-password-link">
                      <a href="#" onClick={() => setShowForgotPassword(true)}>Forgot Password?</a>
                    </div>
                  )}
                </form>
              ) : (
                <ForgotPasswordForm closeModal={closeModal} />
              )}
            </>
          )}
        </div>
      </Modal>
    )
  );
}

export default Auth;

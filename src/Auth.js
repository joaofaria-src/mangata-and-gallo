import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

function Auth() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isLogin: true
  });

  const [errors, setErrors] = useState({});

  // Toggle between login and registration forms
const handleToggleForm = () => {
  setFormData({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isLogin: !formData.isLogin
  });
  setErrors({}); // Clear any previous errors when toggling the form
};

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Validate individual field and set error message
    if (!value.trim() && name !== "isLogin") {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      }));
    } else if (
      (name === "email" && !/\S+@\S+\.\S+/.test(value)) ||
      (name === "password" && !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}/.test(value))
    ) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is invalid`
      }));
    } else {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ""
      }));
    }
  };

// Validate the entire form before submission
const validateForm = () => {
  const errors = {};
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }
  if (!formData.password.trim()) {
    errors.password = "Password is required";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}/.test(formData.password)) {
    errors.password = "Password must contain at least one uppercase letter, one number, one special character, and be at least 8 characters long";
  }
  if (!formData.isLogin && !formData.firstName.trim()) {
    errors.firstName = "First Name is required";
  }
  if (!formData.isLogin && !formData.lastName.trim()) {
    errors.lastName = "Last Name is required";
  }
  return errors;
};

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const url = formData.isLogin
        ? "http://localhost:5000/login"
        : "http://localhost:5000/register";
      const response = await axios.post(url, formData);
      console.log(response.data);
      // Clear form data and errors on successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isLogin: formData.isLogin // Preserve login state
      });
      setErrors({});
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        if (error.response.status === 400) {
          // Handle specific error messages based on status code
          if (error.response.data.message === "User already exists") {
            setErrors({ email: "Email address is already in use" });
          } else if (error.response.data.message === "Invalid password") {
            setErrors({ password: "Invalid email or password" });
          } else {
            // Generic server error message
            setErrors({ server: "Server error. Please try again later." });
          }
        } else {
          // Generic server error message
          setErrors({ server: "Server error. Please try again later." });
        }
      } else if (error.request) {
        // The request was made but no response was received
        setErrors({ server: "No response from server. Please try again later." });
      } else {
        // Something happened in setting up the request that triggered an error
        setErrors({ server: "Error: " + error.message });
      }
    }
  };

  return (
    <div className="cont_centrar">
      <div className="cont_login">
        <form onSubmit={handleSubmit}>
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
          <div className="cont_text_inputs">
            {/* First name and last name fields for sign up */}
            {!formData.isLogin && (
              <>
                <input
                  type="text"
                  className="input_form_sign sign_up"
                  placeholder="FIRST NAME"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  className="input_form_sign sign_up"
                  placeholder="LAST NAME"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </>
            )}
            {/* Common fields for both sign up and sign in */}
            <input
              type="text"
              className={"input_form_sign d_block " + (errors.email ? "active_inp" : "")}
              placeholder="EMAIL"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              className={"input_form_sign d_block " + (errors.password ? "active_inp" : "")}
              placeholder="PASSWORD"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="cont_btn">
            <button type="submit" className="btn_sign">{formData.isLogin ? "SIGN IN" : "SIGN UP"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;

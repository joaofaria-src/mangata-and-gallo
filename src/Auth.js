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
    setFormData(prevState => ({
      ...prevState,
      isLogin: !prevState.isLogin
    }));
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
      errors.password = "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long";
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
      const url = formData.isLogin ? "http://localhost:5000/login" : "http://localhost:5000/register";
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
          if (error.response.data.message === 'User already exists') {
            setErrors({ email: "Email address is already in use" });
          } else if (error.response.data.message === 'Invalid password') {
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
    <div className="auth-form-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="auth-form-card">
            <div className="auth-form-card-body">
              {/* Display appropriate form title based on login state */}
              <h2 className="text-center mb-4">{formData.isLogin ? "Sign In" : "Sign Up"}</h2>
              <form onSubmit={handleSubmit}>
                {/* Display additional fields for registration */}
                {!formData.isLogin && (
                  <>
                    <div className="auth-form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        className="auth-form-input"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                    </div>
                    <div className="auth-form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        className="auth-form-input"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                      {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                    </div>
                  </>
                )}
                {/* Display email input field */}
                <div className="auth-form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    className="auth-form-input"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                {/* Display password input field */}
                <div className="auth-form-group">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    className="auth-form-input"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                {/* Display submit button */}
                <button type="submit" className="btn auth-btn-primary btn-block">
                  {formData.isLogin ? "Sign In" : "Sign Up"}
                </button>
              </form>
              {/* Display toggle button for switching between login and registration */}
              <p className="text-center mt-3">
                {formData.isLogin ? "Don't have an account?" : "Already have an account?"}
                <button className="btn auth-btn-link" onClick={handleToggleForm}>
                  {formData.isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

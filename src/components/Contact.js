import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./contact.css";

function Contact() {
  // State variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Event handlers for input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <div className="contact-row">
        {/* Contact Form */}
        <div className="contact-form-column">
          <div className="contact-form-wrapper">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name Input */}
              <div className="contact-form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  className="contact-form-control"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              {/* Email Input */}
              <div className="contact-form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="contact-form-control"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              {/* Message Input */}
              <div className="contact-form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  className="contact-form-control"
                  value={message}
                  onChange={handleMessageChange}
                  required
                />
              </div>
              {/* Submit Button */}
              <button type="submit" className="contact-btn contact-btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* Contact Information */}
        <div className="contact-info-column">
          <div className="contact-info-wrapper">
            <h2>Contact Information</h2>
            {/* Address */}
            <div className="contact-info-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <p>1234 Magnolia Avenue</p>
                <p>Springfield, MA 12345</p>
              </div>
            </div>
            {/* Email */}
            <div className="contact-info-item">
              <FaEnvelope className="contact-icon" />
              <p>info@mangataandgallo.com</p>
            </div>
            {/* Phone */}
            <div className="contact-info-item">
              <FaPhone className="contact-icon" />
              <p>(123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
      {/* Google Map */}
      <div className="contact-map-row">
        <div className="contact-map-column">
          <div className="contact-map-wrapper">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.48132354295!2d-0.24168189130441142!3d51.52877184166211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c24c5b5f65%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1619473223785!5m2!1sen!2suk"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
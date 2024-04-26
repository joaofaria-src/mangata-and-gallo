import React, { useState } from "react";

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
    // You can handle form submission logic here, like sending the email
    console.log("Form submitted:", { name, email, message });
    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <div className="pink-container contact-form-container">
        <h2>Send us an Email</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="pink-container contact-info-container">
        <h2>Contact Us</h2>
        <p>Visit us at:</p>
        <p>1234 Magnolia Avenue</p>
        <p>Springfield, MA 12345</p>
        <p>Email: info@mangataandgallo.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="map-container pink-container">
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
  );
}

export default Contact;

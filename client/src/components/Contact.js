import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  // The responseMessage state in the Contact component is used to provide feedback to the user about the status of their form submission.
  // It shows whether the message was successfully sent or if there was an error.

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    const formData = { name, email, message }; // Collect all input data
    // JavaScript automatically uses the variable names as the key names in the object on using shorthand syntax

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Message sent successfully!');
        setName(''); // Reset name
        setEmail(''); // Reset email
        setMessage(''); // Reset message
      } else {
        setResponseMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {responseMessage && <p>{responseMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
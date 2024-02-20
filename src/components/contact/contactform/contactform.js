import React, { useState } from 'react';
import './contactform.css';

function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill out all fields.');
      return;
    }

    // You can submit the form data using fetch or any HTTP library
    try {
      const response = await fetch('https://formspree.io/f/xzbqlavz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, message }),
      });

      if (response.ok) {
        // Clear form fields
        setFullName('');
        setEmail('');
        setMessage('');
        // Display success message
        setSuccessMessage('Message sent successfully');
        // Clear error message
        setErrorMessage('');
        // Hide success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } else {
        // Handle error response
        setErrorMessage('Error submitting form. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Error submitting form. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength="30"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        maxLength="500"
        placeholder="Write your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      {errorMessage && <p id="message2">{errorMessage}</p>}
      {successMessage && <p id="message3">{successMessage}</p>}
      <button className="cardio" type="submit">SEND YOUR MESSAGE</button>
      <div className="liner"></div>
    </form>
  );
}

export default ContactForm;

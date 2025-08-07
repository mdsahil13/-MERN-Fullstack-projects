import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ onFeedbackSubmitted }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) return alert("Please fill all fields");

    try {
      await axios.post('http://localhost:5000/api/feedback', { name, message });
      setName('');
      setMessage('');
      if (onFeedbackSubmitted) {
        onFeedbackSubmitted(); 
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback.');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Your name"
      />
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Your feedback"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackList = ({ refresh }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/api/feedback');
      setFeedbacks(res.data);
    };
    fetchData();
  }, [refresh]); 

  return (
    <div className="feedback-list">
      <h2>All Feedback</h2>
      {feedbacks.map(fb => (
        <div className="feedback-item" key={fb._id}>
          <p><strong>{fb.name}</strong></p>
          <p>{fb.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;

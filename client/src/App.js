
import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';

function App() {

  const [refresh, setRefresh] = useState(false);


  const handleFeedbackSubmitted = () => {

    setRefresh(prev => !prev);
  };

  return (
    <div className="App">
      <h1>Feedback Collector</h1>


      <FeedbackForm onFeedbackSubmitted={handleFeedbackSubmitted} />


      <FeedbackList refresh={refresh} />
    </div>
  );
}

export default App;

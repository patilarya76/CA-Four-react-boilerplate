

import React, { useState } from 'react';
import './Result.css'; // Import the styles for Result component

export default function Result() {
  // State to track whether the dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`result-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Button to toggle dark mode */}
      <button className='dark-mode-button' onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Header indicating quiz completion */}
      <h2>Quiz Completed!</h2>
    
      {/* Thank you message for completing the quiz */}
      <p>Thank you for completing the quiz!</p>
      
      {/* Restart button with a link to the 'main' page */}
      <a href="main">
        <button>Restart</button>
      </a>
    </div>
  );
}

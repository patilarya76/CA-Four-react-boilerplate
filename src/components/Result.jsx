
import React, { useState } from 'react';

import './Result.css';

// Functional component for displaying quiz result
export default function Result({ questions, selectedOptions }) {
  // State to track whether dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Function to calculate the user's score based on selected options
  const calculateScore = () => {
    let score = 0;

    // Iterate through selected options and compare with correct options
    selectedOptions.forEach((selectedOption, index) => {
      // Find the correct option for the current question
      const correctOption = questions[index].options.find((option) => option.isCorrect);

      // Increment the score if the selected option is correct
      if (selectedOption === correctOption.id) {
        score++;
      }
    });

    return score;
  };

  // Calculate the user's score
  const score = calculateScore();

  // Render the Result component
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

      {/* Display the user's score */}
      <p>Your Score: {score} out of {questions.length}</p>

      {/* Restart button with a link to the 'main' page */}
      <a href="main">
        <button>Restart</button>
      </a>
    </div>
  );
}

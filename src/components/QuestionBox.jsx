
import React, { useState } from 'react';

import './QuestionBox.css';

import questionsData from '../questions.jsx';
import Result from './Result';

// Functional component for rendering the quiz questions
export default function QuestionBox() {
  // State to control the color mode of the component (light/dark)
  const [isWhiteMode, setIsWhiteMode] = useState(true);
  // State to track whether a question is highlighted
  const [highlightedQuestion, setHighlightedQuestion] = useState(false);
  // State to keep track of the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // State to control whether to display the result component
  const [showResult, setShowResult] = useState(false);
  // State to store the selected options for each question
  const [selectedOptions, setSelectedOptions] = useState(Array(questionsData.length).fill(null));

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setIsWhiteMode((prevMode) => !prevMode);
  };

  // Function to highlight the current question
  const highlightQuestion = () => {
    setHighlightedQuestion(true);
  };

  // Function to remove the highlight from the current question
  const removeHighlight = () => {
    setHighlightedQuestion(false);
  };

  // Function to handle the click event when an option is selected
  const handleOptionClick = (optionId) => {
    // Create a copy of the selected options array
    const newSelectedOptions = [...selectedOptions];
    // Update the selected option for the current question
    newSelectedOptions[currentQuestionIndex] = optionId;
    // Set the updated selected options array
    setSelectedOptions(newSelectedOptions);

    // Check if there are more questions
    if (currentQuestionIndex < questionsData.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      // Remove the highlight from the current question
      setHighlightedQuestion(false);
    } else {
      // If it's the last question, show the result component
      setShowResult(true);
    }
  };

  // Get the current question from the data based on the current index
  const currentQuestion = questionsData[currentQuestionIndex];

  // Render the QuestionBox component
  return (
    <>
      {showResult ? (
        // Render the Result component when showResult is true
        <Result
          questions={questionsData}
          selectedOptions={selectedOptions}
        />
      ) : (
        // Render the main QuestionBox component when showResult is false
        <div id='main' className={`Main ${isWhiteMode ? 'white-mode' : 'dark-mode'}`}>
          <div>
            {/* Button to toggle between light and dark mode */}
            <button className='changemode' onClick={toggleMode}>
              {isWhiteMode ? 'Dark Mode' : 'White Mode'}
            </button>
          </div>
          <div className='text'>
            Here's a chance to have fun!!
          </div>

          <div className="questions">
            {/* Display question number and text */}
            <p className='question-number'>Question {currentQuestionIndex + 1} out of {questionsData.length}</p>
            <span className={`question-text ${highlightedQuestion ? 'highlighted' : ''}`}>
              {currentQuestion.text}
            </span>
          </div>

          <div className="options">
            {/* Map through and display options as buttons */}
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                className={`option ${selectedOptions[currentQuestionIndex] === option.id ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option.id)}
              >
                {option.text}
              </button>
            ))}
          </div>

          <div className="buttons">
            {/* Button to highlight the current question */}
            <button id='previous' className='button' onClick={highlightQuestion}>
              Highlights
            </button>
            {/* Button to remove the highlight from the current question */}
            <button id='remove' className='button' onClick={removeHighlight}>
              Remove Highlights
            </button>
          </div>
        </div>
      )}
    </>
  );
}

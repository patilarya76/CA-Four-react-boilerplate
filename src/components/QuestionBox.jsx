// src/components/QuestionBox.jsx

import React, { useState } from 'react';
import './QuestionBox.css';
import questionsData from '../questions.jsx'; 

export default function QuestionBox() {
  const [isWhiteMode, setIsWhiteMode] = useState(true);
  const [highlightedQuestion, setHighlightedQuestion] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const toggleMode = () => {
    setIsWhiteMode((prevMode) => !prevMode);
  };

  const highlightQuestion = () => {
    setHighlightedQuestion(true);
  };

  const removeHighlight = () => {
    setHighlightedQuestion(false);
  };

  const handleOptionClick = () => {
   
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      
      setHighlightedQuestion(false);
    }
  };

  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <>
      <div className={`Main ${isWhiteMode ? 'white-mode' : 'dark-mode'}`}>
        <div>
          <button className='changemode' onClick={toggleMode}>
            {isWhiteMode ? 'Dark Mode' : 'White Mode'}
          </button>
        </div>
        <div className='text'>
          Here's a chance to have fun!!
        </div>

        <div className="questions">
          <span className={`question-text ${highlightedQuestion ? 'highlighted' : ''}`}>
            {currentQuestion.text}
          </span>
        </div>
        <p></p>

        <div className="options">
          {currentQuestion.options.map((option) => (
            <button key={option.id} className='option' onClick={handleOptionClick}>
              {option.text}
            </button>
          ))}
        </div>
        <div className="buttons">
          <button id='previous' className='button' onClick={highlightQuestion}>
            Highlights
          </button>
          <button id='remove' className='button' onClick={removeHighlight}>
            Remove Highlights
          </button>
        </div>
      </div>
    </>
  );
}

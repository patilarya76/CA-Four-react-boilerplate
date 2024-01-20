


import React from "react";
import "./App.css"; 
import questions from "./questions"; 
import Result from "./components/Result"; 
import QuestionBox from "./components/QuestionBox"; 

// Functional component for the main App
function App() {
  // Render the main App component
  return (
    <div>
      {/* Render the QuestionBox component within the main div */}
      <QuestionBox />
    </div>
  );
}


export default App;



// Import necessary React and custom component dependencies
import React from "react";
import "./App.css"; // Import the global styles for the app
import questions from "./questions"; // Import the array of questions data
import Result from "./components/Result"; // Import the Result component
import QuestionBox from "./components/QuestionBox"; // Import the QuestionBox component

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

// Export the App component as the default export
export default App;

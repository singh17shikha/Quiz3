import React, { useState } from 'react';
import questionsData from './components/QuestionData';

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questionsData.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  // Add more state variables as needed

  // Handle option selection
  const handleOptionSelect = (questionIndex, optionIndex) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(updatedSelectedOptions);
  };

  // Handle "Next" button click
  const handleNextButtonClick = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  // Calculate score and determine if passed
  const calculateScore = () => {
    let score = 0;
    selectedOptions.forEach((selectedOption, index) => {
      if (selectedOption === questionsData[index].correctAnswer) {
        score += 2;
      }
    });
    return score;
  };

  // Render question and options
  const renderQuestion = () => {
    const question = questionsData[currentQuestionIndex];
    return (
      <div>
        <h2>{question.question}</h2>
        <ul>
          {question.options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  checked={selectedOptions[currentQuestionIndex] === index}
                  onChange={() => handleOptionSelect(currentQuestionIndex, index)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Render result
  const renderResult = () => {
    const score = calculateScore();
    const isPassed = score >= 12;

    if (isPassed) {
      return <h2>Congratulations! You passed the test.</h2>;
    } else {
      return (
        <div>
          <h2>Sorry, you failed the test.</h2>
          <button onClick={() => window.location.reload()}>Restart Test</button>
        </div>
      );
    }
  };

  return (
    <div>
      {showResult ? (
        renderResult()
      ) : (
        <div>
          {renderQuestion()}
          <button onClick={handleNextButtonClick}>{currentQuestionIndex < questionsData.length - 1 ? 'Next' : 'Submit'}</button>
        </div>
      )}
    </div>
  );
};

export default Test;

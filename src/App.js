import React from 'react';
import Test from './components/Test';
import Timer from './components/Timer';

const App = () => {
  const handleTimeUp = () => {
    // Perform actions when time is up
    // For example, submit the test automatically
    // You can add your logic here
  };

  return (
    <div>
      <h1>Test App</h1>
      <Timer onTimeUp={handleTimeUp} />
      <Test />
    </div>
  );
};

export default App;


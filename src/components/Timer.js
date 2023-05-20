import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeUp }) => {
  const [timeRemaining, setTimeRemaining] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    let timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    if (timeRemaining === 0) {
      clearInterval(timer);
      onTimeUp();
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeRemaining, onTimeUp]);

  // Format the time in MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h2>Time Remaining: {formatTime(timeRemaining)}</h2>
    </div>
  );
};

export default Timer;

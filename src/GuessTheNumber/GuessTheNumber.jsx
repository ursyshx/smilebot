import React, { useState, useEffect } from 'react';
import './GuessTheNumber.css'; 

const GuessTheNumber = () => {
  const [random, setRandom] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  
  useEffect(() => {
    setRandom(Math.ceil(Math.random() * 100));
  }, []);

  
  const inputVal = (e) => {
    setInputValue(e.target.value);
  };

 
  const checkNumber = () => {
    const guessedNumber = parseInt(inputValue, 10); 

    if (isNaN(guessedNumber)) {
      setMessage('Please enter a valid number!');
      return;
    }

    setAttempts(attempts + 1); 

    if (guessedNumber === random) {
      setMessage(`🎉 You guessed it in ${attempts + 1} attempts!`);
    } else if (guessedNumber < random) {
      setMessage('Too low! Try again.');
      setInputValue('');
    } else {
      setMessage('Too high! Try again.');
      setInputValue('');
    }
  };

  
  const reset = () => {
    setRandom(Math.ceil(Math.random() * 100)); 
    setInputValue(''); 
    setMessage(''); 
    setAttempts(0); 
  };

  return (
    <div className="guess-the-number">
      <h1 className="game-title">Guess The Number</h1>
      <p className="game-instruction">Guess a number between 1 and 100:</p>
      <input
        type="number"
        placeholder="Enter your guess"
        value={inputValue}
        onChange={inputVal}
        className="guess-input"
      />
      <br />
      <div className="button-container">
        <button onClick={checkNumber} className="check-button">
          Check
        </button>
        <button onClick={reset} className="reset-button">
          Reset
        </button>
      </div>
      <p className="message">{message}</p>
      <p className="attempts">Attempts: {attempts}</p>
    </div>
  );
};

export default GuessTheNumber;
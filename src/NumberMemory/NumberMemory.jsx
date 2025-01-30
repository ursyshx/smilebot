import React, { useState, useEffect } from "react";
import "./NumberMemory.css"; 

const NumberMemory = () => {
  const [randomNumber, setRandomNumber] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [showNumber, setShowNumber] = useState(true);
  const [result, setResult] = useState("");
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    generateNewNumber();
  }, []);

  const generateNewNumber = () => {
    const newNumber = Math.floor(1000 + Math.random() * 900).toString();
    setRandomNumber(newNumber);
    setShowNumber(true);
    setUserGuess("");
    setResult("");
    setMsg('');

    setTimeout(() => {
      setShowNumber(false);
    }, 3000);
  };

  const checkGuess = () => {
    setCount(count + 1);
    if (userGuess === randomNumber) {
      setResult("🎉 Correct! You remembered the number!");
      setUserGuess("");
      generateNewNumber();
    } else {
      setResult("❌ Wrong! Try again.");
      setUserGuess("");
      setMsg(`Your winning streak is ${count}`);
      setCount(0);
    }
  };

  return (
    <div className="number-memory">
      <h1 className="number-memory-title">Number Memory Game</h1>
      <h1 className="number-memory-score">{count}</h1>

      <p className="number-memory-instruction">
        {showNumber ? `Remember this number: ${randomNumber}` : "Enter the number you saw:"}
      </p>

      {!showNumber && (
        <>
          <input
            type="text"
            placeholder="Enter number"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            className="number-memory-input"
          />
          <br />
          <button onClick={checkGuess} className="number-memory-button">
            Check
          </button>
        </>
      )}

      <button onClick={generateNewNumber} className="number-memory-button">
        New Number
      </button>

      <p className={`number-memory-result ${result.includes("Correct") ? "correct" : "wrong"}`}>
        {result}
      </p>

      <h5 className="number-memory-streak">{msg}</h5>
    </div>
  );
};

export default NumberMemory;

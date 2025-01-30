import React, { useState } from 'react';
import './DiceRoll.css';

const DiceRoll = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [userGuess, setUserGuess] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [msg,setMsg] = useState('');

 
  const rollDice = () => {
    if(parseInt(userGuess)>=1 && parseInt(userGuess)<=6){


    const randomValue = Math.floor(Math.random() * 6) + 1; 
    setDiceValue(randomValue);

    if (parseInt(userGuess, 10) === randomValue) {
      setResult('🎉 You guessed it right!');
      setScore(score + 10);
      setUserGuess('');
    } else {
      setResult('😢 Wrong guess! Try again.');
    }
}
else{
     setMsg('enter value betn 1 to 6 only');
     setUserGuess('');
     setMsg('');
}
  };



  const resetGame = () => {
    setDiceValue(1);
    setUserGuess('');
    setResult('');
    setScore(0);
    setMsg('');
  };

  return (
    <div className="dice-roll">
      <h1 className="game-title">Dice Roll Game</h1>
      <p className="game-instruction">Guess a number between 1 and 6:</p>
      <input
        type="number"
        placeholder="Enter your guess"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        className="guess-input"
        min="1"
        max="6"
      />
      <br />
      <button onClick={rollDice} className="roll-button">
        Roll Dice
      </button>
      <button onClick={resetGame} className="reset-button">
        Reset Game
      </button>
      <div className="result">
        <h5>{msg}</h5><br></br>
        <p>Dice Value: {diceValue}</p>
        <p>{result}</p>
        <p>Your Score: {score}</p>
      </div>
    </div>
  );
};

export default DiceRoll;
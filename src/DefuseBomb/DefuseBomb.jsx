import React, { useState, useEffect } from "react";
import bomb from "../BombImage/bomb.jpg";
import bombBlast from "../BombImage/bombBlast.webp";
import hurray from "../BombImage/Hurray.webp";
import "./DefuseBomb.css"; 

const DefuseBomb = () => {
  const [counter, setCounter] = useState(10);
  const [userInput, setUserInput] = useState("");
  const [image, setImage] = useState(bomb);
  const [message, setMessage] = useState("City needs you! Please Defuse The Bomb!");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (counter > 0 && !gameOver) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer);
    } else if (counter === 0 && !gameOver) {
      setImage(bombBlast);
      setMessage("💥 BOOM! The bomb exploded!");
      setGameOver(true);
    }
  }, [counter, gameOver]);

  const defuseBomb = () => {
    if (userInput.toLowerCase() === "defuse" && counter > 0) {
      setImage(hurray);
      setMessage("🎉 Hurray! You saved the city!");
      setGameOver(true);
    } else {
      setMessage("❌ Wrong passcode! Try again!");
    }
  };

  const resetGame = () => {
    setCounter(10);
    setUserInput("");
    setImage(bomb);
    setMessage("City needs you! Please Defuse The Bomb!");
    setGameOver(false);
  };

  return (
    <div className="defuse-bomb">
      <h1 className="main-message">{message}</h1>
      <h2 className="timer">⏳ Timer: {counter} seconds</h2>
      <input
        type="text"
        className="passcode-input"
        placeholder="Enter passcode"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        disabled={gameOver}
      />
      <br />
      <img src={image} alt="Bomb Status" className="bomb-image" />
      <br />
      <button onClick={defuseBomb} className="defuse-button" disabled={gameOver}>
        DEFUSE
      </button>
      <button onClick={resetGame} className="reset-button">
        RESET
      </button>
    </div>
  );
};

export default DefuseBomb;

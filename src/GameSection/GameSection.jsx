import React, { useState } from 'react';
import RockPaperScissors from '../RockPaperScissors/RockPaperScissors';
import GuessTheNumber from '../GuessTheNumber/GuessTheNumber';
import DiceRoll from '../DiceRoll/DiceRoll';
import NumberMemory from '../NumberMemory/NumberMemory';
import BombDefuser from '../DefuseBomb/DefuseBomb'; 
import './GameSection.css';

const GameSection = ({ onBackToHome }) => {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { id: 1, name: 'Rock Paper Scissors', component: <RockPaperScissors /> },
    { id: 2, name: 'Guess The Number', component: <GuessTheNumber /> },
    { id: 3, name: 'Dice Roll', component: <DiceRoll /> },
    { id: 4, name: 'Number Memory', component: <NumberMemory /> },
    { id: 5, name: 'Bomb Defuser', component: <BombDefuser /> }, 
  ];

  return (
    <div className="game-section">
      {!selectedGame ? (
        <>
          <h1 className="game-section-title">Welcome to the Game Section!</h1>
          <p className="game-section-text">Choose a game to play:</p>
          <div className="game-list">
            {games.map((game) => (
              <button key={game.id} className="game-button" onClick={() => setSelectedGame(game.component)}>
                {game.name}
              </button>
            ))}
          </div>
          <br />
          <button onClick={onBackToHome} className="back-home-button">
            ⬅ Back to Home
          </button>
        </>
      ) : (
        <>
          {selectedGame}<br />
          <button onClick={() => setSelectedGame(null)} className="back-button">
            ⬅ Back to Game List
          </button>
        </>
      )}
    </div>
  );
};

export default GameSection;

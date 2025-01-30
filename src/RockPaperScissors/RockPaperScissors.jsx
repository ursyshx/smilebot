import React, { useState } from 'react';
import './RockPaperScissors.css'

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [cscore,setcScore] = useState(0);
  const [gameOver, setGameOver] = useState('');
  // const [chance,setChance]= useState(5);

  const choices = ['rock', 'paper', 'scissors'];

  const playGame = (choice) => {
    if (score >= 50 || cscore >= 50) return;

    

    const computer = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(computer);

    if (choice === computer) {
      setResult('Draw!');
    } 
    else if ( (choice === 'rock' && computer === 'scissors') ||
               (choice === 'paper' && computer === 'rock') ||
               (choice === 'scissors' && computer === 'paper')  ) 
    {
      setResult('You Win!');
      
      setScore((score)=>{
        score=score+10;
        if(score===50)
            {
            setGameOver("🎉 You win this series!")
            }
        return score;
      });
     
    }
    else {
      setResult('Computer Win!');
     
      setcScore((cscore)=>{
        cscore=cscore+10;
        if(cscore===50)
            {
            setGameOver("😢 You lose, computer wins this series.")
            }
        return cscore;
      });
    }
    
    
  };
   
  const restart=()=>
  {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
    setScore(0);
    setcScore(0);
    setGameOver("");

  }


  return (
   
    <div className="rock-paper-scissors">
      <h1 className='color1'>Rock Paper Scissors</h1><br></br>
      <div className="d-flex justify-content-center gap-3 mt-3">
       <button className="btn btn-primary" onClick={() => playGame('rock')}>Rock</button>
       <button className="btn btn-success" onClick={() => playGame('paper')}>Paper</button>
       <button className="btn btn-danger" onClick={() => playGame('scissors')}>Scissors</button>
       </div>
       <br></br>

<div>
      <h4>Your Choice: {userChoice}</h4>
      <h4>Computer's Choice: {computerChoice}</h4>

      <h4>Your Score :{score}</h4>
      <h4>Computers Score :{cscore} </h4>
      <h4>Result: {result}</h4>
      <h4 className='text-warning'>{gameOver}</h4><br></br>
      <button className='btn btn-warning' onClick={restart}> RESTART </button><br></br>
      <link ></link>
      </div>
    </div>
  );
};

export default RockPaperScissors;
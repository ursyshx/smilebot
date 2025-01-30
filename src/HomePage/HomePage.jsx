import React from 'react';
import './HomePage.css';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="home-page">
      <header className="header">
        <h1 className="header-title">Welcome to Game World</h1>
        <p className="header-subtitle">Explore and play exciting games!</p>
      </header>

      <div className="content">
        <div className="game-intro">
          <h2 className="game-intro-title">Ready to Play?</h2>
          <p className="game-intro-text">
            Click the button below to enter the game section and choose your favorite game.
          </p>
          <button className="start-button" onClick={onNavigate}>
            Start Gaming
          </button>
        </div>

        <div className="features">
          <h3 className="features-title">Why Choose Us?</h3>
          <ul className="features-list">
            <li className="features-item">🎮 Multiple Fun Games</li>
            <li className="features-item">🏆 Score System to Track Progress</li>
            <li className="features-item">⏳ Timed Challenges</li>
            <li className="features-item">🌟 Simple and User-Friendly</li>
          </ul>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-text">© 2023 Game World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
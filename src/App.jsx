import React, { useState } from 'react';
import HomePage from './HomePage/HomePage';
import GameSection from './GameSection/GameSection';

function App() {
  const [showGameSection, setShowGameSection] = useState(false);

  return (
    <div>
      {!showGameSection ? (
        <HomePage onNavigate={() => setShowGameSection(true)} />
      ) : (
        <GameSection onBackToHome={() => setShowGameSection(false)} />
      )}
    </div>
  );
}

export default App;

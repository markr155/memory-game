import { useState } from "react";

function App() {
  return (
    <>
      <header>
        <h1>Header</h1>
        <p>Click on each Pokémon once</p>
      </header>
      <div className="score-container">
        <div id="high-score">High Score: 0</div>
        <div id="current-score">Score: 0</div>
      </div>
      <div className="game-container">
        <div className="game-card">
          <img src="" alt="" />
          <p>Pikachu</p>
          <p>Electric Mouse</p>
        </div>
      </div>
      
    </>
  );
}

export default App;

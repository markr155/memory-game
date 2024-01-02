import { useState } from "react";
import Header from "./Header";
import Scores from "./Scores";
import GameArea from "./GameArea";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Header />
      <Scores currentScore={currentScore} highScore={highScore} />
      <GameArea
        setCurrentScore={setCurrentScore}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;

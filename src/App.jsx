import { useState } from "react";
import Header from "./Header";
import Scores from "./Scores";
import GameArea from "./GameArea";
import GameOverModal from "./GameOverModal";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Header />
      <Scores
        currentScore={currentScore}
        highScore={highScore}
        currentRound={currentRound}
      />
      <GameArea
        setCurrentScore={setCurrentScore}
        setHighScore={setHighScore}
        currentScore={currentScore}
        highScore={highScore}
        currentRound={currentRound}
        setCurrentRound={setCurrentRound}
        setIsOpen={setModalIsOpen}
        isOpen={modalIsOpen}
      />
      <GameOverModal 
      setCurrentScore={setCurrentScore}
      currentScore={currentScore}
      setHighScore={setHighScore}
      highScore={highScore}
      isOpen={modalIsOpen} 
      setIsOpen={setModalIsOpen} />
    </>
  );
}

export default App;

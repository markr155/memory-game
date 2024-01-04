import { useEffect, useState } from "react";

export default function GameOverModal({
  setCurrentScore,
  currentScore,
  setHighScore,
  highScore,
  currentRound,
  isOpen,
  setIsOpen,
}) {
  const [oldScore, setOldScore] = useState(0);
    useEffect(() => {
        if (currentScore > highScore) {
            setHighScore(currentScore);
          }
        setOldScore(currentScore);
        setCurrentScore(0)
    }, [isOpen])

  return (
    isOpen && (
      <div className="overlay">
        <dialog id="gameover-modal" className={isOpen ? "show" : "hidden"}>
          <p>Game Over!</p>
          <p>{`Your score was ${oldScore} and your high score is ${highScore}!`}</p>
          <button onClick={() => setIsOpen(false)}>Start over</button>
        </dialog>
      </div>
    )
  );
}

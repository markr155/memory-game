export default function GameOverModal({
  currentScore,
  highScore,
  currentRound,
  isOpen,
  setIsOpen,
}) {
  const currentScorehigher = currentScore > highScore;


  return (
    isOpen && (
      <div className="overlay">
        <dialog id="gameover-modal" className={isOpen ? "show" : "hidden"}>
          <p>Game Over!</p>
          <p>{`Your score was ${currentScore} which was ${
            currentScorehigher ? "higher" : "lower"
          } than your high score: ${highScore}`}</p>
          <button onClick={() => setIsOpen(false)}>Start over</button>
        </dialog>
      </div>
    )
  );
}

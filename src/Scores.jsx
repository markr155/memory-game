export default function Scores({ currentScore, highScore }) {
  return (
    <div className="score-container">
      <div id="high-score">High Score: {highScore}</div>
      <div id="current-score">Score: {currentScore}</div>
    </div>
  );
}
